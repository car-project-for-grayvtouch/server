<template>
    <!-- 加载层 -->
    <div>
        <!-- 加载元素 -->
        <div class="Loading">
            <!-- 背景颜色 -->
            <div class='bg'></div>
            <div class="cons">
                <div class="text">
                    <!-- 进度信息：仅在开发时保留 -->
                    <span class="line">上传基本信息开始</span>
                </div>
                <!-- 加载动画 -->
                <div class="animate">
                    <!-- line-scale -->
                    <div class="item center line-scale hide">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <!-- ball-purlse -->
                    <div class="item center ball-pulse hide">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <!-- loader -->
                    <div class="item roll-loader hide">
                        <div class="loader">
                            <div class="loader-outter"></div>
                            <div class="loader-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 关闭按钮 -->
            <div class="btns">
                <div class="btn close">
                    <div class="positive"></div>
                    <div class="negative"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-loading" ,
    }
</script>

<style scoped>

</style>