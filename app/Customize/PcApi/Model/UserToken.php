<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 20:35
 */

namespace App\Customize\PcApi\Model;

class UserToken extends Model
{
    protected $table = 'user_token';
    public $timestamps = false;

    public static function findByToken($token = '')
    {
        return self::where('token' , $token)->first();
    }

    public static function findByRefreshToken($refresh_token)
    {
        return self::where('refresh_token' , $refresh_token)->first();
    }
}