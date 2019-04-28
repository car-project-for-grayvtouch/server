<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/28
 * Time: 15:55
 */

namespace App\Customize\PcApi\Http\Action;


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
            'phone' => 'required' ,
            'weixin' => 'required' ,
            'appointment' => 'required' ,
            'verify_code_key' => 'required' ,
            'verify_code' => 'required' ,
        ] , [
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
        $param['user_id'] = user()->id;
        $id = Reservation::insertGetId(array_unit($param , [
            'user_id' ,
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

    // 用户累计向平台申请推荐车辆的总数
    public static function countForRecommendationApplication()
    {
        $res = RecommendationApplication::count();
        return self::success($res);
    }

    // 某个日期下面的各个时间点的预约时间
    public static function reservationCountForDay(array $param)
    {
        $validator = Validator::make($param , [
            'day' => 'required' ,
        ] , [
            'day.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $res = Reservation::countForDay($param['day']);
        return self::success($res);
    }

    // 购车申请列表
    public static function saleApplicationList(array $param)
    {
        $res = SaleApplication::list($param , config('app.limit'));
        return self::success($res);
    }

    // 购车申请列表
    public static function recommendationApplicationList(array $param)
    {
        $res = RecommendationApplication::list($param , config('app.limit'));
        return self::success($res);
    }

    // 购车申请列表
    public static function stagingBuyApplicationList(array $param)
    {
        $res = StagingBuyApplication::list($param , config('app.limit'));
        return self::success($res);
    }

    // 收藏的车辆列表
    public static function collectionForCar(array $param)
    {
        $res = Car::collectionForCar(user()->id , $param , config('app.limit'));
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
}