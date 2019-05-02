<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/7
 * Time: 21:50
 */

namespace App\Customize\Admin\Model;

use Exception;
use Illuminate\Database\Eloquent\Model as BaseModel;
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
            throw new Exception('参数 1 类型错误');
        }
    }

    // 更新
    public static function updateById($id , array $param = [])
    {
        return static::where('id' , $id)
            ->update($param);
    }

    public static function updateByIds(array $id_list = [] , array $param = [])
    {
        return static::whereIn('id' , $id_list)
            ->update($param);
    }

    public static function getAll()
    {

        $res = static::orderBy('id' , 'desc')
            ->get();
        static::multiple($res);
        return $res;
    }

    public static function findById($id)
    {
        $res = static::find($id);
        static::single($res);
        return $res;
    }

    public static function getByIds(array $id_list = [])
    {
        $res = static::whereIn('id' , $id_list)->get();
        static::multiple($res);
        return $res;
    }

    public static function countByDate($date)
    {
        return static::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }

    public static function countByMonth($date)
    {
        return static::whereRaw('date_format(create_time , "%Y-%m") = :date', [
            'date' => $date
        ])->count();
    }
}