<template>
    <i-select v-model="cValue" :style="'width:' + width + 'px'">
        <i-option v-if="has" :value="top.key">{{ top.value }}</i-option>
        <i-option v-for="v in data" :value="v[attr.id]" :key="v[attr.id]">{{ v[attr.floor] > 1 ? '|' + '_'.repeat((v[attr.floor] - 1) * 4) : '' }}{{ v[attr.name] }}</i-option>
    </i-select>
</template>

<script>
    export default {
        name: "v-select" ,
        data () {
            return {
                cValue: 0 ,
            };
        } ,
        props: {
            value: {
                type: [String , Number] ,
                required: true ,
            },
            data: {
                type: Array ,
                required: true ,
            } ,
            width: {
                type: Number ,
                default: 200 ,
            } ,
            // 是否需要顶级项
            has: {
                type: Boolean ,
                default: true ,
            } ,
            top: {
                type: Object ,
                default () {
                    return {
                        key: 0 ,
                        value: '顶级分类' ,
                    };
                } ,
            } ,
            attr: {
                type: Object ,
                default () {
                    return {
                        id: 'id',
                        floor: 'floor',
                        name: 'name',
                    }
                }
            }
        } ,
        watch: {
            cValue (nv) {
                this.$emit('input' , nv);
            } ,
            value: {
                immediate: true ,
                handler (nv) {
                    this.cValue = nv;
                }
            }
        } ,
    }
</script>

<style scoped>

</style>