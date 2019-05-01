<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>

        <div class="module-content">
            <div class="in">
                <div class="top">
                    <!-- 数据筛选 -->
                    <form @submit.prevent="submit" @reset="reset">
                        <div class="run-title">
                            <div class="left">筛选</div>
                            <div class="right"></div>
                        </div>
                        <div class="filter-options">
                            <div class="option">
                                <div class="field">ID：</div>
                                <div class="value"><input type="text" v-model="form.id" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field"></div>
                                <div class="value">
                                    <button type="submit" class="run-button run-button-blue">提交</button>
                                    <button type="reset" class="run-button run-button-yellow">重置</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!--数据列表-->
                <div class="btm list">
                    <div class="data">
                        <div class="run-title">
                            <div class="left">数据列表</div>
                            <div class="right">
                                <v-button color="orange" :has="true" ico="del" @click="delSelected">删除选中项</v-button>
                                <v-button color="blue" :has="true" ico="add" @click="location('/articleType/add' , {mode: 'add'})">添加</v-button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="w-20">
                                    <input type="checkbox" @click="selectAllEvent">
                                </th>
                                <th class="w-40">ID</th>
                                <th class="w-150">名称</th>
                                <th class="w-150">隐藏？</th>
                                <th class="w-140">时间</th>
                                <th class="w-130">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="v in data" :key="v.id" :data-id="v.id" @click="selectEvent">
                                <td>
                                    <input type="checkbox" class="c-box">
                                </td>
                                <td>{{ v.id }}</td>
                                <td class="text-left">{{ v.floor > 1 ? '|' + '_'.repeat((v.floor - 1 ) * 4) : '' }}{{ v.name }}</td>
                                <td>{{ v.hidden_explain }}</td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <v-button color="blue" :has="true" ico="edit" @click="location('/articleType/edit' , {id: v.id , mode: 'edit'})">编辑</v-button>
                                    <v-button color="orange" :has="true" ico="del" @click="delTarget(v.id)">删除</v-button>
                                </td>
                            </tr>
                            <tr v-if="data.length == 0">
                                <td colspan="6">没有相关数据</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page"></div>
                </div>
            </div>
        </div>

        <v-loading ref="loading"></v-loading>

    </div>
</template>

<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>
<script src="./js/list.js"></script>