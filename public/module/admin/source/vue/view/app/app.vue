<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
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
                        <tr>
                            <td>封面</td>
                            <td ref="image-container">
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
                                    <div class='preview-images hide'>
                                        <!-- 图片上传项目：旧 -->
                                        <div class="image-item" data-filename="sama-96.jpg">
                                            <div class="img"><img src="http://qp333com.oss-cn-hangzhou.aliyuncs.com/7peishang.com/avatar/2017-11-10/bf07531ad5dd288afc93bab47ee8d258.jpg" class="image"></div>
                                            <div class="close"><img src="/UploadImages/Images/delete_unfocus.png" data-focus="/UploadImages/Images/delete_focus.png" data-unfocus="/UploadImages/Images/delete_unfocus.png" class="image"></div>
                                            <div class="progress hide">
                                                <div class="p-total">
                                                    <div class="p-cur"></div>
                                                </div>
                                            </div>
                                            <div class="msg hide">
                                                <div class="msg-in">成功</div>
                                            </div>
                                        </div>
                                    </div>
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
                            </td>
                        </tr>
                        <tr id="ios_link" :class="getClass(error.ios_link)">
                            <td>ios 链接</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.ios_link">
                                <span class="necessary"></span>
                                <span class="msg">{{ error.ios_link }}</span>
                            </td>
                        </tr>
                        <tr id="android_link" :class="getClass(error.android_link)">
                            <td>android 链接</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.android_link">
                                <span class="necessary"></span>
                                <span class="msg">{{ error.android_link }}</span>
                            </td>
                        </tr>
                        <tr id="ios_wakeup_link" :class="getClass(error.ios_wakeup_link)">
                            <td>ios唤醒链接</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.ios_wakeup_link">
                                <span class="necessary"></span>
                                <span class="msg">{{ error.ios_wakeup_link }}</span>
                            </td>
                        </tr>
                        <tr id="android_wakeup_link" :class="getClass(error.android_wakeup_link)">
                            <td>android 唤醒链接</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.android_wakeup_link">
                                <span class="necessary"></span>
                                <span class="msg">{{ error.android_wakeup_link }}</span>
                            </td>
                        </tr>
                        <tr id="link" :class="getClass(error.link)">
                            <td>外部链接</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.link">
                                <span class="necessary"></span>
                                <span class="msg">{{ error.link }}</span>
                            </td>
                        </tr>

                        <tr id="is_app">
                            <td>是否app</td>
                            <td>
                                <radio-group v-model="form.is_app">
                                    <radio v-for="(v,k) in $store.state.business.bool_int" :label="k" :key="k">
                                        <span>{{ v }}</span>
                                    </radio>
                                </radio-group>
                                <span class="necessary"></span>
                                <span class="msg">{{ error.is_app }}</span>
                            </td>
                        </tr>

                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary"></span>
                                <span class="tip">默认：0，仅允许整数</span>
                                <span class="msg">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" class="btn-2">提交</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/app.js"></script>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/app.css"></style>