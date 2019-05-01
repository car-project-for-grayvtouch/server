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
const listForDectionModule = () => import('../view/detectionModule/list.vue');
const thingForDectionModule = () => import('../view/detectionModule/thing.vue');
const listForDectionGroup = () => import('../view/DetectionGroup/list.vue');
const thingForDectionGroup = () => import('../view/DetectionGroup/thing.vue');
const listForDectionPos = () => import('../view/DetectionPos/list.vue');
const thingForDectionPos = () => import('../view/DetectionPos/thing.vue');
const listForDectionItem = () => import('../view/DetectionItem/list.vue');
const thingForDectionItem = () => import('../view/DetectionItem/thing.vue');
const listForService = () => import('../view/service/list.vue');
const thingForService = () => import('../view/service/thing.vue');
const listForCar = () => import('../view/car/list.vue');
const thingForCar = () => import('../view/car/thing.vue');
const reportForCar = () => import('../view/car/report.vue');

const listForArticleType = () => import('../view/articleType/list.vue');
const thingForArticleType = () => import('../view/articleType/thing.vue');
const listForArticle = () => import('../view/article/list.vue');
const thingForArticle = () => import('../view/article/thing.vue');

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

    /**
     * ***********************
     * 质量检测-模块
     * ***********************
     */
    {
        path: '/detectionModule/list' ,
        component: listForDectionModule
    } ,
    {
        path: '/detectionModule/edit' ,
        component: thingForDectionModule
    } ,
    {
        path: '/detectionModule/add' ,
        component: thingForDectionModule
    } ,

    /**
     * ***********************
     * 质量检测-位置分组
     * ***********************
     */
    {
        path: '/detectionGroup/list' ,
        component: listForDectionGroup
    } ,
    {
        path: '/detectionGroup/edit' ,
        component: thingForDectionGroup
    } ,
    {
        path: '/detectionGroup/add' ,
        component: thingForDectionGroup
    } ,

    /**
     * ***********************
     * 质量检测-位置分组
     * ***********************
     */
    {
        path: '/detectionPos/list' ,
        component: listForDectionPos
    } ,
    {
        path: '/detectionPos/edit' ,
        component: thingForDectionPos
    } ,
    {
        path: '/detectionPos/add' ,
        component: thingForDectionPos
    } ,

    /**
     * ***********************
     * 质量检测-检测项
     * ***********************
     */
    {
        path: '/detectionItem/list' ,
        component: listForDectionItem
    } ,
    {
        path: '/detectionItem/edit' ,
        component: thingForDectionItem
    } ,
    {
        path: '/detectionItem/add' ,
        component: thingForDectionItem
    } ,

    /**
     * ***********************
     * 车辆服务
     * ***********************
     */
    {
        path: '/service/list' ,
        component: listForService
    } ,
    {
        path: '/service/edit' ,
        component: thingForService
    } ,
    {
        path: '/service/add' ,
        component: thingForService
    } ,

    /**
     * ***********************
     * 车辆管理
     * ***********************
     */
    {
        path: '/car/list' ,
        component: listForCar
    } ,
    {
        path: '/car/edit' ,
        component: thingForCar
    } ,
    {
        path: '/car/add' ,
        component: thingForCar
    } ,
    {
        path: '/car/report' ,
        component: reportForCar
    } ,

    /**
     * ***********************
     * 文章分类
     * ***********************
     */
    {
        path: '/articleType/list' ,
        component: listForArticleType
    } ,
    {
        path: '/articleType/edit' ,
        component: thingForArticleType
    } ,
    {
        path: '/articleType/add' ,
        component: thingForArticleType
    } ,
    /**
     * ***********************
     * 文章
     * ***********************
     */
    {
        path: '/article/list' ,
        component: listForArticle
    } ,
    {
        path: '/article/edit' ,
        component: thingForArticle
    } ,
    {
        path: '/article/add' ,
        component: thingForArticle
    } ,
];