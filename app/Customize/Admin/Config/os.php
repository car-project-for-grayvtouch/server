<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/5
 * Time: 9:32
 */

use function Admin\config;

return [
    'system' => [
        'name' => '兴趣部落' ,
        'version' => '1.0.0' ,
        'logo' => config('app.host') . 'static/image/logo.jpg' ,
    ] ,
    'developer' => [
        'cn' => '陈学龙' ,
        'en' => 'grayVTouch' ,
        'qq' => '1615980946' ,
        'phone' => '13375086826' ,
    ] ,
];