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

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        switch ($m->type)
        {
            case 'brand':
                $m->brand = Brand::findById($m->value , $language);
                break;
            case 'series':
                $m->series = CarSeries::findById($m->value , $language);
                break;
            default:
                break;
        }
        return self::translate($m , $language);
    }

    public static function hot($limit = 10 , $language = null)
    {
        $res = self::orderBy('count' , 'desc')
            ->limit($limit)
            ->get();
        $res = self::multiple($res , $language);
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
    public static function findByTypeAndValue($type , $value , $language = null)
    {
        $res = self::where([
            ['type' , '=' , $type] ,
            ['value' , '=' , $value]
        ])->first();
        if (empty($res)) {
            return ;
        }
        $res = self::single($res , $language);
        return $res;
    }

    // 获取记录：加锁
    public static function findWithLockByTypeAndValue($type , $value , $language = null)
    {
        $res = self::where([
                ['type' , '=' , $type] ,
                ['value' , '=' , $value]
            ])
            ->lockForUpdate()
            ->first();
        if (empty($res)) {
            return ;
        }
        $res = self::single($res , $language);
        return $res;
    }
}