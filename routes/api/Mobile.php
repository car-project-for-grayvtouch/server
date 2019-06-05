<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:47
 */

Route::prefix('mobile')
    ->namespace('Mobile')
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
        Route::post('/Car/reservationCountForDay' , 'Car@reservationCountForDay');
        Route::post('/Car/incrementViewCount' , 'Car@incrementViewCount');
        Route::post('/Car/recommendation' , 'Car@recommendation');


        // 车辆-需要用户认证的接口
        Route::post('/CarWithAuth/reservation' , 'CarWithAuth@reservation');
        // 卖车
        Route::post('/CarWithAuth/saleApplication' , 'CarWithAuth@saleApplication');
        // 推荐车辆
        Route::post('/CarWithAuth/recommendationApplication' , 'CarWithAuth@recommendationApplication');
        // 购车
        Route::post('/CarWithAuth/stagingBuyApplication' , 'CarWithAuth@stagingBuyApplication');

        Route::post('/CarWithAuth/saleApplicationList' , 'CarWithAuth@saleApplicationList');
        Route::post('/CarWithAuth/recommendationApplicationList' , 'CarWithAuth@recommendationApplicationList');
        Route::post('/CarWithAuth/stagingBuyApplicationList' , 'CarWithAuth@stagingBuyApplicationList');
        Route::post('/CarWithAuth/collectionForCar' , 'CarWithAuth@collectionForCar');
        Route::post('/CarWithAuth/collect' , 'CarWithAuth@collect');
        Route::post('/CarWithAuth/setStatusForSaleApplication' , 'CarWithAuth@setStatusForSaleApplication');
        Route::post('/CarWithAuth/setStatusForRecommendationApplication' , 'CarWithAuth@setStatusForRecommendationApplication');
        Route::post('/CarWithAuth/setStatusForStagingBuyApplication' , 'CarWithAuth@setStatusForStagingBuyApplication');
        Route::post('/CarWithAuth/setStatusForReservation' , 'CarWithAuth@setStatusForReservation');
        Route::post('/CarWithAuth/reservationList' , 'CarWithAuth@reservationList');

        // 用户
        Route::post('/Login/login' , 'Login@login');
        Route::post('/Login/register' , 'Login@register');

        // 文章
        Route::post('/Article/listForHome' , 'Article@listForHome');
        Route::post('/Article/detail' , 'Article@detail');
        Route::post('/Article/listForMedia' , 'Article@listForMedia');

        // 车系
        Route::post('/CarSeries/all' , 'CarSeries@all');

        // 车辆类型
        Route::post('/CarType/all' , 'CarType@all');

        // 杂类
        Route::post('/Misc/verifyCode' , 'Misc@verifyCode');

        // 用户
        Route::post('/User/info' , 'User@info');
        Route::post('/User/edit' , 'User@edit');
        Route::post('/User/image' , 'User@image');
        Route::post('/User/updatePassword' , 'User@updatePassword');

        // 订单
        Route::post('/Order/list' , 'Order@list');
        Route::post('/Order/commentForMain' , 'Order@commentForMain');

        // 文件上传
        Route::post('File/image' , 'File@image');
        Route::post('File/file' , 'File@file');

        // huma故事
        Route::post('Story/listForHome' , 'Story@listForHome');
    });

