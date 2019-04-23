<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:37
 */

namespace App\Customize\PcApi\Http\Action;

use App\Customize\PcApi\Model\Car;
use function PcApi\get_form_error;
use Validator;
use DB;

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
            array_walk($res , function($m){
                $user = user();
                // 是否收藏了该记录
                if (empty($user)) {
                    $m->collected = 'n';
                }
                // 检查当前登录用户是否收藏了该车辆
                $m->collected = CarCollection::isCollected($user->id);
            });
            // 记录搜索记录
//            if ($res[]) {
//                //
//            }
            DB::commit();
            return self::success($res);
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }
}