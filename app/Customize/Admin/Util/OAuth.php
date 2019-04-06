<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/20
 * Time: 19:26
 *
 * OAuth 2.0 认证
 */

namespace App\Customize\Admin\Util;

use function core\ssl_random;

use Exception;
use ReflectionClass;
use ReflectionException;

class OAuth
{
    // 有效时常，可选：short / middle / long
    private static $duration = 'middle';
    // token 过期时间
    private static $tokenDuration = 10 * 60;
    // 10min
    private static $durationForShort = 30 * 60;
    // 2h
    private static $durationForMid = 2 * 3600;
    // 1d
    private static $durationForLong = 24 * 3600;
    // 获取用户数据
    private $user = null;
    // 随机数长度
    private static $length = 64;

    public function __construct($user , $len = 64)
    {
        try {
            $rc = new ReflectionClass($user);
            if (!$rc->hasMethod('findByUsername')) {
                throw new Exception('对象必须包含 findByUsername 方法');
            }
        } catch(ReflectionException $e) {
            throw new Exception('请提供对象');
        } catch(Exception $e) {
            throw $e;
        }
        $this->user = $user;
        self::$length = $len;
    }

    // 响应
    private function response(int $code , $data = '')
    {
        return compact('code' , 'data');
    }

    // 获取时常
    private static function getDuration()
    {
        switch (self::$duration)
        {
            case 'short':
                return self::$durationForShort;
            case 'middle':
                return self::$durationForMid;
            case 'long':
                return self::$durationForLong;
            default:
                throw new Exception('不支持的时常类型！');
        }
    }

    // 密码模式
    public function password($username , $password , callable $check)
    {
        $user = $this->user->findByUsername($username);
        if (empty($user)) {
            return $this->response(404 , [
                'username' => '用户不存在'
            ]);
        }
        if (!isset($user->password)) {
            throw new Exception('findByUsername 方法返回的对象必须包含 password 字段！！');
        }
        if (!$check($password , $user->password)) {
            return $this->response(400 , [
                'password' => '密码错误'
            ]);
        }
        $data = $this->token();
        return $this->response(200 , $data);
    }

    // todo 授权码模式
    public function authorizationCode()
    {
        // 先验证客户端
        // 用户授权
        // 生成授权码
        // 请求 token
        // 返回 token
    }

    // todo 简化模式
    public function implicit()
    {

    }

    // todo 客户端模式
    public function client()
    {

    }

    // 生成随机数
    public static function random($length = 0)
    {
        $length = empty($length) ? self::$length : intval($length);
        return ssl_random($length);
    }

    // 刷新 token
    public static function token()
    {
        // 生成 64bit 长度的 token
        $time = time();
        $duration = self::getDuration();
        $class = new class() {
            public $token = '';
            public $tokenExpire = '';
            public $refreshToken = '';
            public $refreshTokenExpire  = '';
        };
        $class->token = self::random();
        $class->tokenExpire = date('Y-m-d H:i:s' , $time + self::$tokenDuration);
        $class->refreshToken = self::random();
        $class->refreshTokenExpire = date('Y-m-d H:i:s' , $time + $duration);
        return $class;
    }
}