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
use App\Customize\PcApi\Model\CarConfiguration;
use App\Customize\PcApi\Model\CollectionForCar;
use App\Customize\PcApi\Model\RecommendationApplication;
use App\Customize\PcApi\Model\Reservation;
use App\Customize\PcApi\Model\SaleApplication;
use App\Customize\PcApi\Model\SearchLog;
use App\Customize\PcApi\Model\StagingBuyApplication;
use App\Customize\Util\VerifyCode;
use Exception;
use function extra\array_unit;
use function extra\check_num_len;
use function extra\check_phone;
use function extra\check_price;
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
}