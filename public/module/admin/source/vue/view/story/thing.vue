<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="title" :class="getClass(error.title)">
                            <td>标题</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.title">
                                <span class="necessary">*</span>
                                <span class="tip">例如：2016 Nissan Quest</span>
                                <span class="msg">{{ error.title }}</span>
                            </td>
                        </tr>
                        <tr id="username" :class="getClass(error.username)">
                            <td>用户名称</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.username">
                                <span class="necessary">*</span>
                                <span class="tip">例如：陈先生</span>
                                <span class="msg">{{ error.username }}</span>
                            </td>
                        </tr>
                        <tr id="logo" :class="getClass(error.logo_explain)">
                            <td>图片</td>
                            <td ref="image-container">
                                <div class='upload-image'>
                                    <div class='select-images'>
                                        <div class="upload-show">
                                            <div class="image-line"><img src="" class="image upload-image-btn" /><span class="selected-count hide">10</span></div>
                                            <div class="text-line">请选择要上传的图片</div>
                                            <div class="clear-selected" title="清空已选择的图片"><img src="" class="image" /></div>
                                            <input type='file' name='upload_images' class='upload-images-input'  />
                                        </div>
                                        <div class="tip"></div>
                                    </div>
                                    <!-- 预置显示图片 -->
                                    <div class="init-show-image-list">
                                        <img :src="form.image_explain" v-if="param.mode == 'edit' && form.image_explain" class="init-show-image" />
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
                        <tr id="content" :class="getClass(error.content)">
                            <td>内容</td>
                            <td>
                                <textarea v-model="form.content" class="form-textarea"></textarea>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.letter }}</span>
                            </td>
                        </tr>
                        <tr id="score" :class="getClass(error.score)">
                            <td>分数</td>
                            <td>
                                <input type="number" step="0.01" class="form-text" v-model="form.score">
                                <span class="necessary">*</span>
                                <span class="tip">例如：9，最多允许两位小数</span>
                                <span class="msg">{{ error.score }}</span>
                            </td>
                        </tr>
                        <tr id="hidden" :class="getClass(error.hidden)">
                            <td>隐藏？</td>
                            <td>
                                <RadioGroup v-model="form.hidden">
                                    <Radio v-for="(v,k) in $store.state.business.bool_str" :key="k" :label="k">{{ v }}</Radio>
                                </RadioGroup>
                                <span class="necessary">*</span>
                                <span class="tip">默认：否</span>
                                <span class="msg">{{ error.hidden }}</span>
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