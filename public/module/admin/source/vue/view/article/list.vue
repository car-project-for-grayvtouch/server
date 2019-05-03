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
                                <v-button color="orange" :has="true" ico="delete" @click="delSelected">删除选中项</v-button>
                                <v-button color="blue" :has="true" ico="add" @click="location('/article/add' , {mode: 'add'})">添加</v-button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="w-20">
                                    <input type="checkbox" @click="selectAllEvent">
                                </th>
                                <th class="w-40">ID</th>
                                <th class="w-100">标题</th>
                                <th class="w-100">封面</th>
                                <th class="w-100">分类【ID】</th>
                                <th class="w-100">信息</th>
                                <th class="w-80">是否隐藏</th>
                                <th class="w-150">时间</th>
                                <th class="w-130">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="v in data" :key="v.id" :data-id="v.id" @click="selectEvent">
                                <td>
                                    <input type="checkbox" class="c-box">
                                </td>
                                <td>{{ v.id }}</td>
                                <td>{{ v.title }}</td>
                                <td><img :src="v.thumb_explain" class="image"></td>
                                <td>{{ v.article_type ? `${v.article_type.name}【${v.article_type.id}】` : '' }}</td>
                                <td class="multiple-rows">
                                    <div class="row"><b>【来源】</b>{{ v.source }}</div>
                                    <div class="row"><b>【权重】</b>{{ v.weight }}</div>
                                </td>
                                <td :class="v.hidden == 'y' ? 'red' : 'green'">{{ v.hidden_explain }}</td>
                                <td class="multiple-rows">
                                    <div class="row">【创建时间】{{ v.create_time }}</div>
                                    <div class="row">【更新时间】{{ v.update_time }}</div>
                                </td>
                                <td>
                                    <v-button color="blue" @click="location('/article/edit' , {id: v.id , mode: 'edit'})" :has="true" ico="edit">编辑</v-button>
                                    <v-button color="orange" :has="true" ico="delete" @click="delTarget(v.id)">删除</v-button>
                                </td>
                            </tr>
                            <tr v-if="data.length == 0">
                                <td colspan="9">没有相关数据</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="page">
                        <Page :total="page.total" :current="form.page" :page-size="page.per_page" size="small" show-total show-elevator @on-change="pageEvent" />
                    </div>
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