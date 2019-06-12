<template>
    <div class="real-time-communication">
        <!-- 即时通讯：最小化 -->
        <div class="real-time-communication-minimum" ref="real-time-communication-minimum">
            <div class="left">
                <div class="avatar">
                    <div class="image-container"><img :src="user.avatar" class="image"></div>
                </div>
                <div>{{ user.nickname }}</div>
            </div>
            <div class="right">
                <div class="unread">{{ unread }}</div>
            </div>
        </div>
        <!-- 即时通讯：最大化 -->
        <div class="real-time-communication-maximum hide" :class="user.role == 'user' ? 'real-time-communication-maximum-for-user' : ''" ref="real-time-communication-maximum">
            <!-- 关闭按钮 -->
            <div class="close" ref="close">
                <img :src="host + '/static/image/minimum.png'" class="image">
            </div>
            <!-- 用户信息 -->
            <div class="user hide" ref="user">
                <div class="outer" ref="user-outer">
                    <div class="in" ref="user-in">
                        <div class="top avatar">
                            <div class="image-container"><img :src="user.avatar" class="image"></div>
                        </div>
                        <div class="btm">
                            <div class="username">{{ user.nickname }}</div>
                        </div>
                    </div>
                </div>
                <div class="mask" ref="mask"></div>
            </div>
            <!-- 内容 -->
            <div class="content">
                <!-- 会话列表 -->
                <div class="left">
                    <div class="top" ref="left-top">
                        <div class="left">
                            <div class="avatar" ref="avatar">
                                <div class="image-container"><img :src="user.avatar" class="image"></div>
                            </div>
                            <div class="username">{{ user.nickname }}</div>
                        </div>
                        <div class="right"></div>
                    </div>
                    <div class="mid" ref="left-mid">
                        <div class="item cur"><img :src="host + '/static/image/message.png'" class="image"></div>
                        <!--<div class="item"><img src="./image/message.png" class="image"></div>-->
                        <!--<div class="item"><img src="./image/message.png" class="image"></div>-->
                    </div>
                    <div class="btm session" ref="left-btm">

                        <div class="item" v-for="v in session" :key="v.session_id" :class="v.session_id == current.session_id ? 'cur' : ''" @click="switchSession(v.session_id)">
                            <div class="left">
                                <div class="image-container">
                                    <img v-if="v.type == 'group'" :src="v.group ? v.group.image_explain : ''" class="image">
                                </div>
                            </div>
                            <div class="right">
                                <div class="in">
                                    <div class="left">
                                        <div class="top">
                                            <!-- 群 -->
                                            <template v-if="v.type == 'group'">{{ v.group ? v.group.name : '' }}</template>
                                            <!-- todo 私聊 -->
                                        </div>
                                        <div class="btm">
                                            <template v-if="v.recent_message">
                                                <!-- 文本消息 -->
                                                <template v-if="v.recent_message.type == 'text'">{{ v.recent_message.message }}</template>
                                                <!-- todo 其他类型消息 -->
                                            </template>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="top">{{ v.recent_message ? v.recent_message.create_time : '' }}</div>
                                        <div class="btm"><span class="unread">{{ v.unread }}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 对话窗口 -->
                <div class="right">
                    <div class="window">
                        <div class="top">
                            <div class="left">
                                <!-- 群信息 -->
                                <template v-if="current.type == 'group'">{{ current.group ? current.group.name : '' }}</template>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="mid" ref="history">
                            <!-- 加载层 -->
                            <div class="loading">
                                <span v-if="!history.all && history.loading">加载中...</span>
                                <span v-else class="gray">已经到底了</span>
                            </div>

                            <!-- 聊天记录 -->
                            <div class="history" ref="message">

                                <!-- 发送者 -->
                                <template v-for="v in history.history">
                                    <div class="message" :class="v.myself ? 'myself' : 'other'" :data-id="v.id">
                                        <div class="in">
                                            <div class="left">
                                                <div class="image-container"><img :src="v.user ? v.user.avatar : ''" class="image"></div>
                                            </div>
                                            <div class="right">
                                                <div class="top">
                                                    <div class="in">{{ v.user ? (v.user.nickname ? v.user.nickname : v.user.username) : '' }} {{ v.create_time }}</div>
                                                </div>
                                                <div class="mid">
                                                    <div class="in">
                                                        <div class="text">{{ v.message }}</div>
                                                        <div class="loading">
                                                            <img :src="host + '/static/image/loading.png'" class="image image-for-loading" :class="v.loading ? '' : 'hide'">
                                                            <img :src="host + '/static/image/fail.png'" class="image " :class="v.error ? '' : 'hide'">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="btm">
                                                    <div class="in red" :class="v.error ? '' : 'hide'">发送失败：{{ v.error }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--<div class="tip-message error hide" v-if="v.type == 'no_waiter'">-->
                                    <!--<div class="in">{{ v.message }}</div>-->
                                    <!--</div>-->
                                    <!--<div class="tip-message success" v-if="v.type == 'allocated'">-->
                                    <!--<div class="in">{{ v.message }}</div>-->
                                    <!--</div>-->
                                </template>
                            </div>
                        </div>
                        <div class="btm">
                            <div class="top hide"></div>
                            <div class="mid" ref="input">
                                <textarea ref="textarea" @keyup="contentKeyUpEvent" v-model="message" class="input" autofocus="autofocus" placeholder="请输入..."></textarea>
                            </div>
                            <div class="btm"><button type="button" class="send" ref="send" @click="sendEvent" title="ENTER">发送（ENTER）</button></div>
                        </div>
                    </div>
                    <div class="empty" :class="once ? '' : 'hide'">
                        <div class="in">请选择会话</div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script src="./js/communication.js"></script>

<style scoped>

</style>