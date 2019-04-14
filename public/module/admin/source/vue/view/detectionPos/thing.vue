<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <form @submit.prevent="submit">
                    <table class="input-tb">
                        <tbody>
                        <tr id="name" :class="getClass(error.name)">
                            <td>名称</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.name">
                                <span class="necessary">*</span>
                                <span class="tip">如果有映射图，建议命名：[序号]名称；例如：[1]左A柱</span>
                                <span class="msg">{{ error.name }}</span>
                            </td>
                        </tr>
                        <tr id="detection_module_id" :class="getClass(error.detection_module_id)">
                            <td>检测模块</td>
                            <td>
                                <i-select v-model="form.detection_module_id" style="width: 300px;" @on-change="setPreview">
                                    <i-option v-for="v in module" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                </i-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.detection_module_id }}</span>
                            </td>
                        </tr>
                        <tr id="detection_group_id" :class="getClass(error.detection_group_id)">
                            <td>位置分组</td>
                            <td>
                                <i-select v-model="form.detection_group_id" style="width: 300px;">
                                    <i-option v-for="v in group" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                </i-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.detection_group_id }}</span>
                            </td>
                        </tr>
                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary"></span>
                                <span class="tip">默认：0，仅允许输入整数</span>
                                <span class="msg">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" class="run-button run-button-submit">提交</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="preview">
                        <div class="in">
                            <img :src="preview" class="image" v-if="preview">
                            <div v-else class="empty">暂无模块映射图，请前往检测模块处添加（可选）</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/thing.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/thing.css"></style>