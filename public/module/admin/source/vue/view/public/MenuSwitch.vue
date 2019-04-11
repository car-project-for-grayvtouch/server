<template>
    <div>
        <div class='menu-switch'>
            <div class='item cur' v-for="v in data" :data-id="v.id">{{ v.name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-menu-switch" ,
        data () {
            return {
                ins: {} ,
            };
        } ,
        props: {
            data: {
                type: Array ,
                default () {
                    return [
                        {
                            id: 'one' ,
                            name: '选项1'
                        } ,
                        {
                            id: 'two' ,
                            name: '选项2'
                        }
                    ];
                }
            } ,
        } ,
    }
</script>

<style scoped>

</style>