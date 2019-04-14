<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
//    exit('<h2 style="position: fixed;left: 50%; top: 50%; transform: translate(-50% , -50%);">欢迎访问 <b style="color: green">陈学龙</b> 的个人网站！</h2>');
    header('Location: /module/admin/compiled/app.html');
});
