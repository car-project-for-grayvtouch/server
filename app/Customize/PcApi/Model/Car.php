<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 14:07
 */

namespace App\Customize\PcApi\Model;


use function PcApi\res_url;

class Car extends Model
{
    protected $table = 'car';
    public $timestamps = false;

    // 首页-车辆列表
    public static function listForHome(array $param = [])
    {

        $where = [];
        $param['type'] = $param['type'] ?? '';
        $type_range = ['affordable' , 'new' , 'luxury'];
        if (in_array($param['type'] , $type_range)) {
            $where[] = ['sale_point' , '=' , $param['type']];
        }
        // 默认按照 最新最热排序
        $res = self::with([
                'brand' ,
                'series' ,
                'model' ,
            ])
            ->where($where)
            ->orderBy('view_count' , 'desc')
            ->orderBy('update_time' , 'desc')
            ->orderBy('id' , 'desc')
            ->get()
            ->each(function($m){
                self::single($m);
                Brand::single($m->brand);
                CarSeries::single($m->series);
                CarModel::single($m->model);
            });
        return $res;
    }

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
        // 封面
        $m->thumb = res_url($m->thumb);
    }

    // 车辆图片
    public function image()
    {
        return $this->hasMany(CarImage::class , 'car_id' , 'id');
    }

    // 品牌
    public function brand()
    {
        return $this->belongsTo(Brand::class , 'brand_id' , 'id');
    }

    // 车系
    public function series()
    {
        return $this->belongsTo(CarSeries::class , 'car_series_id' , 'id');
    }

    // 车款
    public function model()
    {
        return $this->belongsTo(CarModel::class , 'car_model_id' , 'id');
    }

}