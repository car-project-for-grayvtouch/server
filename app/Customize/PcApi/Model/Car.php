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

        $where = [];
        $where_in = [];
        $where_not_in = [];
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
            $car_filter = config('business.car_filter');
            if ($param['color'] == '其他') {
                $range = $car_filter['color'];
                $where_not_in[] = [
                    'c.color' => $range
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
                    $where[] = ['age' , '<=' , 1];
                    break;
                case 2:
                    $where[] = ['age' , '<=' , 3];
                    break;
                case 3:
                    $where[] = ['age' , '<=' , 5];
                    break;
                case 4:
                    $where[] = ['age' , '<=' , 6];
                    break;
                case 5:
                    $where[] = ['age' , '<=' , 8];
                    break;
                case 6:
                    $where[] = ['age' , '>' , 8];
                    break;
                default:
                    throw new Exception('不支持的 age 值');
            }
        }
        // 获取车辆列表
        $build = DB::table('car as c')
            ->join('car_model as cm' , 'c.car_model_id' , '=' , 'cm.id')
            ->where($where);
        if (!empty($where_not_in)) {
            foreach ($where_not_in as $k => $v)
            {
                $build->whereNotIn($k , $v);
            }
        }
        if (empty($where_in)) {
            foreach ($where_in as $k => $v)
            {
                $build->whereIn($k , $v);
            }
        }
        $res = $build
            ->orderBy(sprintf('c.%s' , $sort['field']) , $sort['value'])
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
        $report->module = ReportForModule::getByReportId($report->id);
        foreach ($report->module as $v)
        {
            $v->position = ReportForPos::getByReportForModuleId($v->id);
            foreach ($v->position as $v1)
            {
                $v1->item = ReportForItem::getByReportForPosId($v1->id);
            }
        }
        return $report;
    }

}