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
const listForBrand = () => import('../view/brand/list.vue');
const brand = () => import('../view/brand/brand.vue');
const carSeries = () => import('../view/carSeries/carSeries.vue');
const carSeriesList = () => import('../view/carSeries/carSeriesList.vue');
const carSeriesGroup = () => import('../view/carSeries/carSeriesGroup.vue');
const carSeriesGroupList = () => import('../view/carSeries/carSeriesGroupList.vue');
const listForCarConfigurationGroup = () => import('../view/carConfigurationGroup/list.vue');
const thingForCarConfigurationGroup = () => import('../view/carConfigurationGroup/thing.vue');
const listForCarConfiguration = () => import('../view/carConfiguration/list.vue');
const thingForCarConfiguration = () => import('../view/carConfiguration/thing.vue');
const listForCarType = () => import('../view/carType/list.vue');
const thingForCarType = () => import('../view/carType/thing.vue');
const listForCarModel = () => import('../view/carModel/list.vue');
const thingForCarModel = () => import('../view/carModel/thing.vue');

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

    /**
     * ***********************
     * 品牌
     * ***********************
     */
    {
        path: '/brand/list' ,
        component: listForBrand
    } ,
    {
        path: '/brand/edit' ,
        component: brand
    } ,
    {
        path: '/brand/add' ,
        component: brand
    } ,

    /**
     * ***********************
     * 车系分组
     * ***********************
     */
    {
        path: '/carSeriesGroup/list' ,
        component: carSeriesGroupList
    } ,
    {
        path: '/carSeriesGroup/edit' ,
        component: carSeriesGroup
    } ,
    {
        path: '/carSeriesGroup/add' ,
        component: carSeriesGroup
    } ,

    /**
     * ***********************
     * 车系
     * ***********************
     */
    {
        path: '/carSeries/list' ,
        component: carSeriesList
    } ,
    {
        path: '/carSeries/edit' ,
        component: carSeries
    } ,
    {
        path: '/carSeries/add' ,
        component: carSeries
    } ,

    /**
     * ***********************
     * 车辆配置分组
     * ***********************
     */
    {
        path: '/carConfigurationGroup/list' ,
        component: listForCarConfigurationGroup
    } ,
    {
        path: '/carConfigurationGroup/edit' ,
        component: thingForCarConfigurationGroup
    } ,
    {
        path: '/carConfigurationGroup/add' ,
        component: thingForCarConfigurationGroup
    } ,

    /**
     * ***********************
     * 车辆配置
     * ***********************
     */
    {
        path: '/carConfiguration/list' ,
        component: listForCarConfiguration
    } ,
    {
        path: '/carConfiguration/edit' ,
        component: thingForCarConfiguration
    } ,
    {
        path: '/carConfiguration/add' ,
        component: thingForCarConfiguration
    } ,

    /**
     * ***********************
     * 车辆分类
     * ***********************
     */
    {
        path: '/carType/list' ,
        component: listForCarType
    } ,
    {
        path: '/carType/edit' ,
        component: thingForCarType
    } ,
    {
        path: '/carType/add' ,
        component: thingForCarType
    } ,

    /**
     * ***********************
     * 车辆型号
     * ***********************
     */
    {
        path: '/carModel/list' ,
        component: listForCarModel
    } ,
    {
        path: '/carModel/edit' ,
        component: thingForCarModel
    } ,
    {
        path: '/carModel/add' ,
        component: thingForCarModel
    } ,
];