<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 14:27
 */

namespace App\Http\Controllers\PcApi;


use App\Customize\PcApi\Http\Action\SaleAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class Sale extends Auth
{
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
        $res = SaleAction::saleApplication($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}