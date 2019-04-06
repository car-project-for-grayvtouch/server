<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/21
 * Time: 15:23
 */

namespace App\Customize\Util;

use Captcha;

class VerifyCode
{
    // 验证
    public static function check(string $code , string $key) :bool
    {
        return captcha_api_check($code , $key);
    }

    // 生成
    public static function make(string $type = 'default' , bool $api = false)
    {
        return Captcha::create($type , $api);
    }
}