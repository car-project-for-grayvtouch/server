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
        Route::post('/ShowImage/home' , 'ShowImage@home');
        Route::any('/Brand/all' , 'Brand@all');
    });

