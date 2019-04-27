<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:17
 */

namespace App\Http\Controllers\PcApi;

use App\Customize\PcApi\Http\Action\CarAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;


class Car extends Controller
{
    // 首页-车辆推荐
    public function listForHome()
    {
        $param = $this->request->post();
        // affordable-经济实惠；new-准新车；luxury-豪华车 newAndHot
        // 默认：最新最热
        $param['type'] = $param['type'] ?? 'newAndHot';
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
        $res = CarAction::featuredComment();
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
}