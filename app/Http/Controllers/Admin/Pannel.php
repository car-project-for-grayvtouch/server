<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/2
 * Time: 23:17
 */

namespace App\Http\Controllers\Admin;


use function Admin\error;
use function Admin\form_error;
use function Admin\success;
use App\Customize\Admin\Http\Action\PannelAction;
use Illuminate\Validation\Validator;

class Pannel extends Controller
{
    public function info()
    {
        $res = PannelAction::info();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function month()
    {
        $param = request()->query();
        $param['year'] = $param['year'] ?? '';
        $param['month'] = $param['month'] ?? '';
        $res = PannelAction::month($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function quarter()
    {
        $param = request()->query();
        $param['year'] = $param['year'] ?? '';
        $param['quarter'] = $param['quarter'] ?? '';
        $res = PannelAction::quarter($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function year()
    {
        $param = request()->query();
        $param['year'] = $param['year'] ?? '';
        $res = PannelAction::year($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}