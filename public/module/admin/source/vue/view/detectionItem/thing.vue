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
                                <span class="tip"></span>
                                <span class="msg">{{ error.name }}</span>
                            </td>
                        </tr>
                        <tr id="detection_pos_id" :class="getClass(error.detection_pos_id)">
                            <td>检测位置</td>
                            <td>
                                <i-select v-model="form.detection_pos_id" style="width: 300px;" @on-change="setPreview">
                                    <i-option v-for="v in position" :key="v.id" :value="v.id">{{ v.group ? `${v.name}【分组：${v.group.name}】` : v.name }}</i-option>
                                </i-select>
                                <span class="necessary">*</span>
                                <span class="tip"></span>
                                <span class="msg">{{ error.detection_pos_id }}</span>
                            </td>
                        </tr>
                        <tr id="option" :class="getClass(error.option)">
                            <td>选项</td>
                            <td ref="option">
                                <div class="line" v-for="(v,k) in option" :key="k">
                                    <input type="text" class="form-text" placeholder="键名" v-model="v.key">
                                    ：
                                    <input type="text" class="form-text" placeholder="键值" v-model="v.value">
                                    <button type="button" class="run-button run-button-orange" @click="option.splice(k , 1)">删除</button>
                                    <button type="button" class="run-button run-button-blue" v-if="k + 1 == option.length" @click="option.push({key: '' , value: ''})">+ 新增</button>
                                </div>

                                <button type="button" class="run-button run-button-blue" v-if="option.length == 0" @click="option.push({key: '' , value: ''})">+ 新增</button>
                                <span class="necessary"></span>
                                <span class="tip">选项必须存在！如非必要请勿改动</span>
                                <span class="msg">{{ error.option }}</span>
                            </td>
                        </tr>
                        <tr id="value" :class="getClass(error.value)">
                            <td>映射值</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.value">
                                <span class="necessary"></span>
                                <span class="tip">选项默认值，请填写 key！默认：normal</span>
                                <span class="msg">{{ error.value }}</span>
                            </td>
                        </tr>
                        <tr id="map_value" :class="getClass(error.map_value)">
                            <td>映射值</td>
                            <td>
                                <input type="text" class="form-text" v-model="form.map_value">
                                <span class="necessary"></span>
                                <span class="tip">如果有映射图，则该选项能很好的做映射</span>
                                <span class="msg">{{ error.map_value }}</span>
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