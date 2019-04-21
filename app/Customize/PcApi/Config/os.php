<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/5
 * Time: 9:32
 */

use function PcApi\config;

return [
    'system' => [
        'name' => '汽车后台管理系统' ,
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