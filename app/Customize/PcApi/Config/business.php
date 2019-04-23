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
    // 搜索类型
    // affordable-经济实惠；new-准新车；luxury-豪华车 newAndHot
    'search_type' => ['newAndHot' , 'affordable' , 'new' , 'luxury'] ,
    // 搜索记录类型
    'search_log' => [
        // 品牌
        'brand' ,
        // 车系
        'series' ,
        // 关键字
        'keyword' ,
        // 销售亮点
        'sale_point' ,
    ] ,
];