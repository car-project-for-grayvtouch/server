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
                                <div class="field">用户ID：</div>
                                <div class="value"><input type="text" v-model="form.user_id" class="form-text"></div>
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
                                <button type="button" class="run-button run-button-blue" @click="updateStatusForSelected">
                                    <i class="run-iconfont run-edit"></i>
                                    设置状态
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
                                <th class="w-100">用户【ID】</th>
                                <th class="w-80">电话</th>
                                <th class="w-80">微信</th>
                                <th class="w-80">职业</th>
                                <th class="w-50">ssn?</th>
                                <th class="w-80">状态</th>
                                <th class="w-100">创建时间</th>
                                <th class="w-100">操作</th>
                            </tr>
                            </thead>
                            <tbody ref="tbody">
                            <tr v-for="v in data" :key="v.id" :data-id="v.id" @click="selectEvent">
                                <td><input type="checkbox" class="c-box"></td>
                                <td>{{ v.id }}</td>
                                <td>{{ v.user ? `${v.user.username}【${v.user.id}】` : ''}}</td>
                                <td>{{ v.phone }}</td>
                                <td>{{ v.weixin }}</td>
                                <td>{{ v.profession_explain }}</td>
                                <td>{{ v.ssn_explain }}</td>
                                <td><b :class="v.status == 'wait' ? 'red' : (v.status == 'cancel' ? 'gray' : (v.status == 'completed' ? 'green' : ''))">{{ v.status_explain }}</b></td>
                                <td>{{ v.create_time }}</td>
                                <td>
                                    <button type="button" class="run-button run-button-blue" @click.stop="updateStatusForTar(v.id)">
                                        <i class="run-iconfont run-edit"></i>设置状态
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="data.length == 0">
                                <td colspan="10">没有相关数据</td>
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

<script src="./js/list.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/list.css"></style>
<style scoped src="./css/list.css"></style>