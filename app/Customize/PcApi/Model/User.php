<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

use Exception;
use function PcApi\res_url;

class User extends Model
{
    protected $table = 'user';
    public $timestamps = false;

    // 获取用户
    public static function findByUsername($username = '' , $language = null)
    {
        $m = self::where('username' , $username)
                ->first();
        if (empty($m)) {
            return ;
        }
        $m = self::single($m , $language);
        return $m;
    }

    // 获取用户密码
    public static function getPasswordByUsername($username = '')
    {
        return self::where('username' , $username)->value('password');
    }

    // 更新数据
    public static function updateByUsername($username = '' , array $param = [])
    {
        return self::where('username' , $username)
            ->update($param);
    }

    // 检查用户是否存在
    public static function existsByUsername($username = '')
    {
        return self::where('username' , $username)->count() > 0;
    }

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        $m->avatar_explain = res_url($m->avatar);
        return self::translate($m , $language);
    }
}