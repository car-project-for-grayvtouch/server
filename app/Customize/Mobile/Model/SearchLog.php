<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\Mobile\Model;


use function core\convert_obj;
use function Mobile\get_value;

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
            case 'sale_point':
                $m->sale_point = get_value('business.sale_point' , $m->value);
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
        $res = convert_obj($res);
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
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
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
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        return $res;
    }
}