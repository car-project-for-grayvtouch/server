<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <v-menu-switch ref="menu-switch" :data="navMenu"></v-menu-switch>
                <form @submit.prevent="submit">
                    <div class="options" ref="options">

                        <!-- 基本信息 -->
                        <div class="option base hide" data-id="base">
                            <table class="input-tb">
                                <tbody>
                                <tr id="brand_id" :class="getClass(error.brand_id)">
                                    <td>品牌</td>
                                    <td>
                                        <v-brand ref="brand" :brand="brand"></v-brand>
                                        <span class="necessary">*</span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.brand_id }}</span>
                                    </td>
                                </tr>
                                <tr id="car_series_id" :class="getClass(error.car_series_id)">
                                    <td>车系</td>
                                    <td>
                                        <i-select v-model="form.car_series_id" style="width: 300px;" @on-change="selectedCarSeries">
                                            <i-option v-for="v in carSeries" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                        </i-select>
                                        <span class="necessary">*</span>
                                        <span class="tip">请选择品牌后在选择车系！如果没有搜索到结果，请添加车系！</span>
                                        <span class="msg">{{ error.car_series_id }}</span>
                                    </td>
                                </tr>
                                <tr id="car_model_id" :class="getClass(error.car_model_id)">
                                    <td>车型</td>
                                    <td>
                                        <i-select v-model="form.car_model_id" style="width: 300px;">
                                            <i-option v-for="v in carModel" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                        </i-select>
                                        <span class="necessary">*</span>
                                        <span class="tip">请选择车系后在选择车型！如果没有搜索到结果，请&nbsp;<button type="button" class="run-button run-button-blue" @click="location('/carModel/add' , {mode: 'add'} , '_blank')">添加车型</button>&nbsp;！</span>
                                        <span class="msg">{{ error.car_model_id }}</span>
                                    </td>
                                </tr>
                                <tr id="title" :class="getClass(error.title)">
                                    <td>标题</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.title">
                                        <span class="necessary">*</span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.title }}</span>
                                    </td>
                                </tr>
                                <tr id="thumb" :class="getClass(error.thumb)">
                                    <td>封面</td>
                                    <td ref="thumb-container">
                                        <div class='upload-image'>
                                            <div class='select-images'>
                                                <div class="upload-show">
                                                    <div class="image-line"><img src="" class="image upload-image-btn" /><span class="selected-count hide">10</span></div>
                                                    <div class="text-line">请选择要上传的图片</div>
                                                    <div class="clear-selected" title="清空已选择的图片"><img src="" class="image" /></div>
                                                    <input type='file' name='upload_images' multiple="multiple" class='upload-images-input'  />
                                                </div>
                                                <div class="tip">这边是提示内容</div>
                                            </div>
                                            <!-- 预置显示图片 -->
                                            <div class="init-show-image-list">
                                                <img :src="form.thumb" v-if="param.mode == 'edit' && form.thumb" class="init-show-image" />
                                            </div>
                                            <div class='preview-images hide'></div>
                                            <!-- 待上传列表 -->
                                            <div class="upload-image-list hide">
                                                <div class="upload-title">待上传列表</div>
                                                <div class="image-list">
                                                    <div class="list-content list-title">
                                                        <div class="item div-preview">图片预览</div>
                                                        <div class="item div-type">类型</div>
                                                        <div class="item div-size">大小</div>
                                                        <div class="item div-speed">速度</div>
                                                        <div class="item div-status">状态</div>
                                                        <div class="item div-opr">操作</div>
                                                    </div>
                                                    <div class="list-content list-body"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="necessary"></span>
                                        <span class="tip">
                                            <template v-if="param.mode == 'add'">如果没有上传封面，将从车辆图片中选择第一张作为封面</template>
                                        </span>
                                        <span class="msg">{{ error.thumb }}</span>
                                    </td>
                                </tr>

                                <tr id="price" :class="getClass(error.price)">
                                    <td>价格</td>
                                    <td>
                                        <input type="number" step="0.01" class="form-text" v-model="form.price">
                                        <span class="necessary">*</span>
                                        <span class="tip">默认：0.00，最多允许两位小数，单位：美元</span>
                                        <span class="msg">{{ error.price }}</span>
                                    </td>
                                </tr>

                                <tr id="mileage" :class="getClass(error.price)">
                                    <td>行驶里程</td>
                                    <td>
                                        <input type="number" step="0.01" class="form-text" v-model="form.mileage">
                                        <span class="necessary">*</span>
                                        <span class="tip">默认：0.00，最多允许两位小数，单位：英里</span>
                                        <span class="msg">{{ error.mileage }}</span>
                                    </td>
                                </tr>

                                <tr id="transfer_record" :class="getClass(error.transfer_record)">
                                    <td>过户记录（次数）</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.transfer_record">
                                        <span class="necessary">*</span>
                                        <span class="tip">默认：0，请输入自然数</span>
                                        <span class="msg">{{ error.transfer_record }}</span>
                                    </td>
                                </tr>

                                <tr id="color" :class="getClass(error.color)">
                                    <td>车身颜色</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.color">
                                        <span class="necessary">*</span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.color }}</span>
                                    </td>
                                </tr>

                                <tr id="sale_point" :class="getClass(error.sale_point)">
                                    <td>销售亮点</td>
                                    <td>
                                        <i-select v-model="form.sale_point" style="width: 300px;">
                                            <i-option v-for="(v,k) in $store.state.business.car.salePoint" :key="k" :value="k">{{ v }}</i-option>
                                        </i-select>
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.sale_point }}</span>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                        <div class="option image hide" data-id="image">
                            <div class="upload">
                                <div class="run-title">
                                    <div class="left">上传图片</div>
                                    <div class="right"></div>
                                </div>
                                <table class="input-tb">
                                    <tbody>
                                    <tr id="image" :class="getClass(error.image)">
                                        <td>图片</td>
                                        <td ref="image-container">
                                            <div class='upload-image'>
                                                <div class='select-images'>
                                                    <div class="upload-show">
                                                        <div class="image-line"><img src="" class="image upload-image-btn" /><span class="selected-count hide">10</span></div>
                                                        <div class="text-line">请选择要上传的图片</div>
                                                        <div class="clear-selected" title="清空已选择的图片"><img src="" class="image" /></div>
                                                        <input type='file' name='upload_images' multiple="multiple" class='upload-images-input'  />
                                                    </div>
                                                    <div class="tip"></div>
                                                </div>
                                                <!-- 预置显示图片 -->
                                                <div class="init-show-image-list"></div>
                                                <div class='preview-images hide'></div>
                                                <!-- 待上传列表 -->
                                                <div class="upload-image-list hide">
                                                    <div class="upload-title">待上传列表</div>
                                                    <div class="image-list">
                                                        <div class="list-content list-title">
                                                            <div class="item div-preview">图片预览</div>
                                                            <div class="item div-type">类型</div>
                                                            <div class="item div-size">大小</div>
                                                            <div class="item div-speed">速度</div>
                                                            <div class="item div-status">状态</div>
                                                            <div class="item div-opr">操作</div>
                                                        </div>
                                                        <div class="list-content list-body"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="necessary"></span>
                                            <span class="tip" v-if="param.mode == 'add'">如果没有上传封面，将从车辆图片中选择第一张作为封面</span>
                                            <span class="msg">{{ error.image }}</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="list" v-if="param.mode == 'edit'">
                                <div class="run-title">
                                    <div class="left">数据列表</div>
                                    <div class="right">
                                        <button type="button" class="run-button run-button-orange" @click="delSelected">
                                            <i class="run-iconfont run-delete"></i>
                                            删除选中项
                                        </button>
                                    </div>
                                </div>
                                <table class="line-tb">
                                    <thead>
                                    <tr>
                                        <th class="w-20">
                                            <input type="checkbox" @click="selectAllEvent">
                                        </th>
                                        <th class="w-40">ID</th>
                                        <th class="w-80">图片</th>
                                        <th class="w-80">mime</th>
                                        <th class="w-80">大小</th>
                                        <th class="w-100">创建时间</th>
                                        <th class="w-140">操作</th>
                                    </tr>
                                    </thead>
                                    <tbody ref="tbody">
                                    <tr v-for="v in form.image" :key="v.id" :data-id="v.id" @click="selectEvent">
                                        <td><input type="checkbox" class="c-box"></td>
                                        <td>{{ v.id }}</td>
                                        <td><img :src="v.url" class="image"></td>
                                        <td>{{ v.mime }}</td>
                                        <td>{{ v.size }}</td>
                                        <td>{{ v.create_time }}</td>
                                        <td>
                                            <button type="button" class="run-button run-button-blue" @click.stop="setThumb(v)">设为封面</button>
                                            <button type="button" class="run-button run-button-orange" @click="delTarget(v.id)">
                                                <i class="run-iconfont run-delete"></i>删除
                                            </button>
                                        </td>
                                    </tr>
                                    <tr v-if="form.image.length == 0">
                                        <td colspan="8">没有相关数据</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="option service hide" data-id="service">
                            <div class="item" v-for="v in service">
                                <div class="left">
                                    <Tooltip :content="v.name"  placement="top-start">
                                        <img :src="v.image" class="image">
                                    </Tooltip>
                                </div>
                                <div class="right">
                                    <RadioGroup v-model="v.checked">
                                        <Radio v-for="(v,k) in $store.state.business.bool_str" :key="k" :label="k">{{ v }}</Radio>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="submit">
                        <button type="submit" class="run-button run-button-submit">提交</button>
                    </div>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/thing.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/form.css"></style>
<style scoped src="./css/thing.css"></style>