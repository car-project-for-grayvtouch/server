<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\PcApi\Model;


use function core\obj_to_array;
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
        print_r(obj_to_array($res));
        Brand::single($res->brand);
        return $res;
    }

    public static function getAll($brand_id = null)
    {
        $where = [];
        if (!empty($brand_id)) {
            $where[] = ['brand_id' , '=' , $brand_id];
        }
        $build = self::with('group')
            ->where($where);
        if (empty($brand_id)) {
            $build->limit(10);
        }
        $res = $build->get()
                ->each(function($m){
                    self::single($m);
                    CarSeriesGroup::single($m->group);
                });
        return $res;
    }
}