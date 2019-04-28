<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:37
 */

namespace App\Customize\PcApi\Http\Action;

use App\Customize\PcApi\Model\Car;
use App\Customize\PcApi\Model\ProductComment;
use App\Customize\PcApi\Model\CarConfiguration;
use App\Customize\PcApi\Model\CollectionForCar;
use App\Customize\PcApi\Model\SearchLog;
use Exception;
use function PcApi\get_form_error;
use function PcApi\parse_order;
use function PcApi\user;
use Validator;
use DB;

use function PcApi\config;

class CarAction extends Action
{
    // 工具函数：检查用户是否收藏了该车辆
    public static function u_collected($car_id)
    {
        $user = user();
        // 是否收藏了该记录
        if (empty($user)) {
            return 'n';
        }
        return CollectionForCar::isCollected($user->id , $car_id) ? 'y' : 'n';
    }

    // 记录搜索日志
    public static function u_searchLog($type , $value)
    {
        $log = SearchLog::findByTypeAndValue($type , $value);
        if (empty($log)) {
            // 插入
            SearchLog::insert([
                'type' => $type ,
                'value' => $value ,
                'count' => 1
            ]);
            return ;
        }
        SearchLog::updateByTypeAndValue($type , $value , [
            'count' => ++$log->count
        ]);
    }

    // 工具函数：车辆列表
    public static function listForHome(array $param)
    {
        $validator = Validator::make($param , [
            'type' => 'required' ,
        ] , [
            'type.required' => '类型错误' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        if (!in_array($param['type'] , config('business.search_type'))) {
            return self::error('搜索类型错误');
        }
        try {
            DB::beginTransaction();
            // 获取数据
            $res = Car::listForHome($param);
            foreach ($res as $v)
            {
                $v->collected = self::u_collected($v->id);
            }
            // 记录搜索记录
            if (in_array($param['type'] , config('business.sale_point_for_search_log'))) {
                self::u_searchLog('sale_point' , $param['type']);
            }
            DB::commit();
            return self::success($res);
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    // 车辆-优质评论
    public static function featuredComment()
    {
        // 默认挑出来的评论数量
        $limit = 20;
        $res = ProductComment::featuredComment($limit);
        return self::success($res);
    }

    // 车辆-买车页面
    public static function list(array $param)
    {
        $sort = $param['sort'] == '' ? 'update_time|desc' : $param['sort'];
        $sort = parse_order($sort , '|');
        $limit = config('app.limit');
        try {
            DB::beginTransaction();
            $res = Car::list($param , $sort , $limit);
            foreach ($res as $v)
            {
                // 是否收藏
                $v->collected = self::u_collected($v->id);
                if (!empty($param['brand_id'])) {
                    // 记录搜索日志
                    self::u_searchLog('brand' , $param['brand_id']);
                }
                if (!empty($param['car_series_id'])) {
                    self::u_searchLog('series' , $param['car_series_id']);
                }
                if (!empty($param['keyword'])) {
                    self::u_searchLog('keyword' , $param['keyword']);
                }
                if (!empty($param['sale_point']) && in_array($param['sale_point'] , config('business.sale_point_for_search_log'))) {
                    self::u_searchLog('sale_point' , $param['sale_point']);
                }
            }
            DB::commit();
            return self::success($res);
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    // 车辆-详情页
    public static function detail(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
        ] , [
            'id.required' => 'id 必须提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $car = Car::findById($param['id']);
        if (empty($car)) {
            return self::error('未找到 id = ' . $param['id'] . '对应车辆');
        }
        // 用户是否收藏
        $car->collected = self::u_collected($car->id);
        $configuration = CarConfiguration::groupData();
        return self::success(compact('car' , 'configuration'));
    }
}