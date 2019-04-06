<template>
    <i-select v-model="cValue" :style="'width:' + width + 'px'">
        <i-option v-if="top.has" :value="top.value">顶级分类</i-option>
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
            top: {
                type: Object ,
                default () {
                    return {
                        has: true ,
                        value: 0
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