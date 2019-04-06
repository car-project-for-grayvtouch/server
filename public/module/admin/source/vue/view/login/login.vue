<template>
    <div class="container">
        <v-loading ref="loading"></v-loading>
        <form class="form" @submit.prevent="submit">
            <div class="top">
                <div class="image-container"><img :src="$store.state.topContext.host + '/static/image/avatar.jpg'" class="image"></div>
            </div>
            <div class="btm">
                <div class="line field">
                    <div class="top">
                        <div class="left"><input type="text" v-model="form.username" @input="error.username = ''" class="input" placeholder="请输入用户名"></div>
                        <div class="right"><img src="./image/user.png" class="image"></div>
                    </div>
                    <div class="btm" :class="getClass(error.username)">{{ error.username }}</div>
                </div>
                <div class="line field">
                    <div class="top">
                        <div class="left"><input type="password" v-model="form.password" @input="error.password = ''" placeholder="请输入密码" class="input"></div>
                        <div class="right"><img src="./image/password.png" class="image"></div>
                    </div>
                    <div class="btm" :class="getClass(error.password)">{{ error.password }}</div>
                </div>
                <div class="line field verify_code">
                    <div class="top">
                        <div class="left"><input type="text" v-model="form.verify_code" @input="error.verify_code = ''" placeholder="请输入验证码" class="input"></div>
                        <div class="right"><img :src="verifyCode" @click="getVerifyCode" class="image"></div>
                    </div>
                    <div class="btm" :class="getClass(error.verify_code)">{{ error.verify_code }}</div>
                </div>
                <!-- todo 如果非后台，则需要开启下面这一项-->
                <!--
                <div class="line function">
                    记住密码：
                    <i-switch size="large" v-model="remember">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </i-switch>
                </div>
                -->

                <div class="line btns">
                    <button type="submit" class="run-button run-button-submit">提交</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script src="./js/login.js"></script>
<style scoped src="./css/login.css"></style>