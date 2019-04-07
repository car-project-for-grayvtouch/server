<template>
    <div class="container" ref="container">
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
                    <div class="left"></div>
                    <div class="right">

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
    </div>
</template>

<script src="./js/index.js"></script>
<style scoped src="./css/index.css"></style>