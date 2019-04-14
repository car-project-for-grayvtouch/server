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
                                <div class="value"><input type="text" v-model="form.title" class="form-text"></div>
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
                                <button type="button" class="run-button run-button-blue" @click="location('/car/add' , {mode: 'add'})">
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
                                <th class="w-100">标题</th>
                                <th class="w-100">品牌【ID】</th>
                                <th class="w-100">车系【ID】</th>
                                <th class="w-100">车型【ID】</th>
                                <th class="w-100">创建时间</th>
                                <th class="w-150">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="v in data" :key="v.id" :data-id="v.id" @click="selectEvent">
                                <td><input type="checkbox" class="c-box"></td>
                                <td>{{ v.id }}</td>
                                <td>{{ v.title }}</td>
                                <td>{{ v.brand ? `${v.brand.name}【${v.brand.id}】` : '' }}</td>
                                <td>{{ v.series ? `${v.series.name}【${v.series.id}】` : '' }}</td>
                                <td>{{ v.model ? `${v.model.name}【${v.model.id}】` : '' }}</td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <button type="button" class="run-button run-button-blue" @click.stop="location('/car/edit' , {id: v.id , mode: 'edit'})">
                                        <i class="run-iconfont run-edit"></i>编辑
                                    </button>
                                    <button type="button" class="run-button run-button-yellow" @click.stop="$info('开发中...暂未开放')">质检报告</button>
                                    <button type="button" class="run-button run-button-orange" @click="delTarget(v.id)">
                                        <i class="run-iconfont run-delete"></i>删除
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="data.length == 0">
                                <td colspan="8">没有相关数据</td>
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

<script src="./js/list.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>