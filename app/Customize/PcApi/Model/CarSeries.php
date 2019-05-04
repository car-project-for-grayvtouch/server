<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\PcApi\Model;


use function core\convert_obj;
use Exception;

class CarSeries extends Model
{
    protected $table = 'car_series';
    public $timestamps = false;

    public function brand()
    {
        return $this->belongsTo(Brand::class , 'brand_id' , 'id');
    }

    public function group()
    {
        return $this->belongsTo(CarSeriesGroup::class , 'car_series_group_id' , 'id');
    }

    public static function findById($id , $language = null)
    {
        $res = self::with('brand')
            ->find($id);
        if (empty($res)) {
            return ;
        }
        $res = self::single($res , $language);
        $res->brand = Brand::single($res->brand , $language);
        return $res;
    }

    public static function getAll($brand_id = null , $language = null)
    {
        $where = [];
        if (!empty($brand_id)) {
            $where[] = ['brand_id' , '=' , $brand_id];
        }
        $build = self::with('group')
            ->where($where);
        if (empty($brand_id)) {
            $build = $build->limit(10);
        }
        $res = $build->get();
        $res = convert_obj($res);
        foreach ($res as &$v)
        {
            $v = self::single($v , $language);
            $v->group = CarSeriesGroup::single($v->group , $language);
        }
        return $res;
    }
}