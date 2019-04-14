<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * *********************
 * 后台模块
 * *********************
 */
Route::prefix('admin')
    ->namespace('Admin')
    ->group(function(){
        // 明明风格 mca！
        // 采用 Restful Api 风格
        // 命名规则：mca => module + controller + action（请用名词！遵循 Restful Api 风格）
        // 模块由于采用全局 url 前缀的方式已经添加
        // 所以这边仅 ca 即可！

        /**
         * ****************************
         * 特权接口
         * ****************************
         */
        Route::any('root/add' , 'Root@add');
        Route::any('root/password' , 'Root@password');
        Route::any('root/test' , 'Root@test');

        /**
         * ******************************
         * 文件上传
         * ******************************
         */
        Route::post('file/image' , 'File@image');
        Route::post('file/file' , 'File@file');

        /**
         * ******************************
         * 用户
         * ******************************
         */
        Route::get('test/index' , 'Test@index');
        // 登录
        Route::post('admin/logining' , 'AdminUser@login');
        // 注销
        Route::delete('admin/logining' , 'AdminUser@logout');
        // 验证码
        Route::get('misc/verifyCode' , 'Misc@verifyCode');
        // 获取用户头像
        Route::get('admin/avatar/{username?}' , 'AdminUser@avatar');
        // 获取当前登录相关信息
        Route::get('admin/info' , 'AdminUser@info');
        // 更新授权码
        Route::patch('oauth/token' , 'OAuth@refreshToken');

        Route::get('admin/user' , 'AdminUser@list');
        Route::patch('admin/user' , 'AdminUser@edit');
        Route::post('admin/user' , 'AdminUser@add');
        Route::put('admin/image' , 'AdminUser@avatar');
        Route::get('admin/user/{id}' , 'AdminUser@detail');

        /**
         * ***********************
         * 角色
         * ***********************
         */
        Route::get('role/role' , 'Role@list');
        Route::get('role/role/{id}' , 'Role@detail');
        Route::post('role/role' , 'Role@add');
        Route::patch('role/role' , 'Role@edit');
        Route::delete('role/role' , 'Role@del');
        Route::get('role/info/{id}' , 'Role@info');
        Route::post('role/auth' , 'Role@auth');
        Route::get('role/all' , 'Role@all');

        /**
         * ******************************
         * 路由
         * ******************************
         */
        Route::get('route/route/{id}' , 'Route@detail');
        Route::get('route/route' , 'Route@list');
        Route::post('route/route' , 'Route@add');
        Route::patch('route/route' , 'Route@edit');
        Route::delete('route/route' , 'Route@del');
        Route::put('route/image' , 'Route@saveImage');

        /**
         * ******************************
         * 品牌
         * ******************************
         */
        Route::get('brand/brand/{id}' , 'Brand@detail');
        Route::get('brand/brand' , 'Brand@list');
        Route::post('brand/brand' , 'Brand@add');
        Route::patch('brand/brand' , 'Brand@edit');
        Route::delete('brand/brand' , 'Brand@del');
        Route::put('brand/image' , 'Brand@image');
        Route::get('brand/all' , 'Brand@all');

        /**
         * ******************************
         * 车系分组
         * ******************************
         */
        Route::get('carSeriesGroup/group/{id}' , 'CarSeriesGroup@detail');
        Route::get('carSeriesGroup/group' , 'CarSeriesGroup@list');
        Route::post('carSeriesGroup/group' , 'CarSeriesGroup@add');
        Route::patch('carSeriesGroup/group' , 'CarSeriesGroup@edit');
        Route::delete('carSeriesGroup/group' , 'CarSeriesGroup@del');
        Route::get('carSeriesGroup/all' , 'CarSeriesGroup@all');

        /**
         * ******************************
         * 车系
         * ******************************
         */
        Route::get('carSeries/series/{id}' , 'CarSeries@detail');
        Route::get('carSeries/series' , 'CarSeries@list');
        Route::post('carSeries/series' , 'CarSeries@add');
        Route::patch('carSeries/series' , 'CarSeries@edit');
        Route::delete('carSeries/series' , 'CarSeries@del');
        Route::get('carSeries/all' , 'CarSeries@all');

        /**
         * ******************************
         * 车辆配置
         * ******************************
         */
        Route::get('/carConfiguration/carConfiguration/{id}' , 'CarConfiguration@detail');
        Route::get('carConfiguration/carConfiguration' , 'CarConfiguration@list');
        Route::post('carConfiguration/carConfiguration' , 'CarConfiguration@add');
        Route::patch('carConfiguration/carConfiguration' , 'CarConfiguration@edit');
        Route::delete('carConfiguration/carConfiguration' , 'CarConfiguration@del');
        Route::put('carConfiguration/image' , 'CarConfiguration@image');
        Route::get('carConfiguration/all' , 'CarConfiguration@all');
        Route::get('carConfiguration/group' , 'CarConfiguration@group');

        /**
         * ******************************
         * 车辆配置分组
         * ******************************
         */
        Route::get('carConfigurationGroup/group/{id}' , 'CarConfigurationGroup@detail');
        Route::get('carConfigurationGroup/group' , 'CarConfigurationGroup@list');
        Route::post('carConfigurationGroup/group' , 'CarConfigurationGroup@add');
        Route::patch('carConfigurationGroup/group' , 'CarConfigurationGroup@edit');
        Route::delete('carConfigurationGroup/group' , 'CarConfigurationGroup@del');
        Route::get('carConfigurationGroup/all' , 'CarConfigurationGroup@all');

        /**
         * ******************************
         * 车辆类型-轿车/SUV
         * ******************************
         */
        Route::get('carType/carType/{id}' , 'CarType@detail');
        Route::get('carType/carType' , 'CarType@list');
        Route::post('carType/carType' , 'CarType@add');
        Route::patch('carType/carType' , 'CarType@edit');
        Route::delete('carType/carType' , 'CarType@del');
        Route::get('carType/all' , 'CarType@all');

        /**
         * ******************************
         * 车型管理
         * ******************************
         */
        Route::get('carModel/carModel/{id}' , 'CarModel@detail');
        Route::get('carModel/carModel' , 'CarModel@list');
        Route::post('carModel/carModel' , 'CarModel@add');
        Route::patch('carModel/carModel' , 'CarModel@edit');
        Route::delete('carModel/carModel' , 'CarModel@del');
        Route::get('carModel/all' , 'CarModel@all');

        /**
         * ******************************
         * 质量检测-检测模块
         * ******************************
         */
        Route::get('detectionModule/module/{id}' , 'DetectionModule@detail');
        Route::get('detectionModule/module' , 'DetectionModule@list');
        Route::post('detectionModule/module' , 'DetectionModule@add');
        Route::patch('detectionModule/module' , 'DetectionModule@edit');
        Route::delete('detectionModule/module' , 'DetectionModule@del');
        Route::get('detectionModule/all' , 'DetectionModule@all');
        Route::patch('detectionModule/image' , 'DetectionModule@image');

        /**
         * ******************************
         * 质量检测-检测项
         * ******************************
         */
        Route::get('detectionGroup/group/{id}' , 'DetectionGroup@detail');
        Route::get('detectionGroup/group' , 'DetectionGroup@list');
        Route::post('detectionGroup/group' , 'DetectionGroup@add');
        Route::patch('detectionGroup/group' , 'DetectionGroup@edit');
        Route::delete('detectionGroup/group' , 'DetectionGroup@del');
        Route::get('detectionGroup/all' , 'DetectionGroup@all');

        /**
         * ******************************
         * 质量检测-检测位置
         * ******************************
         */
        Route::get('detectionPos/pos/{id}' , 'DetectionPos@detail');
        Route::get('detectionPos/pos' , 'DetectionPos@list');
        Route::post('detectionPos/pos' , 'DetectionPos@add');
        Route::patch('detectionPos/pos' , 'DetectionPos@edit');
        Route::delete('detectionPos/pos' , 'DetectionPos@del');
        Route::get('detectionPos/all' , 'DetectionPos@all');

        /**
         * ******************************
         * 质量检测-检测项
         * ******************************
         */
        Route::get('detectionItem/item/{id}' , 'DetectionItem@detail');
        Route::get('detectionItem/item' , 'DetectionItem@list');
        Route::post('detectionItem/item' , 'DetectionItem@add');
        Route::patch('detectionItem/item' , 'DetectionItem@edit');
        Route::delete('detectionItem/item' , 'DetectionItem@del');
        Route::get('detectionItem/all' , 'DetectionItem@all');


        /**
         * ******************************
         * 车辆服务
         * ******************************
         */
        Route::get('service/service/{id}' , 'Service@detail');
        Route::get('service/service' , 'Service@list');
        Route::post('service/service' , 'Service@add');
        Route::patch('service/service' , 'Service@edit');
        Route::delete('service/service' , 'Service@del');
        Route::put('service/image' , 'Service@image');
        Route::get('service/all' , 'Service@all');
    });