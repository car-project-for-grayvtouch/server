<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 20:35
 */

namespace App\Customize\PcApi\Model;

use function core\convert_obj;

class UserToken extends Model
{
    protected $table = 'user_token';
    public $timestamps = false;

    public static function findByToken($token = '')
    {
        $res = self::where('token' , $token)->first();
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        return $res;
    }

    public static function findByRefreshToken($refresh_token)
    {
        $res = self::where('refresh_token' , $refresh_token)->first();
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        return $res;
    }
}