<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:17
 */

namespace App\Http\Controllers\Mobile;

use App\Customize\Mobile\Http\Action\CarAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;
use function Mobile\config;


class Car extends Controller
{
    // 首页-车辆推荐
    public function listForHome()
    {
        $param = $this->request->post();
        // affordable-经济实惠；new-准新车；luxury-豪华车 newAndHot
        // 默认：最新最热
        $param['type'] = $param['type'] ?? 'newAndHot';
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = CarAction::listForHome($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 首页-车辆精选评论
    public function featuredComment()
    {
        $param = $this->request->post();
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = CarAction::featuredComment($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 首页-车辆列表
    public function list()
    {
        $param                  = $this->request->post();
        $param['sale_point']      = $param['sale_point'] ?? '';
        $param['keyword']      = $param['keyword'] ?? '';
        $param['brand_id']      = $param['brand_id'] ?? '';
        $param['car_series_id'] = $param['car_series_id'] ?? '';
        $param['car_type_id']   = $param['car_type_id'] ?? '';
        $param['price']         = $param['price'] ?? '';
        $param['mileage']       = $param['mileage'] ?? '';
        $param['age']           = $param['age'] ?? '';
        $param['gearbox']       = $param['gearbox'] ?? '';
        $param['color']         = $param['color'] ?? '';
        $param['sort']          = $param['sort'] ?? '';
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = CarAction::list($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function detail()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['language'] = $param['language'] ?? null;
        $res = CarAction::detail($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 用户累计向我们平台提交的推荐车辆的申请数
    public function countForRecommendationApplication()
    {
        $res = CarAction::countForRecommendationApplication();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 用户累计向我们平台提交的预约看车的申请数
    public function reservationCountForDay()
    {
        $param = $this->request->post();
        $param['day'] = $param['day'] ?? '';
        $res = CarAction::reservationCountForDay($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 增加车辆的浏览次数
    public function incrementViewCount()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $res = CarAction::incrementViewCount($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 猜你喜欢（推荐车辆）
    public function recommendation()
    {
        $param = $this->request->post();
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = CarAction::recommendation($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}