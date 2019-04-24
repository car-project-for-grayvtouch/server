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
use function PcApi\user;
use Validator;
use DB;

use function PcApi\config;

class CarAction extends Action
{
    // 车辆列表
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
                $user = user();
                // 是否收藏了该记录
                if (empty($user)) {
                    $v->collected = 'n';
                } else {
                    // 检查当前登录用户是否收藏了该车辆
                    $v->collected = CollectionForCar::isCollected($user->id , $v->id) ? 'y' : 'n';
                }
            }
            // 记录搜索记录
            if (in_array($param['type'] , config('business.sale_point_for_search_log'))) {
                $log = SearchLog::findWithLockByTypeAndValue('sale_point' , $param['type']);
                if (empty($log)) {
                    // 插入
                    SearchLog::insert([
                        'type' => 'sale_point' ,
                        'value' => $param['type'] ,
                        'count' => 1
                    ]);
                } else {
                    SearchLog::updateByTypeAndValue('sale_point' , $param['type'] , [
                        'count' => ++$log->count
                    ]);
                }
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
}