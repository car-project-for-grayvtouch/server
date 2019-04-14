<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class Car extends Model
{
    protected $table = 'car';
    public $timestamps = false;

    public function brand()
    {
        return $this->belongsTo(Brand::class , 'brand_id' , 'id');
    }

    public function series()
    {
        return $this->belongsTo(CarSeries::class , 'car_series_id' , 'id');
    }

    public function model()
    {
        return $this->belongsTo(CarModel::class , 'car_model_id' , 'id');
    }

    public function image()
    {
        return $this->hasMany(CarImage::class , 'car_id' , 'id');
    }

    public function service()
    {
        return $this->belongsToMany(Service::class , 'car_service' ,  'car_id' , 'service_id');
    }

    // 获取数据列表
    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        // 字段检索
        $filter['id']    = $filter['id'] ?? '';
        $filter['title']  = $filter['title'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['title'] != '') {
            $where[] = ['title' , 'like' , "%{$filter['title']}%"];
        }
        $res = self::with([
                'brand' => function($query){
                    // 这里可以做一些过滤
                } ,
                'series' => function($query){
                    // 这里可以做一些过滤
                } ,
                'model' => function($query){
                    // 这里可以做一些过滤
                }
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    public static function findById($id)
    {
        $res = self::with(['image' , 'service'])->find($id);
        static::single($res);
        return $res;
    }
}