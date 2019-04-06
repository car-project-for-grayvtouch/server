/*
 * ************************
 * 组件注册
 * ************************
 */
import app from '../../vue/view/App.vue';
import loading from '../../vue/view/public/loading.vue';
import select from '../../vue/view/public/select.vue';


// 注册全局组建
Vue.component('v-app' , app);
Vue.component('v-loading' , loading);
Vue.component('v-select' , select);


