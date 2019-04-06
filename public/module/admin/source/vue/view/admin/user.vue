<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="username" :class="getClass(error.username)">
                            <td>用户名</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.username">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.username }}</span>
                            </td>
                        </tr>
                        <tr id="password" :class="getClass(error.password)">
                            <td>密码</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.password">
                                <span class="necessary"><template v-if="param.mode == 'add'">*</template></span>
                                <span class="tip">密码长度至少6位</span>
                                <span class="msg">{{ error.password }}</span>
                            </td>
                        </tr>
                        <tr id="avatar" :class="getClass(error.avatar)">
                            <td>头像</td>
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
                                        <img :src="form.avatar_explain" v-if="param.mode == 'edit' && form.avatar_explain" class="init-show-image" />
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
                                <span class="msg">{{ error.avatar }}</span>
                            </td>
                        </tr>
                        <tr id="phone" :class="getClass(error.phone)">
                            <td>手机号码</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.phone">
                                <span class="necessary"></span>
                                <span class="tip">请输入数字</span>
                                <span class="msg">{{ error.phone }}</span>
                            </td>
                        </tr>
                        <tr id="role_id" :class="getClass(error.role_id)">
                            <td>用户角色</td>
                            <td>
                                <i-select v-model="form.role_id" style="width: 300px;">
                                    <i-option v-for="v in role" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                </i-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.role_id }}</span>
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

<script src="./js/user.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/user.css"></style>