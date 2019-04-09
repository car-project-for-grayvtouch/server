<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/7
 * Time: 21:50
 */

namespace App\Customize\Admin\Model;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Database\Eloquent\Collection;

class Model extends BaseModel implements ModelInterface
{
    public static function multiple(Collection $list)
    {
        foreach ($list as $v)
        {
            static::single($v);
        }
    }

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    // 更新
    public static function updateById($id , array $param = [])
    {
        return static::where('id' , $id)
            ->update($param);
    }

    public static function getAll()
    {
        $res = static::all();
        static::multiple($res);
        return $res;
    }

    public static function findById($id)
    {
        $res = static::find($id);
        static::single($res);
        return $res;
    }
}