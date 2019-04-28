<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/28
 * Time: 13:55
 */

namespace App\Http\Controllers\PcApi;

use App\Customize\PcApi\Http\Action\OrderAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class Order extends Auth
{
    // 订单列表
    public function list()
    {
        $param = $this->request->post();
        $res = OrderAction::list($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 针对订单做评价-首次
    public function commentForMain()
    {
        $param = $this->request->post();
        $param['product_id']    = $param['product_id'] ?? '';
        $param['content']       = $param['content'] ?? '';
        $param['product_score'] = $param['product_score'] ?? '';
        $param['image']         = $param['image'] ?? '';
        $res = OrderAction::commentForMain($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 针对订单做评价-追评
    public function commentForAppend()
    {

    }

}