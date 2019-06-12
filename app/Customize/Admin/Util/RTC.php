<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/6/5
 * Time: 17:14
 */

namespace App\Customize\Admin\Util;

use Core\Lib\Http;

class RTC
{
//    private static $host = 'http://192.168.1.67:9301';
    private static $host = 'http://47.252.80.36';

    private static $port = 9300;

    private static $identifier = '0hGFPPyf7Bnu3gnF';

    private static $token = '';

    // 注册
    public static function register(string $username , string $nickname = '' , $avatar = '')
    {
        $param = [
            'username'  => $username ,
            'role'      => 'admin' ,
            'avatar'    => $avatar ,
            'nickname'  => $nickname ,
        ];
        $param = self::data($param);
        $res = self::post('/Login/register' , $param);
        return self::response($res);
    }

    // 登录
    public static function login(string $unique_code)
    {
        $param = [
            'unique_code' => $unique_code
        ];
        $param = self::data($param);
        $res = self::post('/Login/login' , $param);
        return self::response($res);
    }

    // 单条推送
    public static function single(int $user_id , string $type , $data = '')
    {
        $param = [
            'user_id' => $user_id ,
            'type' => $type ,
            'data' => $data
        ];
        $param = self::data($param);
        $res = self::post('/Push/single' , $param);
        return self::response($res);
    }

    // 多条推送
    public static function multiple(string $role , string $type , array $user_id = [] , $data = '')
    {
        $role_range = ['admin' , 'user' , 'all' , 'designation'];
        $role = in_array($role , $role_range) ? $role : 'all';
        $param = [
            'role'      => $role ,
            'user_id'   => json_encode($user_id) ,
            'type'      => $type ,
            'data'      => $data
        ];
        $param = self::data($param);
        $res = self::post('/Push/multiple' , $param);
        return self::response($res);
    }


    // 系统消息
    public static function system(string $role , array $user_id = [] , $data = '')
    {
        $role_range = ['admin' , 'user' , 'all' , 'designation'];
        $role = in_array($role , $role_range) ? $role : 'all';
        $param = [
            'role'      => $role ,
            'user_id'   => json_encode($user_id) ,
            'data'      => $data
        ];
        $param = self::data($param);
        $res = Http::post('/Push/system' , $param);
        return self::response($res);
    }

    // 编辑用户信息
    public static function editForUser(string $nickname = '' , string $avatar = '')
    {
        $param = [
            'nickname'  => $nickname ,
            'avatar'    => $avatar
        ];
        $param = self::data($param);
        $res = self::post('/User/edit' , $param);
        return self::response($res);
    }

    // 获取数据
    private static function data(array $data = [])
    {
        return array_merge([
            'identifier' => self::$identifier
        ] , $data);
    }

    // 响应
    private static function response($res)
    {
        if ($res == false) {
            return [
                'code' => 500 ,
                'data' => sprintf('%s 发送请求失败' , Http::class)
            ];
        }
        return json_decode($res , true);
    }

    public static function setToken(string $token = '')
    {
        self::$token = $token;
    }

    private static function post(string $url , array $data = [])
    {
        return Http::post(sprintf('%s%s' , self::$host , $url) , [
            'header' => [
                'Authorization' => self::$token
            ] ,
            'data' => $data ,
            'port' => self::$port ,
            // 代理端口
            'proxy_tunnel' => true ,
            'proxy' => '127.0.0.1' ,
            'proxy_port' => 8888 ,
        ]);
    }
}