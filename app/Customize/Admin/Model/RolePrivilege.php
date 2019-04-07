<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/5
 * Time: 0:00
 */

namespace App\Customize\Admin\Model;

class RolePrivilege extends Model
{
    protected $table = 'role_privilege';
    public $timestamps = false;

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public static function delByRoleId($role_id)
    {
        return self::where('role_id' , $role_id)
            ->delete();
    }

}