<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <div class="welcome">
                    <div class="top">欢迎回来 <b>{{ $store.state.user.username }}</b></div>
                    <div class="btm">最近一次登录于 <b>{{ $store.state.user.last_time }}</b></div>
                </div>
                <div class="today">
                    <div class="run-title">
                        <div class="left">今日统计资料</div>
                        <div class="right"></div>
                    </div>
                    <div class="list">

                        <div class="card">
                            <div class="left"><img src="./image/user1.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增用户</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.user.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.user.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.user.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.user.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.user.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/admin_user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增后台用户</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.admin_user.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.admin_user.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.admin_user.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.admin_user.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.admin_user.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/car.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增车辆</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.car.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.car.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.car.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.car.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.car.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/article.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增文章</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.article.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.article.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.article.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.article.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.article.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/sale.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增卖车申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.sale_application.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.sale_application.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.sale_application.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.sale_application.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.sale_application.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/recommendation.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增值购申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.recommendation_application.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.recommendation_application.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.recommendation_application.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.recommendation_application.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.recommendation_application.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/staging_buy.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增分期购车申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.staging_buy_application.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.staging_buy_application.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.staging_buy_application.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.staging_buy_application.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.staging_buy_application.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/reservation.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增预约看车申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.reservation.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.reservation.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.reservation.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.reservation.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.reservation.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="history">
                    <div class="run-title">
                        <div class="left">历史统计资料 </div>
                        <div class="right"></div>
                    </div>
                    <div class="list">

                        <div class="card-for-total">
                            <div class="left"><img src="./image/user1.png" class="image"></div>
                            <div class="right">
                                <div class="top">用户数</div>
                                <div class="btm">{{ info.user.total }}</div>
                            </div>
                        </div>

                        <div class="card-for-total">
                            <div class="left"><img src="./image/admin_user.png" class="image"></div>
                            <div class="right">
                                <div class="top">后台用户数</div>
                                <div class="btm">{{ info.admin_user.total }}</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/car.png" class="image"></div>
                            <div class="right">
                                <div class="top">车辆数</div>
                                <div class="btm">{{ info.car.total }}</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/article.png" class="image"></div>
                            <div class="right">
                                <div class="top">文章数</div>
                                <div class="btm">{{ info.article.total }}</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/sale.png" class="image"></div>
                            <div class="right">
                                <div class="top">卖车申请数</div>
                                <div class="btm">{{ info.sale_application.total }}</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/recommendation.png" class="image"></div>
                            <div class="right">
                                <div class="top">值购申请数</div>
                                <div class="btm">{{ info.recommendation_application.total }}</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/staging_buy.png" class="image"></div>
                            <div class="right">
                                <div class="top">分期购车申请数</div>
                                <div class="btm">{{ info.staging_buy_application.total }}</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/reservation.png" class="image"></div>
                            <div class="right">
                                <div class="top">预约看车数</div>
                                <div class="btm">{{ info.reservation.total }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chart">

                    <div class="top">

                        <div class="month chart-box">
                            <div class="run-title">

                                <div class="left">
                                    <div class="title"><img src="./image/month.png" class="image">月统计资料</div>
                                    <div class="year">
                                        年份：
                                        <i-select v-model="yearForMonth" style="width: 80px;">
                                            <i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="month single">
                                        月份：
                                        <i-select v-model="monthForMonth" style="width: 80px;">
                                            <i-option v-for="(v,k) in month" :key="k" :value="parseInt(k)">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="btns">
                                        <v-button color="blue" @click="monthChart">确定</v-button>
                                    </div>
                                </div>
                                <div class="right"></div>
                            </div>
                            <div class="con">
                                <div class="chart-container" ref="month"></div>
                                <v-loading ref="month-loading"></v-loading>
                            </div>
                        </div>

                        <div class="quarter chart-box">
                            <div class="run-title">
                                <div class="left">
                                    <div class="title"><img src="./image/quarter.png" class="image">季度统计资料</div>
                                    <div class="year">
                                        年份：
                                        <i-select v-model="yearForQuarter" style="width: 80px;">
                                            <i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="month single">
                                        季度：
                                        <i-select v-model="quarterForQuarter" style="width: 100px;">
                                            <i-option v-for="(v,k) in quarter" :key="k" :value="parseInt(k)">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="btns">
                                        <v-button color="blue" @click="quarterChart">确定</v-button>
                                    </div>
                                </div>
                                <div class="right"></div>
                            </div>
                            <div class="con">
                                <div class="chart-container" ref="quarter"></div>
                                <v-loading ref="quarter-loading"></v-loading>
                            </div>
                        </div>
                    </div>

                    <div class="btm chart-box">
                        <div class="run-title">
                            <div class="left">
                                <div class="title"><img src="./image/year.png" class="image">年统计资料</div>
                                <div class="year">
                                    年份：
                                    <i-select v-model="yearForYear" style="width: 80px;">
                                        <i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>
                                    </i-select>
                                </div>
                                <div class="btns">
                                    <v-button color="blue" @click="yearChart">确定</v-button>
                                </div>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="con">
                            <div class="chart-container" ref="year"></div>
                            <v-loading ref="year-loading"></v-loading>
                        </div>
                    </div>
                </div>
                <div class="system">
                    <div class="run-title">
                        <div class="left">系统信息</div>
                        <div class="right"></div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>系统版本</td>
                            <td>1.0.1</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>作者</td>
                            <td>grayVTouch</td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/pannel.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/pannel.css"></style>