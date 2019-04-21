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

    public static function single(Model $m = null)
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
}