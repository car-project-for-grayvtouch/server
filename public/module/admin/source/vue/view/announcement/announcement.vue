<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <form @submit.prevent="submit">
                <table class="input-tb">
                    <tbody>
                        <tr id="pos" :class="getClass(error.pos)">
                            <td>位置</td>
                            <td>
                                <i-select v-model="form.pos" style="width: 300px">
                                    <i-option v-for="(v,k) in $store.state.business.pos.announcement" :key="k" :value="k">{{ v }}</i-option>
                                </i-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.pos }}</span>
                            </td>
                        </tr>
                        <tr id="link" :class="getClass(error.title)">
                            <td>标题</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.title">
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.title }}</span>
                            </td>
                        </tr>
                        <tr id="text" :class="getClass(error.text)">
                            <td>内容</td>
                            <td>
                                <div ref="editor"></div>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.text }}</span>
                            </td>
                        </tr>
                        <tr id="weight" :class="getClass(error.weight)">
                            <td>权重</td>
                            <td>
                                <input type="number" step="0" class="form-text" v-model="form.weight">
                                <span class="necessary">*</span>
                                <span class="tip">默认：0，仅允许整数</span>
                                <span class="msg">{{ error.weight }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="submit" class="btn-2">提交</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/announcement.js"></script>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/announcement.css"></style>