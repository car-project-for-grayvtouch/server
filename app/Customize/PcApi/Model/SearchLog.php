<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\PcApi\Model;


class SearchLog extends Model
{
    protected $table = 'search_log';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        switch ($m->type)
        {
            case 'brand':
                $m->brand = Brand::findById($m->value);
                break;
            case 'series':
                $m->series = CarSeries::findById($m->value);
                break;
            default:
                break;
        }
    }

    public static function hot($limit = 10)
    {
        $res = self::orderBy('count' , 'desc')
            ->limit($limit)
            ->get();
        self::multiple($res);
        return $res;
    }

    // 更新日志
    public static function updateByTypeAndValue($type , $value , array $data = [])
    {
        return self::where([
            ['type' , '=' , $type] ,
            ['value' , '=' , $value]
        ])->update($data);
    }

    // 获取记录：不加锁
    public static function findByTypeAndValue($type , $value)
    {
        $res = self::where([
            ['type' , '=' , $type] ,
            ['value' , '=' , $value]
        ])->first();
        self::single($res);
        return $res;
    }

    // 获取记录：加锁
    public static function findWithLockByTypeAndValue($type , $value)
    {
        $res = self::where([
                ['type' , '=' , $type] ,
                ['value' , '=' , $value]
            ])
            ->lockForUpdate()
            ->first();
        self::single($res);
        return $res;
    }
}