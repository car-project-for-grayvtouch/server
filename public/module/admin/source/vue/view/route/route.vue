<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="name" :class="getClass(error.name)">
                            <td>名称</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.name">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.name }}</span>
                            </td>
                        </tr>
                        <tr id="en" :class="getClass(error.en)">
                            <td>英文名称</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.en">
                                <span class="necessary"></span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.en }}</span>
                            </td>
                        </tr>
                        <tr id="route" :class="getClass(error.route)">
                            <td>路由</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.route">
                                <span class="necessary"></span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.route }}</span>
                            </td>
                        </tr>
                        <tr id="method" :class="getClass(error.method)">
                            <td>方法</td>
                            <td>
                                <RadioGroup v-model="form.method">
                                    <Radio v-for="v in $store.state.business.route.method" :label="v" :key="v">{{ v }}</Radio>
                                </RadioGroup>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.method }}</span>
                            </td>
                        </tr>
                        <tr id="type" :class="getClass(error.type)">
                            <td>类型</td>
                            <td>
                                <RadioGroup v-model="form.type">
                                    <Radio v-for="v in $store.state.business.route.type" :label="v" :key="v">{{ v }}</Radio>
                                </RadioGroup>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.type }}</span>
                            </td>
                        </tr>
                        <tr id="s_ico" :class="getClass(error.s_ico)">
                            <td>小图标</td>
                            <td ref="small-image-container">
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
                                        <img :src="form.s_ico" v-if="param.mode == 'edit' && form.s_ico" class="init-show-image" />
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
                                <span class="tip"></span>
                                <span class="msg">{{ error.s_ico }}</span>
                            </td>
                        </tr>
                        <tr id="b_ico" :class="getClass(error.b_ico)">
                            <td>大图标</td>
                            <td ref="big-image-container">
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
                                        <img :src="form.b_ico" v-if="param.mode == 'edit' && form.b_ico" class="init-show-image" />
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
                                <span class="tip"></span>
                                <span class="msg">{{ error.b_ico }}</span>
                            </td>
                        </tr>
                        <tr id="p_id" :class="getClass(error.p_id)">
                            <td>上级路由</td>
                            <td>
                                <v-select :data="routes" v-model="form.p_id" :width="300"></v-select>
                                <span class="necessary"></span>
                                <span class="tip">默认：顶级路由</span>
                                <span class="msg">{{ error.p_id }}</span>
                            </td>
                        </tr>
                        <tr id="enable" :class="getClass(error.enable)">
                            <td>是否启用</td>
                            <td>
                                <RadioGroup v-model="form.enable">
                                    <Radio v-for="(v,k) in $store.state.business.bool_str" :label="k" :key="k">{{ v }}</Radio>
                                </RadioGroup>
                                <span class="necessary"></span>
                                <span class="tip">默认：是</span>
                                <span class="msg">{{ error.enable }}</span>
                            </td>
                        </tr>
                        <tr id="hidden" :class="getClass(error.hidden)">
                            <td>是否隐藏</td>
                            <td>
                                <RadioGroup v-model="form.hidden">
                                    <Radio v-for="(v,k) in $store.state.business.bool_str" :label="k" :key="k">{{ v }}</Radio>
                                </RadioGroup>
                                <span class="necessary"></span>
                                <span class="tip">默认：否</span>
                                <span class="msg">{{ error.hidden }}</span>
                            </td>
                        </tr>
                        <tr id="menu" :class="getClass(error.menu)">
                            <td>是否菜单</td>
                            <td>
                                <RadioGroup v-model="form.menu">
                                    <Radio v-for="(v,k) in $store.state.business.bool_str" :label="k" :key="k">{{ v }}</Radio>
                                </RadioGroup>
                                <span class="necessary"></span>
                                <span class="tip">默认：否</span>
                                <span class="msg">{{ error.menu }}</span>
                            </td>
                        </tr>
                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary"></span>
                                <span class="tip">默认：0，仅允许输入整数</span>
                                <span class="msg">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" class="run-button run-button-submit">提交</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/route.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/route.css"></style>