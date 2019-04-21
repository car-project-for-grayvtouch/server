/*
 * ************************
 * 组件注册
 * ************************
 */
import app from '../../vue/view/App.vue';
import loading from '../../vue/view/public/loading.vue';
import select from '../../vue/view/public/select.vue';
import brand from '../../vue/view/public/brand.vue';
import menuSwitch from '../../vue/view/public/MenuSwitch.vue';
import button from '../../vue/view/public/button.vue';


// 注册全局组建
Vue.component('v-app' , app);
Vue.component('v-loading' , loading);
Vue.component('v-select' , select);
Vue.component('v-brand' , brand);
Vue.component('v-menu-switch' , menuSwitch);
Vue.component('v-button' , button);


