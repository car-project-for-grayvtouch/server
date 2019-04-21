<template>
    <button :type="type" class="run-button" :class="`run-button-${color}`" @click.stop="$emit('click')"><i class="run-iconfont" :class="`run-${ico}`" v-if="has"></i><slot></slot></button>
</template>

<script>
    export default {
        name: "v-button" ,
        props: {
            color: {
                type: String ,
                default: 'blue' ,
            } ,
            has: {
                type: Boolean ,
                default: false ,
            } ,
            ico: {
                type: String ,
                default: 'edit' ,
            } ,
            type: {
                type: String ,
                default: 'button'
            }
        }
    }
</script>

<style scoped>

</style>