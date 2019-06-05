<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/6/5
 * Time: 17:14
 */

namespace App\Customize\Util;

use Core\Lib\Http;

class RTC
{
    public static $host = 'http://192.168.1.67:9301';

    public static $identifier = '0hGFPPyf7Bnu3gnF';

    // 登录
    public static function login(string $role , string $username , string $nickname = '' , $avatar = '')
    {
        /**
         * identifier:0hGFPPyf7Bnu3gnF
            username:test
            nickname:test
            avatar:test
            role:user
         */
        $param = [
            'identifier' => self::$identifier ,
            'username' => $username ,
            'role' => $role ,
        ];
    }

    // 注册
    //

}