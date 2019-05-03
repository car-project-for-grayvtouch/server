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
    'route' => [
        'method' => ['GET' , 'POST' , 'PUT' , 'PATCH' , 'DELETE' , 'NONE'] ,
        // api-接口
        // view-前端视图
        'type' => ['api' , 'view'] ,
    ] ,
    'sale_application_status' => [
        'wait'  => '等待处理' ,
        'ing'   => '处理中' ,
        'ignore' => '已忽略' ,
        'cancel' => '已取消' ,
        'completed' => '已完成' ,
    ] ,
    'recommendation_application_status' => [
        'wait' => '等待处理' ,
        'ing'   => '处理中' ,
        'ignore' => '已忽略' ,
        'cancel' => '已取消' ,
        'completed' => '已完成' ,
    ] ,
    'staging_buy_application_status' => [
        'wait' => '等待处理' ,
        'ing'   => '处理中' ,
        'ignore' => '已忽略' ,
        'cancel' => '已取消' ,
        'completed' => '已完成' ,
    ] ,
    'reservation_status' => [
        'wait' => '等待处理' ,
        'ing'   => '处理中' ,
        'ignore' => '已忽略' ,
        'cancel' => '已取消' ,
        'completed' => '已完成' ,
    ] ,
    'sale_application_status_range' => ['wait' , 'ing' , 'ignore' , 'completed'] ,
    'recommendation_application_status_range' => ['wait' , 'ing' , 'ignore' , 'completed']  ,
    'staging_buy_application_status_range' => ['wait' , 'ing' , 'ignore' , 'completed'] ,
    'reservation_application_status_range' => ['wait' , 'ing' , 'ignore' , 'completed'] ,

    'profession' => [
        'student' => '学生' ,
        'work' => '工作' ,
    ] ,
];