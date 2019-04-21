<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

use function PcApi\config;
use function PcApi\get_value;
use function PcApi\res_url;

class User extends Model
{
    protected $table = 'admin_user';
    public $timestamps = false;

    // 用户关联角色
    public function role()
    {
        return $this->belongsTo(Role::class , 'role_id' , 'id');
    }

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    // 获取用户
    public static function findByUsername($username = '')
    {
        $m = self::where('username' , $username)
                ->first();
        self::single($m);
        return $m;
    }

    // 获取用户
    public static function findById($id = '')
    {
        $m = self::find($id);
        self::single($m);
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
}