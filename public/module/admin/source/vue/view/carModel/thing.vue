<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <v-menu-switch :data="navMenu" :menu="menu" @switch="switchS"></v-menu-switch>
                <form @submit.prevent="submit">
                    <div class="options" ref="options">

                        <!-- 基本信息 -->
                        <div class="option hide" data-id="base">
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
                                <tr id="brand_id" :class="getClass(error.name)">
                                    <td>品牌</td>
                                    <td>
                                        <v-brand></v-brand>
                                        <span class="necessary">*</span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.name }}</span>
                                    </td>
                                </tr>
                                <tr id="car_series_id" :class="getClass(error.car_series_id)">
                                    <td>车系</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.car_series_id">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.car_series_id }}</span>
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
                                </tbody>
                            </table>
                        </div>

                        <!-- 功能配置 -->
                        <div class="option hide" data-id="configuration">
                            <div class="group">
                                <div class="run-title-1">
                                    <div class="left">安全配置</div>
                                    <div class="right"></div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        导航定位系统：
                                        <RadioGroup>
                                            <Radio>是</Radio>
                                            <Radio>否</Radio>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="submit">
                        <button type="submit" class="run-button run-button-submit">提交</button>
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