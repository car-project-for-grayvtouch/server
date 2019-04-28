<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:07
 */

namespace App\Http\Controllers\PcApi;


use App\Customize\PcApi\Http\Action\UserAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class User extends Auth
{
    // 1. 用户信息
    public function info()
    {
        $res = UserAction::info();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}