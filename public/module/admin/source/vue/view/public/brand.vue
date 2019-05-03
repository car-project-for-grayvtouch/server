<template>
    <div>
        <div class="brand-container">
            <div class="left">
                <div class="letter">
                    <span class='cur' data-type="all">所有品牌</span>
                    <span data-type="hot">热门品牌</span>
                    <span v-for="v in letter" :key="v" :data-letter="v">{{ v }}</span>
                </div>
                <div class="brand">

                    <div class="item" v-for="v in brand" :data-id="v.id" :data-hot="v.hot" :data-letter="v.letter" :data-name="v.name">
                        <div class="logo full">
                            <img :src="v.logo_explain" class="image">
                        </div>
                        <div class="name full">{{ v.name }}</div>
                        <div class="status hide"><img src="/plugin/Brand/image/selected.png" class="image"></div>
                    </div>

                </div>
                <div class="selected">
                    <h4 class="header weight">已选择的品牌：</h4>
                    <p class="brand"></p>
                </div>
                <div class="function hide">
                    <button type="button" class="run-button run-button-blue confirm">确定</button>
                    <button type="button" class="run-button run-button-orange cancel">取消</button>
                </div>
            </div>
            <div class="right">
                <button type="button" class="run-button run-button-blue ctrl">+展开</button>
                <button type="button" class="run-button run-button-blue mode">多选</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-brand" ,
        props: {
            brand: {
                default () {
                    return [
                        {
                            id: 1 ,
                            hot: 'y' ,
                            letter: 'A' ,
                            name: '奥迪' ,
                            logo: '' ,
                        } ,
                    ];
                } ,
            } ,
        } ,
        data () {
            return {
                letter: [] ,
            };
        } ,
        watch: {
            brand: {
                immediate: true ,
                handler (nv) {
                    let letter = [];
                    nv.forEach((v) => {
                        if (letter.indexOf(v.letter) == -1) {
                            letter.push(v.letter);
                        }
                    });
                    letter.sort((a , b) => {
                        return a > b ? 1 : -1;
                    });
                    this.letter = letter;
                } ,
            }
        } ,
    }
</script>
<style scoped></style>