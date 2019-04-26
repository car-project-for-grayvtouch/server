<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:37
 */

namespace App\Customize\PcApi\Http\Action;

use App\Customize\PcApi\Model\Car;
use App\Customize\PcApi\Model\CarComment;
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
        $res = CarComment::featuredComment($limit);
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
                if (!empty($param['brand_id'])) {
                    self::u_searchLog('brand' , $param['brand_id']);
                }
            }
            DB::commit();
            return self::success($res);
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }
}