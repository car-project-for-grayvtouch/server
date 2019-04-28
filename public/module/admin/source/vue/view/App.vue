<template>
    <div class="app">
        <router-view></router-view>
        <v-loading ref="loading"></v-loading>
    </div>
</template>
<script>
    export default {
        name: 'v-app' ,
        data () {
            return {
                ins: {
                    loading: null ,
                } ,
                dom: {} ,
                ajax: {} ,
                pending: {} ,
                value: {} ,
            };
        } ,
        mixins: [
            mixins.loading ,
        ] ,
        mounted () {

        } ,
    };
</script>
<style scoped></style>