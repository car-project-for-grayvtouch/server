<template>
    <div class="module-nav" ref="module-nav">
        <!-- 占位 -->
        <div class="placeholder" :class="fixed ? '' : 'hide'"></div>
        <!-- 导航内容 -->
        <div class="nav" :class="fixed ? 'fixed-nav' : ''" ref="nav">
            <div class="left">
                <img :src="topRoute.b_ico_explain" class="image">
                <span class="cn">{{ topRoute.name }}</span>
                <span class="delimiter">/</span>
                <span class="en">{{ topRoute.en }}</span>
                &nbsp;&nbsp;
                <button class="run-button run-button-blue" @click.prevent="$parent.reload()">
                    <i class="run-iconfont run-reset"></i>标签页刷新
                </button>
            </div>
            <div class="right">
                <!-- 面包屑 -->
                <template v-for="(v,k) in pos">
                    <span class="text" @click="v.route != '' && v.route != $parent.route.route ? $parent.location(v.route) : null">{{ v.name }}</span>
                    <span class="delimiter" v-if="!(k == pos.length - 1)">/</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-module-nav" ,
        data () {
            return {
                dom: {} ,
                ins: {} ,
                fixed: false ,
                value: {} ,
            };
        } ,
        props: {
            topRoute: {
                type: Object ,
                required: true ,
                default: {}
            } ,
            pos: {
                type: Array ,
                required: true ,
                default: []
            }
        } ,
        mounted () {
            this.initDom();
            this.initInstance();
            this.initialize();
        } ,
        methods: {
            initDom () {
                this.dom.nav = G(this.$refs.nav);
                this.dom.moduleNav = G(this.$refs['module-nav']);
                this.dom.win = G(window);
            } ,

            initInstance () {

            } ,

            initialize () {
                this.value.navH = this.dom.nav.height('content-box');
                this.fixNav();
                this.dom.win.on('scroll' , this.fixNav.bind(this) , true , false);
            } ,

            fixNav () {
                let y = window.pageYOffset;
                if (0 <= y && y <= this.value.navH) {
                    this.fixed = false;
                } else {
                    this.fixed = true;
                }
            } ,
        }
    }
</script>
<style scoped src="./css/moduleNav.css"></style>