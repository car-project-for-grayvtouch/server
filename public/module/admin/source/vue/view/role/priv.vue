<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <form @submit.prevent="submit">
                    <div class="run-title">
                        <div class="left">权限列表</div>
                        <div class="right"></div>
                    </div>
                    <div class="content">
                        <table class="input-tb">
                            <tbody>
                            <tr>
                                <td>
                                    <Tree ref="tree" :data="routes" show-checkbox multiple check-strictly check-directly></Tree>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button class="run-button run-button-submit">提交</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/priv.js"></script>

<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/priv.css"></style>