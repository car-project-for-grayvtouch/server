/**
 * 导入 css 样式
 */
// import 'iview.css';
import './asset/css/iviewReset.css';
import './asset/css/public.css';

/**
 * **************************
 * 辅助 js
 * **************************
 */
import './asset/js/business.js';

/**
 * 初始化 js
 */
import './asset/js/global.js';
import './asset/js/subGlobal.js';
import './asset/js/currency.js';
import './asset/js/initialize.js';

/**
 * *****************
 * http 请求
 * *****************
 */
import './asset/js/api.js';

/**
 * *************
 * 全局混入
 * *************
 */
import './asset/js/mixin.js';

/**
 * ****************
 * 注册组件
 * ****************
 */
import './asset/js/component.js';

/**
 * *********************
 * iview ui 框架
 * *********************
 */
// import 'iview.js';

/**
 * **************
 * 版本更新提示
 * **************
 */
import './asset/js/version.js';

/**
 * **************
 * 初始化代码
 * **************
 */
new Vue({
    el: '#app' ,
    template: '<v-app></v-app>'
});

// 登录页 和 后台首页的切
