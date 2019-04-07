<template>
    <div class="brand-container">
        <div class="left">
            <div class="letter">
                <span class="cur">所有品牌</span>
                <span>热门品牌</span>
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
            </div>
            <div class="brand">
                <div class="item">
                    <div class="logo">
                        <img src="https://img20.360buyimg.com/popshop/jfs/t1/21713/1/5027/5175/5c38740eE4ccfc381/0bedaba1e05119ac.jpg" class="image">
                    </div>
                    <div class="name">华为</div>
                    <div class="status"></div>
                </div>
            </div>
            <div class="selected">
                <h6 class="bold">已选择的品牌：</h6>
                <p>
                    <span>华为</span>
                    <span>奥迪</span>
                    <span>宝马</span>
                </p>
            </div>
            <div class="function">
                <button type="button" class="run-button run-button-blue">确定</button>
                <button type="button" class="run-button run-button-range">取消</button>
            </div>
        </div>
        <div class="right">
            <button type="button" class="run-button run-button-blue"><span>+</span>展开</button>
            <button type="button" class="run-button run-button-blue">单选</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "brand"
    }
</script>

<style scoped>

</style>