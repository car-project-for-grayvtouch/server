<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/28
 * Time: 15:55
 */

namespace App\Customize\PcApi\Http\Action;


use function PcApi\get_form_error;
use App\Customize\PcApi\Model\Car;
use App\Customize\PcApi\Model\CollectionForCar;
use App\Customize\PcApi\Model\RecommendationApplication;
use App\Customize\PcApi\Model\Reservation;
use App\Customize\PcApi\Model\SaleApplication;
use App\Customize\PcApi\Model\StagingBuyApplication;
use App\Customize\Util\VerifyCode;
use function extra\array_unit;
use function extra\check_num_len;
use function extra\check_phone;
use function extra\check_price;
use function PcApi\user;
use function PcApi\config;

use Exception;
use DB;
use Validator;

class CarWithAuthAction extends Action
{
// 预约看车
    public static function reservation(array $param)
    {
        $validator = Validator::make($param , [
            'car_id' => 'required' ,
            'phone' => 'required' ,
            'weixin' => 'required' ,
            'appointment' => 'required' ,
            'verify_code_key' => 'required' ,
            'verify_code' => 'required' ,
        ] , [
            'car_id.required' => '必须' ,
            'phone.required' => '必须' ,
            'weixin.required' => '必须' ,
            'appointment.required' => '必须' ,
            'verify_code_key.required' => '必须' ,
            'verify_code.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_phone($param['phone'])) {
            return self::error([
                'phone' => '手机格式错误，请提供诸如 1337508xxxx 或 0597-3544xxx 的值' ,
            ]);
        }
        // 检查验证码是否正确
        if (!VerifyCode::check($param['verify_code'] , $param['verify_code_key'])) {
            return self::error([
                'verify_code' => '验证码错误' ,
            ]);
        }
        // 检查车辆是否存在
        $m = Car::find($param['car_id']);
        if (empty($m)) {
            return self::error('未找到 car_id 对应车辆' , 404);
        }
        $param['user_id'] = user()->id;
        $id = Reservation::insertGetId(array_unit($param , [
            'user_id' ,
            'car_id' ,
            'phone' ,
            'weixin' ,
            'appointment' ,
        ]));
        // todo 通知 swoole 服务器有新的申请产生
        // todo swoole 服务器推送消息给后台，通知工作人员及时处理该申请
        return self::success($id);
    }

    // 卖车申请
    public static function saleApplication(array $param)
    {
        $validator = Validator::make($param , [
            'address' => 'required' ,
            'mileage' => 'required' ,
            'price' => 'required' ,
            'vin' => 'required' ,
            'phone' => 'required' ,
            'weixin' => 'required' ,
            'color' => 'required' ,
            'interior_color' => 'required' ,
            'remark' => 'required' ,
            'verify_code_key' => 'required' ,
            'verify_code' => 'required' ,
        ] , [
            'address.required' => '必须' ,
            'mileage.required' => '必须' ,
            'price.required' => '必须' ,
            'vin.required' => '必须' ,
            'phone.required' => '必须' ,
            'weixin.required' => '必须' ,
            'color.required' => '必须' ,
            'interior_color.required' => '必须' ,
            'remark.required' => '必须' ,
            'verify_code_key.required' => '必须' ,
            'verify_code.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_price($param['price'] , 2)) {
            return self::error([
                'price' => '价格格式错误，请提供数字，最多仅支持 2 位小数点' ,
            ]);
        }
        if (!check_phone($param['phone'])) {
            return self::error([
                'phone' => '手机格式错误，请提供诸如 13375086827 或 0597-3544118 的值' ,
            ]);
        }
        if (!check_num_len($param['vin'] , 17)) {
            return self::error([
                'vin' => 'vin 格式错误，请提供17位纯数字' ,
            ]);
        }
        // 检查验证码是否正确
        if (!VerifyCode::check($param['verify_code'] , $param['verify_code_key'])) {
            return self::error([
                'verify_code' => '验证码错误' ,
            ]);
        }
        $param['user_id'] = user()->id;
        $id = SaleApplication::insertGetId(array_unit($param , [
            'user_id' ,
            'address' ,
            'mileage' ,
            'price' ,
            'vin' ,
            'phone' ,
            'weixin' ,
            'color' ,
            'interior_color' ,
            'remark' ,
        ]));
        // todo 通知 swoole 服务器有新的申请产生
        // todo swoole 服务器推送消息给后台，通知工作人员及时处理该申请
        return self::success($id);
    }

    // 车辆推荐（huma值购）
    public static function RecommendationApplication(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'price' => 'required' ,
            'mileage' => 'required' ,
            'phone' => 'required' ,
            'weixin' => 'required' ,
            'remark' => 'required' ,
            'verify_code_key' => 'required' ,
            'verify_code' => 'required' ,
        ] , [
            'name.required' => '必须' ,
            'price.required' => '必须' ,
            'mileage.required' => '必须' ,
            'phone.required' => '必须' ,
            'weixin.required' => '必须' ,
            'remark.required' => '必须' ,
            'verify_code_key.required' => '必须' ,
            'verify_code.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_phone($param['phone'])) {
            return self::error([
                'phone' => '手机格式错误，请提供诸如 13375086827 或 0597-3544118 的值' ,
            ]);
        }
        // 检查验证码是否正确
        if (!VerifyCode::check($param['verify_code'] , $param['verify_code_key'])) {
            return self::error([
                'verify_code' => '验证码错误' ,
            ]);
        }
        $param['user_id'] = user()->id;
        $id = RecommendationApplication::insertGetId(array_unit($param , [
            'user_id' ,
            'name' ,
            'price' ,
            'mileage' ,
            'phone' ,
            'weixin' ,
            'remark' ,
        ]));
        // todo 通知 swoole 服务器有新的申请产生
        // todo swoole 服务器推送消息给后台，通知工作人员及时处理该申请
        return self::success($id);
    }

    // 分期购车
    public static function StagingBuyApplication(array $param)
    {
        $validator = Validator::make($param , [
            'phone' => 'required' ,
            'weixin' => 'required' ,
            'profession' => 'required' ,
            'ssn' => 'required' ,
            'verify_code_key' => 'required' ,
            'verify_code' => 'required' ,
        ] , [
            'phone.required' => '必须' ,
            'weixin.required' => '必须' ,
            'profession.required' => '必须' ,
            'ssn.required' => '必须' ,
            'verify_code_key.required' => '必须' ,
            'verify_code.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_phone($param['phone'])) {
            return self::error([
                'phone' => '手机格式错误，请提供诸如 1337508xxxx 或 0597-3544xxx 的值' ,
            ]);
        }
        // 检查验证码是否正确
        if (!VerifyCode::check($param['verify_code'] , $param['verify_code_key'])) {
            return self::error([
                'verify_code' => '验证码错误' ,
            ]);
        }
        $bool_range = array_keys(config('business.bool'));
        $profession_range = array_keys(config('business.profession'));
        if (!in_array($param['profession'] , $profession_range)) {
            return self::error([
                'ssn' => '不支持的值，当前受支持的值有 ' . implode(' , ' , $profession_range)
            ]);
        }
        if (!in_array($param['ssn'] , $bool_range)) {
            return self::error([
                'ssn' => '不支持的值，当前受支持的值有 ' . implode(' , ' , $bool_range)
            ]);
        }
        $param['user_id'] = user()->id;
        $id = StagingBuyApplication::insertGetId(array_unit($param , [
            'user_id' ,
            'phone' ,
            'weixin' ,
            'profession' ,
            'ssn' ,
        ]));
        // todo 通知 swoole 服务器有新的申请产生
        // todo swoole 服务器推送消息给后台，通知工作人员及时处理该申请
        return self::success($id);
    }

    // 购车申请列表
    public static function saleApplicationList(array $param)
    {
        $res = SaleApplication::list($param , $param['limit']);
        return self::success($res);
    }

    // 购车申请列表
    public static function recommendationApplicationList(array $param)
    {
        $res = RecommendationApplication::list($param , $param['limit']);
        return self::success($res);
    }

    // 购车申请列表
    public static function stagingBuyApplicationList(array $param)
    {
        $res = StagingBuyApplication::list($param , $param['limit']);
        return self::success($res);
    }

    // 预约看车申请列表
    public static function reservationList(array $param)
    {
        $res = Reservation::list($param , $param['limit']);
        return self::success($res);
    }

    // 收藏的车辆列表
    public static function collectionForCar(array $param)
    {
        $res = Car::collectionForCar(user()->id , $param , $param['limit']);
        return self::success($res);
    }

    public static function collect(array $param)
    {
        $validator = Validator::make($param , [
            'car_id' => 'required' ,
            'collected' => 'required' ,
        ] , [
            'car_id.required' => '必须' ,
            'collected.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $bool_range = array_keys(config('business.bool'));
        if (!in_array($param['collected'] , $bool_range)) {
            return self::error([
                'collected' => '不支持的值，当前支持的值有' . implode(' , ' , $bool_range) ,
            ]);
        }
        $param['user_id'] = user()->id;
        $m = CollectionForCar::findByUserIdAndCarId($param['user_id'] , $param['car_id']);
        if ($param['collected'] == 'y') {
            if (empty($m)) {
                // 收藏
                CollectionForCar::insert(array_unit($param , [
                    'user_id' ,
                    'car_id'
                ]));
            }
        } else {
            if (!empty($m)) {
                // 取消收藏
                CollectionForCar::delByUserIdAndCarId($param['user_id'] , $param['car_id']);
            }
        }
        return self::success();
    }

    public static function setStatusForSaleApplication(array $param)
    {
        $validator = Validator::make($param , [
            'sale_application_id' => 'required' ,
            'status' => 'required' ,
        ] , [
            'sale_application_id.required' => 'sale_application_id 必须' ,
            'status.required' => 'status 必须' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        if (!in_array($param['status'] , config('business.sale_application_support_status'))) {
            return self::error('不支持的 status 值');
        }
        $m = SaleApplication::find($param['sale_application_id']);
        if (empty($m)) {
            return self::error('未找到 sale_application_id 对应记录' , 404);
        }
        if ($m->user_id != user()->id) {
            return self::error('你无法更改他人数据' , 403);
        }
        if (!in_array($m->status , ['wait'])) {
            return self::error('状态已经发生变化，您不能再次操作' , 403);
        }
        SaleApplication::updateById($param['sale_application_id'] , array_unit($param , [
            'status'
        ]));
        return self::success();
    }

    public static function setStatusForRecommendationApplication(array $param)
    {
        $validator = Validator::make($param , [
            'recommendation_application_id' => 'required' ,
            'status' => 'required' ,
        ] , [
            'recommendation_application_id.required' => 'recommendation_application_id 必须' ,
            'status.required' => 'status 必须' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        if (!in_array($param['status'] , config('business.recommendation_application_support_status'))) {
            return self::error('不支持的 status 值');
        }
        $m = RecommendationApplication::find($param['recommendation_application_id']);
        if (empty($m)) {
            return self::error('未找到 recommendation_application_id 对应记录' , 404);
        }
        if ($m->user_id != user()->id) {
            return self::error('你无法更改他人数据' , 403);
        }
        if (!in_array($m->status , ['wait'])) {
            return self::error('状态已经发生变化，您不能再次操作' , 403);
        }
        RecommendationApplication::updateById($param['recommendation_application_id'] , array_unit($param , [
            'status'
        ]));
        return self::success();
    }

    public static function setStatusForStagingBuyApplication(array $param)
    {
        $validator = Validator::make($param , [
            'staging_buy_application_id' => 'required' ,
            'status' => 'required' ,
        ] , [
            'staging_buy_application_id.required' => 'staging_buy_application_id 必须' ,
            'status.required' => 'status 必须' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        if (!in_array($param['status'] , config('business.staging_buy_application_support_status'))) {
            return self::error('不支持的 status 值');
        }
        $m = StagingBuyApplication::find($param['staging_buy_application_id']);
        if (empty($m)) {
            return self::error('未找到 staging_buy_application_id 对应记录' , 404);
        }
        if ($m->user_id != user()->id) {
            return self::error('你无法更改他人数据' , 403);
        }
        if (!in_array($m->status , ['wait'])) {
            return self::error('状态已经发生变化，您不能再次操作' , 403);
        }
        StagingBuyApplication::updateById($param['staging_buy_application_id'] , array_unit($param , [
            'status'
        ]));
        return self::success();
    }

    public static function setStatusForReservation(array $param)
    {
        $validator = Validator::make($param , [
            'reservation_id' => 'required' ,
            'status' => 'required' ,
        ] , [
            'reservation_id.required' => 'reservation_id 必须' ,
            'status.required' => 'status 必须' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        if (!in_array($param['status'] , config('business.reservation_support_status'))) {
            return self::error('不支持的 status 值');
        }
        $m = Reservation::find($param['reservation_id']);
        if (empty($m)) {
            return self::error('未找到 reservation_id 对应记录' , 404);
        }
        if ($m->user_id != user()->id) {
            return self::error('你无法更改他人数据' , 403);
        }
        if (!in_array($m->status , ['wait'])) {
            return self::error('状态已经发生变化，您不能再次操作' , 403);
        }
        Reservation::updateById($param['reservation_id'] , array_unit($param , [
            'status'
        ]));
        return self::success();
    }
}