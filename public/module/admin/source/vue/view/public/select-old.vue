<template>
    <select v-model="cValue" v-html="html"></select>
</template>

<script>
    export default {
        name: "v-select" ,
        data () {
            return {
                // 内容
                html: '' ,
                delimiter: '|--' ,
                prefix: '&nbsp;' ,
                // 每加深一个层级就新增给定数量的分隔符
                count: 8 ,
                cValue: '' ,
            };
        } ,
        props: {
            hasTop: {
                type: Boolean ,
                default () {
                    return false;
                } ,
            } ,
            top: {
                type: Object ,
                default () {
                    return {
                        name: '顶级分类' ,
                        value: 0
                    };
                }
            } ,
            data: {
                type: Array ,
                default () {
                    return [];
                }
            } ,
            value: [String , Number]

        } ,
        watch: {
            data (nv , ov) {
                // 重置
                this.html = `<option value="">请选择...</option>`;
                let top = this.hasTop ? `<option value="${this.top.value}">${this.top.name}</option>` : '';
                this.html += top;
                let genOption = (data , floor) => {
                    for (let i = 0; i < data.length; ++i)
                    {
                        let cur = data[i];
                        let prefix = this.prefix.repeat((floor - 1) * this.count) + this.delimiter;
                        this.html += `<option value="${cur.id}">${prefix + cur.name}</option>`;
                        if (cur.children.length > 0) {
                            genOption(cur.children , floor + 1);
                        }
                    }
                };
                genOption(nv , 1);
            } ,
            cValue (nv) {
                this.$emit('input' , nv);
            } ,
            value: {
                immediate: true ,
                handler (nv) {
                    this.cValue = nv;
                }
            }
        }
    }
</script>

<style scoped>

</style>