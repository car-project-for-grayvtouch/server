// 全部采用异步组件的方式加载
// 压缩 js 体积
const index = () => import('../view/index/index.vue');
const login = () => import('../view/login/login.vue');
const listForRoute = () => import('../view/route/list.vue');
const route = () => import('../view/route/route.vue');
const listForRole = () => import('../view/role/list.vue');
const role = () => import('../view/role/role.vue');
const priv = () => import('../view/role/priv.vue');
const listForAdmin = () => import('../view/admin/list.vue');
const admin = () => import('../view/admin/user.vue');

export default [
    {
        name: 'home' ,
        path: '/' ,
        component: index
    } ,
    {
        name: 'login' ,
        path: '/login' ,
        component: login
    } ,

    /**
     * ********************
     * 模块：路由
     * ********************
     */
    {
        path: '/route/list' ,
        component: listForRoute
    } ,
    {
        path: '/route/add' ,
        component: route
    } ,
    {
        path: '/route/edit' ,
        component: route
    } ,

    /**
     * ********************
     * 模块：角色
     * ********************
     */
    {
        path: '/role/list' ,
        component: listForRole
    } ,
    {
        path: '/role/add' ,
        component: role
    } ,
    {
        path: '/role/edit' ,
        component: role
    } ,
    {
        path: '/role/priv' ,
        component: priv
    } ,

    /**
     * ***********************
     * 后台用户
     * ***********************
     */
    {
        path: '/admin/list' ,
        component: listForAdmin
    } ,
    {
        path: '/admin/edit' ,
        component: admin
    } ,
    {
        path: '/admin/add' ,
        component: admin
    } ,
];