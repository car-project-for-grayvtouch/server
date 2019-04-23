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
}