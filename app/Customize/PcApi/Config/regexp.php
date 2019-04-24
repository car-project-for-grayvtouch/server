<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 13:58
 */
return [
    // 用户名验证正则
    'username' => [
        'value' => '/^[A-z0-9\._\-]{6,}$/' ,
        'desc' => '支持A-z/0-9/./_/-，最少 6 位'
    ] ,
    // 密码
    'password' => [
        'value' => '/^[A-z0-9\._]{6,}$/' ,
        'desc' => '支持A-z/0-9/./_，最少 6 位'
    ] ,
];