<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <v-menu-switch ref="menu-switch" :data="navMenu"></v-menu-switch>
                <form @submit.prevent="submit">
                    <div class="list" ref="list">

                        <div class="module" v-for="module in rule" :key="module.id" :data-id="module.id">
                            <div class="content">
                                <div class="top">
                                    <div class="left">模块检测结果</div>
                                    <div class="right">
                                        <textarea class="form-textarea" v-model="module.result" :key="module.id" placeholder="请输入检测结果..."></textarea>
                                    </div>
                                </div>
                                <div class="btm">
                                    <div class="item" v-for="position in module.position" :key="position.id">
                                        <div class="pos"><span v-if="position.group">位置分组：{{ position.group.name }}</span>{{ '&nbsp;'.repeat(8) }}检测位置：{{ position.map_value ? `${position.name}【映射值：${position.map_value}】` : position.name }}</div>
                                        <div class="list">

                                            <div class="line" v-for="item in position.item" :key="item.id">
                                                <div class="name">{{ item.map_value ? `${item.name}【映射值：${item.map_value}】` : item.name }}</div>
                                                <div class="value">
                                                    <RadioGroup v-model="item.value">
                                                        <Radio v-for="v in item.option" :key="v.key" :label="v.key">{{ v.value }}</Radio>
                                                    </RadioGroup>
                                                </div>
                                                <div class="desc"><input type="text" v-model="item.desc" class="form-text" placeholder="结果描述"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="preview" v-if="module.image">
                                <div class="function">
                                    <v-button color="blue" @click="opacity=0.2">透明度：20%</v-button>
                                    <v-button color="blue" @click="opacity=0.5">透明度：50%</v-button>
                                    <v-button color="blue" @click="opacity=1">透明度：100%</v-button>
                                </div>
                                <div class="con" @click="toLink(module.image_explain)" :style="`opacity: ${opacity};`"><img :src="module.image_explain" class="image"></div>
                            </div>

                        </div>

                    </div>
                    <div class="submit">
                        <v-button color="submit" type="submit">提交</v-button>
                    </div>

                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/report.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/report.css"></style>