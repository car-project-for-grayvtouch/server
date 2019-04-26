<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\PcApi\Model;


use Exception;

class CarSeries extends Model
{
    protected $table = 'car_series';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class , 'brand_id' , 'id');
    }

    public function group()
    {
        return $this->belongsTo(CarSeriesGroup::class , 'car_series_group_id' , 'id');
    }

    public static function findById($id)
    {
        $res = self::with('brand')
            ->find($id);
        self::single($res);
        Brand::single($res->brand);
        return $res;
    }

    public static function getAll($brand_id = null)
    {
        if (empty($brand_id)) {
            throw new Exception('brand_id 尚未提供');
        }
        $res = self::with('group')
            ->where('brand_id' , $brand_id)
            ->get()
            ->each(function($m){
                self::single($m);
                CarSeriesGroup::single($m->group);
            });
        return $res;
    }
}