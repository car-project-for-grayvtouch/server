<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:47
 */

Route::prefix('pc')
    ->namespace('PcApi')
    ->group(function(){
        // 统一用 post

        // 展示图片
        Route::post('/ShowImage/home' , 'ShowImage@home');

        // 品牌
        Route::post('/Brand/all' , 'Brand@all');

        // 搜索记录
        Route::post('/SearchLog/hot' , 'SearchLog@hot');

        // 车辆
        Route::post('/Car/listForHome' , 'Car@listForHome');
        Route::post('/Car/featuredComment' , 'Car@featuredComment');
        Route::post('/Car/list' , 'Car@list');

        // 用户
        Route::post('Login/login' , 'Login@login');
        Route::post('Login/register' , 'Login@register');

        // 文章
        Route::post('Article/listForHome' , 'Article@listForHome');

        // 车系
        Route::post('/CarSeries/all' , 'CarSeries@all');

        // 车辆类型
        Route::post('/CarType/all' , 'CarType@all');


    });

