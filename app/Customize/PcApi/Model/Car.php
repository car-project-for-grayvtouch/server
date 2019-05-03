<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 14:07
 */

namespace App\Customize\PcApi\Model;


use App\Customize\Admin\Model\CarModelWithConfiguration;
use Exception;
use function PcApi\res_url;
use function PcApi\config;
use DB;

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

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
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

    // 车款
    public function service()
    {
        return $this->belongsToMany(Service::class , 'car_service', 'car_id' , 'service_id');
    }

    // 车辆列表
    public static function list(array $param = [] , array $sort = ['field' => 'update_time' , 'value' => 'desc'] , int $limit = 20)
    {
        $param['keyword']       = $param['keyword'] ?? '';
        $param['sale_point']    = $param['sale_point'] ?? '';
        $param['brand_id']      = $param['brand_id'] ?? '';
        $param['car_series_id'] = $param['car_series_id'] ?? '';
        $param['car_type_id']   = $param['car_type_id'] ?? '';
        $param['price']         = $param['price'] ?? '';
        $param['mileage']       = $param['mileage'] ?? '';
        $param['gearbox']       = $param['gearbox'] ?? '';
        $param['age']           = $param['age'] ?? '';
        $param['color']         = $param['color'] ?? '';
        $sort['field']         = $sort['field'] ?? 'update_time';
        $sort['value']         = $sort['value'] ?? 'desc';

        switch ($sort['field'])
        {
            case 'price':
                $sort['field'] = sprintf('c.%s' , $sort['field']);
                break;
            case 'year':
                $sort['field'] = sprintf('cm.%s' , $sort['field']);
                break;
            case 'mileage':
                $sort['field'] = sprintf('c.%s' , $sort['field']);
                break;
            default:
                $sort['field'] = sprintf('c.%s' , $sort['field']);
        }
        $where = [];
        $where_in = [];
        $where_not_in = [];
        $where_raw = [];
        if ($param['brand_id'] != '') {
            $where[] = ['c.brand_id' , '=' , $param['brand_id']];
        }
        if ($param['car_series_id'] != '') {
            $where[] = ['c.car_series_id' , '=' , $param['car_series_id']];
        }
        if ($param['car_type_id'] != '') {
            $where[] = ['cm.car_type_id' , '=' , $param['car_type_id']];
        }
        if ($param['gearbox'] != '') {
            $where[] = ['cm.gearbox' , '=' , $param['gearbox']];
        }
        if ($param['sale_point'] != '') {
            $where[] = ['c.sale_point' , '=' , $param['sale_point']];
        }
        if ($param['keyword'] != '') {
            $where[] = ['c.title' , 'like' , "%{$param['keyword']}%"];
        }
        if ($param['color'] != '') {
            $color_for_car = config('business.color_for_car');
            if ($param['color'] == '其他') {
                $range = $color_for_car;
                $where_not_in[] = [
                    'c.Kcolor' => $range
                ];
            } else {
                $where[] = ['c.color' , '=' , $param['color']];
            }
        }
        if ($param['price'] != '') {
            switch ($param['price'])
            {
                case 1:
                    $where[] = ['c.price' , '<' , 10000];
                    break;
                case 2:
                    $where[] = ['c.price' , '>=' , 10000];
                    $where[] = ['c.price' , '<=' , 15000];
                    break;
                case 3:
                    $where[] = ['c.price' , '>=' , 15000];
                    $where[] = ['c.price' , '<=' , 20000];
                    break;
                case 4:
                    $where[] = ['c.price' , '>=' , 20000];
                    $where[] = ['c.price' , '<=' , 30000];
                    break;
                case 5:
                    $where[] = ['c.price' , '>=' , 30000];
                    $where[] = ['c.price' , '<=' , 40000];
                    break;
                case 6:
                    $where[] = ['c.price' , '>' , 40000];
                    break;
                default:
                    throw new Exception('不支持的 price 类型');
            }
        }
        if ($param['mileage'] != '') {
            switch ($param['mileage'])
            {
                case 1:
                    $where[] = ['c.mileage' , '<' , 10000];
                    break;
                case 2:
                    $where[] = ['c.mileage' , '<' , 30000];
                    break;
                case 3:
                    $where[] = ['c.mileage' , '<' , 50000];
                    break;
                case 4:
                    $where[] = ['c.mileage' , '<' , 80000];
                    break;
                case 5:
                    $where[] = ['c.mileage' , '>=' , 100000];
                    break;
                case 6:
                    $where[] = ['c.mileage' , '>' , 150000];
                    break;
                default:
                    throw new Exception('不支持的 mileage 类型');
            }
        }
        if ($param['age'] != '') {
            switch ($param['age'])
            {
                case 1:
                    $where_raw[] = ['year(current_date()) - xq_cm.year <= ?' , [1]];
                    break;
                case 2:
                    $where_raw[] = ['year(current_date()) - xq_cm.year <= ?' , [3]];
                    break;
                case 3:
                    $where_raw[] = ['year(current_date()) - xq_cm.year <= ?' , [5]];
                    break;
                case 4:
                    $where_raw[] = ['year(current_date()) - xq_cm.year <= ?' , [6]];
                    break;
                case 5:
                    $where_raw[] = ['year(current_date()) - xq_cm.year <= ?' , [8]];
                    break;
                case 6:
                    $where_raw[] = ['year(current_date()) - xq_cm.year > ?' , [8]];
                    break;
                default:
                    throw new Exception('不支持的 age 值');
            }
        }
        // 获取车辆列表
        $build = DB::table('car as c')
            ->join('car_model as cm' , 'c.car_model_id' , '=' , 'cm.id')
            ->where($where);
        foreach ($where_not_in as $k => $v)
        {
            $build = $build->whereNotIn($k , $v);
        }
        foreach ($where_in as $k => $v)
        {
            $build = $build->whereIn($k , $v);
        }
        foreach ($where_raw as $v)
        {
            $build = $build->whereRaw($v[0] , $v[1]);
        }
        $res = $build
            ->orderBy($sort['field'] , $sort['value'])
            ->orderBy('c.id' , 'desc')
            ->select('c.*')
            ->paginate($limit);
        foreach ($res as $v)
        {
            self::single($v);
            $v->brand = Brand::findById($v->brand_id);
            $v->series = CarSeries::findById($v->car_series_id);
            $v->model = CarModel::findById($v->car_model_id);
        }
        return $res;
    }

    public static function findById($id)
    {
        $res = self::with([
                'brand' ,
                'series' ,
                'model' ,
                'image' ,
                'service' ,
            ])
            ->find($id);
        if (empty($res)) {
            return ;
        }
        if (!empty($res->model)) {
            // 车辆类型
            $res->model->car_type = CarType::findById($res->model->car_type_id);
            // 车辆配置
            $res->model->configuration = CarModel::getConfiguration($res->model->id);
        }
        // 检测报告
        $res->report = self::report($res->id);
        self::single($res);
        Brand::single($res->brand);
        CarSeries::single($res->series);
        CarModel::single($res->model);
        CarImage::multiple($res->image);
        Service::multiple($res->service);
        return $res;
    }

    // 车辆信息（简略版）
    public static function findByIdForSimple($id)
    {
        $res = self::with([
                'brand' ,
                'series' ,
                'model' ,
                'service' ,
            ])
            ->find($id);
        if (empty($res)) {
            return ;
        }
        self::single($res);
        Brand::single($res->brand);
        CarSeries::single($res->series);
        CarModel::single($res->model);
        Service::multiple($res->service);
        return $res;
    }

    // 获取检测报告
    public static function report($id)
    {
        $report = Report::findByCarId($id);
        if (empty($report)) {
            return ;
        }
        $report->module = ReportForModule::getByReportId($report->id);
        if (empty($report->module)) {
            return $report;
        }
        foreach ($report->module as $v)
        {
            $v->position = ReportForPos::getByReportForModuleId($v->id);
            if (empty($v->position)) {
                continue ;
            }
            foreach ($v->position as $v1)
            {
                $v1->item = ReportForItem::getByReportForPosId($v1->id);
            }
        }
        return $report;
    }

    // 收藏的车辆
    public static function collectionForCar($user_id , array $param = [] , $limit = 20)
    {
        $res = CollectionForCar::where('user_id' , $user_id)
            ->paginate($limit);
        foreach ($res as $v)
        {
            $v->car = self::findByIdForSimple($v->car_id);
        }
        return $res;
    }

    public static function countByDate($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }

    public static function incrementViewCount($id)
    {
        return self::where('id' , $id)
            ->increment('view_count' , 1);
    }

    public static function recommendation($limit)
    {
        $res = self::with([
                'brand' ,
                'series' ,
                'model' ,
            ])
            ->orderBy('view_count' , 'desc')
            ->orderBy('update_time' , 'desc')
            ->orderBy('id' , 'desc')
            ->limit($limit)
            ->get()
            ->each(function ($m){
                self::single($m);
                Brand::single($m->brand);
                CarSeries::single($m->series);
                CarModel::single($m->model);
            });
        return $res;
    }
}