<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class CarModel extends Model
{
    protected $table = 'car_model';
    public $timestamps = false;

    public function configuration()
    {
        return $this->belongsToMany(CarConfiguration::class , 'car_model_with_configuration' , 'car_model_id' , 'car_configuration_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class , 'brand_id' , 'id');
    }

    public function series()
    {
        return $this->belongsTo(CarSeries::class , 'car_series_id' , 'id');
    }

    // 获取数据列表
    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        // 字段检索
        $filter['id']    = $filter['id'] ?? '';
        $filter['name']  = $filter['name'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['name'] != '') {
            $where[] = ['name' , 'like' , "%{$filter['name']}%"];
        }
        $res = self::with([
                'brand' => function($query){
                    // 这里可以做一些过滤
                } ,
                'series' => function($query){
                    // 这里可以做一些过滤
                } ,
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    public static function findById($id)
    {
        $res = self::with('configuration')
            ->find($id);
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }

    public static function getAll(array $param = [])
    {
        $where = [];
        $param['car_series_id'] = $param['car_series_id'] ?? '';
        if ($param['car_series_id'] != '') {
            $where[] = ['car_series_id' , '=' , $param['car_series_id']];
        }
        $res = self::where($where)->get();
        self::multiple($res);
        return $res;
    }
}