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
            type: {
                type: [String,Number] ,
                default: 1
            } ,
            menu: {
                type: String ,
                default: 'one'
            }
        } ,
        mounted () {
            var self = this;
            this.ins.menuSwitch = new MenuSwitch(this.$el , {
                // 默认展示的界面
                id: this.menu ,
                // 菜单展示风格
                type: this.type ,
                // 项点击后回调
                click (id) {

                } ,
                // 切换后回调
                switch (id) {
                    self.$emit('switch' , id);
                }
            });
        }
    }
</script>

<style scoped>

</style>