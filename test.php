<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/1
 * Time: 9:52
 */


require_once __DIR__ . '/app/Customize/Admin/Extra/core/Lib/Category.php';

use Core\Lib\Category;

// 构造另一种数据
$data = [
    [
        'id' => 1 ,
        'name' => 'PHP' ,
        'p_id' => 0 ,
    ] ,
    [
        'id' => 2 ,
        'name' => 'Java' ,
        'p_id' => 0 ,
    ] ,
    [
        'id' => 3 ,
        'name' => '初级PHP' ,
        'p_id' => 1 ,
    ] ,
    [
        'id' => 4 ,
        'name' => '中级 PHP' ,
        'p_id' => 1 ,
    ] ,
    [
        'id' => 5 ,
        'name' => '高级 PHP' ,
        'p_id' => 1 ,
    ] ,
    [
        'id' => 6 ,
        'name' => '初级Java' ,
        'p_id' => 2 ,
    ] ,
    [
        'id' => 7 ,
        'name' => '中级 Java' ,
        'p_id' => 2 ,
    ] ,
    [
        'id' => 8 ,
        'name' => '高级 Java' ,
        'p_id' => 2 ,
    ] ,
    [
        'id' => 9 ,
        'name' => '初级 PHP-精通核心语法' ,
        'p_id' => 3 ,
    ] ,
    [
        'id' => 10 ,
        'name' => '中级 PHP-精通核心语法' ,
        'p_id' => 4 ,
    ] ,
    [
        'id' => 11 ,
        'name' => '初级 PHP-精通核心语法 --- 初' ,
        'p_id' => 9 ,
    ] ,
];

$res = Category::childrens(0 , $data , null , false , true);

print_r($res);