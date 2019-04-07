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
                                <div class="field">名称：</div>
                                <div class="value"><input type="text" v-model="form.name" class="form-text"></div>
                            </div>
                            <div class="option">
                                <div class="field"></div>
                                <div class="value">
                                    <button type="submit" class="run-button run-button-blue">提交</button>
                                    <button type="reset" class="run-button run-button-yellow">
                                        <i class="run-iconfont run-reset"></i>
                                        重置
                                    </button>
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
                                <button type="button" class="run-button run-button-orange" @click="delSelected">
                                    <i class="run-iconfont run-delete"></i>
                                    删除选中项
                                </button>
                                <button type="button" class="run-button run-button-blue" @click="location('/brand/add' , {mode: 'add'})">
                                    <i class="run-iconfont run-add"></i>
                                    添加
                                </button>
                            </div>
                        </div>
                        <table class="line-tb">
                            <thead>
                            <tr>
                                <th class="w-20">
                                    <input type="checkbox" @click="selectAllEvent">
                                </th>
                                <th class="w-40">ID</th>
                                <th class="w-130">名称</th>
                                <th class="w-30">首字母</th>
                                <th class="w-120">logo</th>
                                <th class="w-30">热门</th>
                                <th class="w-30">
                                    权重
                                    <span class="arrow">
                                    <i class="run-iconfont run-arrow top" data-order="weight|asc" @click="order"></i>
                                    <i class="run-iconfont run-arrow btm" data-order="weight|desc" @click="order"></i>
                                </span>
                                </th>
                                <th class="w-100">创建时间</th>
                                <th class="w-100">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="v in data" :key="v.id" :data-id="v.id" @click="selectEvent">
                                <td><input type="checkbox" class="c-box"></td>
                                <td>{{ v.id }}</td>
                                <td>{{ v.name }}</td>
                                <td>{{ v.letter }}</td>
                                <td><img :src="v.logo" class="image"></td>
                                <td>{{ v.hot_explain }}</td>
                                <td>{{ v.weight }}</td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <button type="button" class="run-button run-button-blue" @click.stop="location('/brand/edit' , {id: v.id , mode: 'edit'})">
                                        <i class="run-iconfont run-edit"></i>编辑
                                    </button>
                                    <button type="button" class="run-button run-button-orange" @click="delTarget(v.id)">
                                        <i class="run-iconfont run-delete"></i>删除
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="data.length == 0">
                                <td colspan="9">没有相关数据</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="page">
                        <Page :total="page.total" :page-size="page.per_page" size="small" show-total show-elevator @on-change="pageEvent" />
                    </div>
                </div>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/carSeriesList.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/carSeriesList.css"></style>