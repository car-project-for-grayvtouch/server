<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/4
 * Time: 17:11
 */

namespace App\Customize\PcApi\Util;

use function core\array_to_obj;
use function core\convert_obj;
use function core\obj_to_array;
use function core\ssl_random;
use Core\Lib\Http;
use Exception;
use function extra\has_cn;
use function extra\is_http;
use Traversable;

class YouDaoTranslation
{
    protected static $apiUrl = 'https://openapi.youdao.com/api';
    protected static $appKey = '411dbdd9f06b42a8';
    protected static $appSecret = 'Os09Glb6D8L1q6YmPPAHnCGHAgQXp294';
    protected static $sourceLanguage = 'zh-CHS';
    protected static $targetLanguage = 'en';
    protected static $signType = 'v3';
    protected static $timeout = 3;

    // 生成盐值
    protected static function salt()
    {
        return ssl_random(256);
    }

    // 生成 input
    protected static function input($str = '')
    {
        $len = mb_strlen($str);
        if ($len <= 20) {
            return $str;
        }
        $prefix = mb_substr($str , 0, 10);
        $suffix = mb_substr($str , $len - 10 , 10);
        return $prefix . $len . $suffix;
    }

    // 生成签名
    protected static function sign($str , $salt , $time)
    {
        $input = self::input($str);
        return hash('sha256' , self::$appKey . $input . $salt . $time . self::$appSecret);
    }

    // 中文 => 英文
    public static function cnToEn($str = '')
    {
        $salt = self::salt();
        $time = time();
        $sign = self::sign($str , $salt , $time);
        $post_data = [
            'q'         => $str ,
            'from'      => self::$sourceLanguage ,
            'to'        => self::$targetLanguage ,
            'appKey'    => self::$appKey ,
            'salt'      => $salt ,
            'sign'      => $sign ,
            'signType'  => self::$signType ,
            'curtime'   => $time ,
        ];
        $res = Http::post(self::$apiUrl , [
            'data'      => $post_data ,
            'timeout'   => self::$timeout
        ]);
        $res = json_decode($res , true);
        if ($res['errorCode'] != 0) {
            return '有道智云翻译失败';
        }
        return empty($res['translation']) ? '' : ($res['translation'][0] ?? '');
    }
}