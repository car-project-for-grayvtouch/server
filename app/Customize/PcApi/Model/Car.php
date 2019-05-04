<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 14:07
 */

namespace App\Customize\PcApi\Model;


use App\Customize\PcApi\Util\YouDaoTranslation;
use function core\convert_obj;
use Exception;
use function PcApi\res_url;
use function PcApi\config;
use DB;

class Car extends Model
{
    protected $table = 'car';
    public $timestamps = false;

    // 首页-车辆列表
    public static function listForHome(array $param = [] , int $limit = 20 , $language = null)
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
            ->limit($limit)
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$m)
        {
            $m = self::single($m , $language);
            $m->brand = Brand::single($m->brand , $language);
            $m->series = CarSeries::single($m->series , $language);
            $m->model = CarModel::single($m->model , $language);
        }
        return $res;
    }

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        // 封面
        $m->thumb = res_url($m->thumb);
        return self::translate($m , $language);
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
    public static function list(array $param = [] , array $sort = ['field' => 'update_time' , 'value' => 'desc'] , int $limit = 20 , $language = null)
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
//        DB::enableQueryLog();
        // 获取车辆列表
        $build = DB::table('car as c')
            ->leftJoin('car_model as cm' , 'c.car_model_id' , '=' , 'cm.id');
        if (!empty($where)) {
            $build = $build->where($where);
        }
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
//        print_r(DB::getQueryLog());
        $res = convert_obj($res);
        foreach ($res->data as &$v)
        {
            $v = self::single($v , $language);
            $v->brand = Brand::findById($v->brand_id , $language);
            $v->series = CarSeries::findById($v->car_series_id , $language);
            $v->model = CarModel::findById($v->car_model_id , $language);
        }
        return $res;
    }

    public static function findById($id , $language = null)
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
        $res = self::single($res , $language);
        if (!empty($res->model)) {
            // 车辆类型
            $res->model->car_type = CarType::findById($res->model->car_type_id , $language);
            // 车辆配置
            $res->model->configuration = CarModel::getConfiguration($res->model->id , $language);
        }
        // 检测报告
        $res->report = self::report($res->id , $language);
        $res->brand = Brand::single($res->brand , $language);
        $res->series = CarSeries::single($res->series , $language);
        $res->model = CarModel::single($res->model , $language);
        $res->image = CarImage::multiple($res->image);
        $res->service = Service::multiple($res->service , $language);
        return $res;
    }

    // 车辆信息（简略版）
    public static function findByIdForSimple($id , $language = null)
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
        $res = self::single($res , $language);
        $res->brand = Brand::single($res->brand , $language);
        $res->series = CarSeries::single($res->series , $language);
        $res->model = CarModel::single($res->model , $language);
        $res->service = Service::multiple($res->service , $language);
        return $res;
    }

    // 获取检测报告
    public static function report($id , $language = null)
    {
        $report = Report::findByCarId($id , $language);
        if (empty($report)) {
            return ;
        }
        $report->module = ReportForModule::getByReportId($report->id , $language);
        foreach ($report->module as $v)
        {
            $v->position = ReportForPos::getByReportForModuleId($v->id , $language);
            foreach ($v->position as $v1)
            {
                $v1->item = ReportForItem::getByReportForPosId($v1->id , $language);
            }
        }
        return $report;
    }

    // 收藏的车辆
    public static function collectionForCar($user_id , array $param = [] , $limit = 20 , $language = null)
    {
        $res = CollectionForCar::where('user_id' , $user_id)
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as &$v)
        {
            $v->car = self::findByIdForSimple($v->car_id , $language);
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

    public static function recommendation($limit = 10 , $language = null)
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
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$m)
        {
            $m = self::single($m , $language);
            $m->brand = Brand::single($m->brand , $language);
            $m->series = CarSeries::single($m->series , $language);
            $m->model = CarModel::single($m->model , $language);
        }
        return $res;
    }
}