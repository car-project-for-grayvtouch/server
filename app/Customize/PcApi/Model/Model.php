<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/7
 * Time: 21:50
 */

namespace App\Customize\PcApi\Model;

use Exception;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Database\Eloquent\Collection;
use Traversable;

class Model extends BaseModel implements ModelInterface
{
    public static function multiple(Traversable $list)
    {
        foreach ($list as $v)
        {
            static::single($v);
        }
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
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