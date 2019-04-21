<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\PcApi\Model;


class CarSeries extends Model
{
    protected $table = 'car_series';
    public $timestamps = false;

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class , 'brand_id' , 'id');
    }

    public static function findById($id)
    {
        $res = self::with('brand')
            ->find($id);
        self::single($res);
        Brand::single($res->brand);
        return $res;
    }
}