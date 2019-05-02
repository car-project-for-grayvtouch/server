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
                                <span class="tip">即 服务描述 的意思</span>
                                <span class="msg">{{ error.name }}</span>
                            </td>
                        </tr>
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
                                        <div class="tip">这边是提示内容</div>
                                    </div>
                                    <!-- 预置显示图片 -->
                                    <div class="init-show-image-list">
                                        <img :src="form.image" v-if="param.mode == 'edit' && form.image" class="init-show-image" />
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
                                <span class="msg">{{ error.image }}</span>
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

<script src="./js/thing.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/thing.css"></style>