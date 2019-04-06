<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>

        <div class="module-content">
            <!-- 数据筛选 -->
            <form @submit.prevent="submit" @reset="reset">
                <div class="component-title">
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
                            <button type="submit" class="btn-1">提交</button>
                            <button type="reset" class="btn-1">重置</button>
                        </div>
                    </div>
                </div>
            </form>
            <!--数据列表-->
            <div class="list">
                <div class="data">
                    <div class="component-title">
                        <div class="left">数据列表</div>
                        <div class="right">
                            <button type="button" class="btn-1" @click="delSelected">删除选中项</button>
                            <button type="button" class="btn-1" @click="location('/announcement/add' , {mode: 'add'})">添加</button>
                        </div>
                    </div>
                    <table class="line-tb">
                        <thead>
                        <tr>
                            <th class="th-cbox">
                                <input type="checkbox" @click="selectAllEvent">
                            </th>
                            <th class="th-id">ID</th>
                            <th class="th-name">位置</th>
                            <th class="th-name">标题</th>
                            <th class="th-name">内容</th>
                            <th class="th-name">权重</th>
                            <th class="th-time">创建时间</th>
                            <th class="th-opr">操作</th>
                        </tr>
                        </thead>
                        <tbody ref="tbody">
                        <tr v-for="v in data" :key="v.id" :data-id="v.id" @click="selectEvent">
                            <td>
                                <input type="checkbox" class="c-box">
                            </td>
                            <td>{{ v.id }}</td>
                            <td>{{ v.pos }}</td>
                            <td>{{ v.title }}</td>
                            <td>{{ v.text }}</td>
                            <td>{{ v.weight }}</td>
                            <td>{{ v.create_time }}</td>
                            <td>
                                <button type="button" class="btn-1" @click="location('/announcement/edit' , {id: v.id , mode: 'edit'})">编辑</button>
                                <button type="button" class="btn-1" @click="delTarget(v.id)">删除</button>
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
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>
<script src="./js/list.js"></script>