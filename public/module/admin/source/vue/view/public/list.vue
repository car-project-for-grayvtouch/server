<template>
    <div class="module-container">
        <slot :nav="nav">
            <module-nav :topRoute="nav.topRoute" :pos="nav.pos"></module-nav>
        </slot>
        <div class="module-content">
            <div class="list">
                <div class="data">
                </div>
                <div class="page"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list.vue"
    }
</script>

<style scoped>

</style>