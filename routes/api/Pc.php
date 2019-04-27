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
        Route::post('/Car/detail' , 'Car@detail');
        Route::post('/Car/countForRecommendationApplication' , 'Car@countForRecommendationApplication');

        // 车辆-需要用户认证的接口
        Route::post('/CarWithAuth/reservation' , 'CarWithAuth@reservation');
        // 卖车
        Route::post('/CarWithAuth/saleApplication' , 'CarWithAuth@saleApplication');
        // 推荐车辆
        Route::post('/CarWithAuth/recommendationApplication' , 'CarWithAuth@recommendationApplication');
        // 购车
        Route::post('/CarWithAuth/stagingBuyApplication' , 'CarWithAuth@stagingBuyApplication');

        // 用户
        Route::post('Login/login' , 'Login@login');
        Route::post('Login/register' , 'Login@register');

        // 文章
        Route::post('Article/listForHome' , 'Article@listForHome');

        // 车系
        Route::post('/CarSeries/all' , 'CarSeries@all');

        // 车辆类型
        Route::post('/CarType/all' , 'CarType@all');

        // 杂类
        Route::post('/Misc/verifyCode' , 'Misc@verifyCode');
    });

