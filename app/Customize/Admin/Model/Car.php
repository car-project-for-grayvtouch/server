<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\res_url;
use Exception;

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

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->thumb_explain = res_url($m->thumb);
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
        $res = self::with(['image' , 'service'])
            ->find($id);
        if (empty($res)) {
            return ;
        }
        self::single($res);
        CarImage::multiple($res->image);
        Service::multiple($res->service);

        return $res;
    }

    // 获取检测报告项目
    public static function report($id)
    {
        $module = ReportForModule::getByReportId($id);
        foreach ($module as $v)
        {
            $v->position = ReportForPos::getByReportForModuleId($v->id);
            foreach ($v->position as $v1)
            {
                $v1->item = ReportForItem::getByReportForPosId($v1->id);
            }
        }
        return $module;
    }

    // 报告选项
    public static function rule()
    {
        // 获取 module
        $module = DetectionModule::getAll();
        // 获取检测位置
        foreach ($module as $v)
        {
            // 获取检测位置
            $v->position = DetectionPos::getByModuleId($v->id);
            foreach ($v->position as $v1)
            {
                // 获取检测项
                $v1->item = DetectionItem::getByPosId($v1->id);
            }
        }
        return $module;
    }

    public static function countByDate($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }
}