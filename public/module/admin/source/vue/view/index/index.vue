<template>
    <div class="container">
        <!-- 加载 -->
        <v-loading ref="loading"></v-loading>
        <!-- left -->
        <div class="left" ref="left">
            <div class="in">
                <div class="top" ref="left-top">
                    <div class="logo">
                        <div class="left"><img :src="$store.state.os.system.logo" class="image"></div>
                        <div class="right">{{ $store.state.os.system.name }}</div>
                    </div>
                    <div class="user" ref="user">
                        <div class="top">
                            <div class="image-container"><img :src="$store.state.user.avatar_explain" class="image"></div>
                        </div>
                        <div class="btm">{{ $store.state.user.username }}</div>
                    </div>
                    <div class="block" ref="block">
                        <!-- 水平 -->
                        <div class="horizontal" ref="horizontal" @click="vertical">
                            <div class="in">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>

                        <!-- 垂直 -->
                        <div class="vertical hide" ref="vertical" @click="horizontal">
                            <div class="in">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mid" ref="infinite-classification">
                    <v-menu></v-menu>
                </div>
                <div class="btm" ref="left-btm">{{ $store.state.os.system.name }}</div>
            </div>
        </div>
        <!-- right -->
        <div class="right" ref="right">
            <div class="top" ref="right-top">
                <div class="c-top">
                    <div class="left">
                        <!-- 翻译 -->
                        <div class="translate" @click="translate" title="这是用来生成常用中英文对照字典，加快前端展示的功能，请再更新数据后不定时调用此功能，以保证前端中英文流畅切换">
                            <img src="./image/translate.png" class="image">
                        </div>
                    </div>
                    <div class="right">

                        <!-- 通知栏 -->
                        <div class="notification" @click="showSlidebar">
                            <div class="in">
                                <div class="image-container">
                                    <img src="./image/notification.png" class="image">
                                </div>
                                <div class="text">{{ unread }}</div>
                            </div>
                        </div>

                        <!--用户控制-->
                        <div class="user" @mouseenter="showUserCtrl" @mouseleave="hideUserCtrl">
                            <div class="ctrl">
                                <div class="avatar">
                                    <div class="image-container"><img :src="$store.state.user.avatar_explain" class="image"></div>
                                </div>
                                <div class="username">{{ $store.state.user.username }}</div>
                            </div>
                            <div class="functions hide" ref="functions-for-user">
                                <div class="function" @click="logout">
                                    <div class="left"><img src="./image/logout.png" class="image"></div>
                                    <div class="right">注销</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="c-btm" ref="multiple-tab">
                    <!--多标签-->
                    <div class="multiple-tab">
                        <!-- 项列表 -->
                        <div class="tabs"></div>
                    </div>
                </div>
            </div>
            <div class="btm">
                <div class="dynamic">
                    <div class="in" ref="con"></div>
                </div>
            </div>
        </div>

        <!-- 抽屉 -->
        <div class="slidebar-container" ref="slidebar">
            <div class="slidebar hide">
                <div class="mask"></div>
                <div class="con">
                    <div class="in" ref="push">
                        <div class="lines">
                            <!-- 这里添加内容 -->
                            <div class="line" v-for="v in push" :key="v.id" @click="$info(v.data)">
                                <div class="left">
                                    <div class="ico">
                                        <img src="./image/system.png" class="image" v-if="v.type == 'system'">
                                    </div>
                                    <div class="text">{{ v.data }}</div>
                                </div>
                                <div class="right">{{ v.format_time }}</div>
                            </div>
                        </div>

                        <div class="loading" v-if="pending.push">加载中...</div>
                        <div class="no-more" v-if="value.loadedPush">已经到底了</div>
                    </div>

                </div>
            </div>
        </div>

        <!-- 即时通讯 -->
        <v-communication ref="communication"></v-communication>
    </div>
</template>

<script src="./js/index.js"></script>
<style scoped src="./css/index.css"></style>