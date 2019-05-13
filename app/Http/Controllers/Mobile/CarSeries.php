<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/25
 * Time: 17:07
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\CarSeriesAction;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;

class CarSeries extends Controller
{
    // 车系列表
    public function all()
    {
        $param = $this->request->post();
        $param['brand_id'] = $param['brand_id'] ?? '';
        $param['language'] = $param['language'] ?? 'cn';
        $res = CarSeriesAction::all($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}