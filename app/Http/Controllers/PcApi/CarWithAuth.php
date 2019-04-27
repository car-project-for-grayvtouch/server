<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 20:23
 */

namespace App\Http\Controllers\PcApi;

use App\Customize\PcApi\Http\Action\CarAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class CarWithAuth extends Auth
{
    public function reservation()
    {
        $param = $this->request->post();
        $param['appointment'] = $param['appointment'] ?? '';
        $param['phone'] = $param['phone'] ?? '';
        $param['weixin'] = $param['weixin'] ?? '';
        $param['verify_code_key'] = $param['verify_code_key'] ?? '';
        $param['verify_code'] = $param['verify_code'] ?? '';
        $res = CarAction::reservation($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function saleApplication()
    {
        $param = $this->request->post();
        $param['address'] = $param['address'] ?? '';
        $param['mileage'] = $param['mileage'] ?? '';
        $param['price'] = $param['price'] ?? '';
        $param['vin'] = $param['vin'] ?? '';
        $param['phone'] = $param['phone'] ?? '';
        $param['weixin'] = $param['weixin'] ?? '';
        $param['color'] = $param['color'] ?? '';
        $param['interior_color'] = $param['interior_color'] ?? '';
        $param['verify_code_key'] = $param['verify_code_key'] ?? '';
        $param['verify_code'] = $param['verify_code'] ?? '';
        $res = CarAction::saleApplication($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function stagingBuyApplication()
    {
        $param = $this->request->post();
        $param['name'] = $param['name'] ?? '';
        $param['profession'] = $param['profession'] ?? '';
        $param['phone'] = $param['phone'] ?? '';
        $param['weixin'] = $param['weixin'] ?? '';
        $param['ssn'] = $param['ssn'] ?? '';
        $param['verify_code_key'] = $param['verify_code_key'] ?? '';
        $param['verify_code'] = $param['verify_code'] ?? '';
        $res = CarAction::stagingBuyApplication($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function recommendationApplication()
    {
        $param = $this->request->post();
        $param['name'] = $param['name'] ?? '';
        $param['price'] = $param['price'] ?? '';
        $param['mileage'] = $param['mileage'] ?? '';
        $param['phone'] = $param['phone'] ?? '';
        $param['weixin'] = $param['weixin'] ?? '';
        $param['remark'] = $param['remark'] ?? '';
        $param['verify_code_key'] = $param['verify_code_key'] ?? '';
        $param['verify_code'] = $param['verify_code'] ?? '';
        $res = CarAction::recommendationApplication($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}