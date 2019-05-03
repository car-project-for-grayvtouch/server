<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;


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

    // 获取数据列表
    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        // 字段检索
        $filter['id']                   = $filter['id'] ?? '';
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

                } ,
                'group' => function($query){

                } ,
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    public static function getAll(array $param = [])
    {
        $param['brand_id'] = $param['brand_id'] ?? '';
        $where = [];
        if ($param['brand_id'] != '') {
            $where[] = ['brand_id' , '=' , $param['brand_id']];
        }
        $res = self::where($where)->get();
        self::multiple($res);
        return $res;
    }
}