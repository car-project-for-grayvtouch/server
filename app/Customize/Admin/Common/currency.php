<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/21
 * Time: 10:13
 */

namespace Admin;

use function core\format_path;
use function extra\config as config_function;
use function response as response_function;

use Exception;

// 获取配置配置文件
function config($k , $args = [])
{
    $dir = __DIR__ . '/../Config';
    return config_function($dir , $k , $args);
}

// 获取对应值
function get_value($k , $val = '')
{
    $range = config($k);
    foreach ($range as $k => $v)
    {
        if ($k == $val) {
            return $v;
        }
    }
    return '';
}

// 成功
function success($data = '' , $code = 200)
{
    return response($data , $code);
}

// 失败
function error($data = '' , $code = 400)
{
    return response($data , $code);
}

// 响应
function response($data , $code)
{
    if (is_scalar($data)) {
        return response_function($data , $code);
    }
    return response_function()
    ->json($data , $code);
}

// 当前登录用户
function user()
{
    return app()->make('user');
}

// 格式化 validator 表单验证的错误信息
function form_error($validator)
{
    $error = $validator->errors()->messages();
    $res = [];
    foreach ($error as $k => $v)
    {
        $res[$k] = count($v) > 0 ? $v[0] : '';
    }
    return error($res , 400);
}

// 获取首个错误
function get_form_error($validator)
{
    $error = $validator->errors()->messages();
    $error = array_values($error);
    if (count($error) == 0) {
        return '';
    }
    $error = $error[0];
    if (count($error) == 0) {
        return '';
    }
    return $error[0];
}

// 生成 url
function res_url($path = '' , bool $host = false)
{
    $realpath = realpath($path);
    if ($realpath) {
        $realpath = format_path($realpath);
        $dir = public_path();
        $dir = format_path($dir);
        $path = str_replace($dir , '' , $realpath);
    }
    $path = mb_substr($path , 0 , 1) == '/' ? mb_substr($path , 1) : $path;
    if (!$host) {
        return '/' . $path;
    }
    $prefix = config('app.host');
    return $prefix . $path;
}

// 生成资源路径
function res_path($relative_path = '')
{
    if (empty($relative_path)) {
        return '';
    }
    $dir = public_path();
    $dir = format_path($dir);
    $relative_path = format_path($relative_path);
    $relative_path = mb_substr($relative_path , 0 , 1) == '/' ? $relative_path : '/' . $relative_path;
    return $dir . $relative_path;
}

// 解析 order
function parse_order($order = 'id|desc' , $delimiter = '|')
{
    if (empty($order)) {
        throw new Exception('参数 1 不能为空');
    }
    $order = explode($delimiter , $order);
    if (count($order) != 2) {
        throw new Exception('参数 1 不符合规范：field|value，分隔符任选');
    }
    $res = [
        'field' => $order[0] ,
        'value' => $order[1]
    ];
    return $res;
}