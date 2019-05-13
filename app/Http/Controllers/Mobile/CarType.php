<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 10:41
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\CarTypeAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;

use function Mobile\config;

class CarType extends Controller
{
    public function all()
    {
        $param = $this->request->post();
        $param['language'] = $param['language'] ?? null;
        $res = CarTypeAction::all($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}