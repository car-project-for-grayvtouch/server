<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/26
 * Time: 19:44
 */


return [
    'bool' => [
        'y' => '是' ,
        'n' => '否'
    ] ,
    // 搜索类型
    // affordable-经济实惠；new-准新车；luxury-豪华车 newAndHot
    'search_type' => ['newAndHot' , 'affordable' , 'new' , 'luxury'] ,
    // 搜索记录类型
    'search_log' => [
        // 品牌
        'brand' ,
        // 车系
        'series' ,
        // 关键字
        'keyword' ,
        // 销售亮点
        'sale_point' ,
    ] ,
    // 职位
    'profession' => [
        'student'   => '学生' ,
        'work'      => '工作' ,
    ] ,

    // 需要保存搜索记录的 搜索类型
    'sale_point_for_search_log' => ['affordable' , 'new' , 'luxury'] ,
    // 可以评论的状态，车辆已经销售
    'sold_status' => ['sold'] ,
    // 价格
    'price_for_car' => [
        1 => '$10,000以下' ,
        2 => '$15,000-$20,000' ,
        3 => '$15,000-$20,000' ,
        4 => '$20,000-$30,000' ,
        5 => '$30,000-$40,000' ,
        6 => '$40,000以上' ,
    ] ,
    // 里程
    'mileage_for_car' => [
        1 => '1万英里以内' ,
        2 => '3万英里以内' ,
        3 => '5万英里以内' ,
        4 => '8万英里以内' ,
        5 => '10万英里以内' ,
        6 => '15万英里以内' ,
    ] ,

    // 车龄
    'age_for_car' => [
        1 => '1年以内' ,
        2 => '3年以内' ,
        3 => '5年以内' ,
        4 => '6年以内' ,
        5 => '8年以内' ,
        6 => '8年以上' ,
    ] ,
    // 变速箱
    'gearbox' => ['手动' , '自动' , '手自一体' , '无级变速' , '双离合' , '机械自动变速箱' , '直驱'] ,
    // 颜色
    'color_for_car' => [
        '白色' ,
        '黑色' ,
        '银灰' ,
        '灰色' ,
        '黄色' ,
        '香槟' ,
        '红色' ,
        '粉红' ,
        '紫色' ,
        '蓝色' ,
        '绿色' ,
        '咖啡' ,
    ] ,
    // 排序
    'sort_for_car' => [
        'price'     => '按价格排序' ,
        'age'       => '按车龄排序' ,
        'mileage'   => '按里程排序' ,
    ] ,
    // 订单状态
    'order_status' => [
        'wait'      => '待付款' ,
        'pay'       => '已付款' ,
        'completed' => '已完成' ,
    ] ,
    // 产品状态
    'product_status' => [
        'wait'      => '代发货' ,
        'shipped'   => '已发货' ,
        'pending'   => '待收货' ,
        'completed' => '已完成' ,
    ] ,
    // 商品-允许用户评论
    'can_comment_status_for_product' => ['completed'] ,

    // 卖车申请状态
    'sale_application_status' => [
        'wait'      => '等待处理' ,
        'ing'       => '处理中' ,
        'cancel'    => '已取消' ,
        'completed' => '已完成' ,
    ] ,
    // 求推荐车辆申请状态
    'recommendation_application_status' => [
        'wait'      => '等待处理' ,
        'ing'       => '处理中' ,
        'cancel'    => '已取消' ,
        'completed' => '已完成' ,
    ] ,
    // 卖车申请状态
    'staging_buy_application_status' => [
        'wait'      => '等待处理' ,
        'ing'       => '处理中' ,
        'cancel'    => '已取消' ,
        'completed' => '已完成' ,
    ] ,
];