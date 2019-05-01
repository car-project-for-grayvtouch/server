<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/21
 * Time: 9:44
 */

namespace App\Http\Controllers\Admin;

use function Admin\error;
use function Admin\success;
use function Admin\form_error;

use App\Customize\Admin\Http\Action\PlatformAction;
use Illuminate\Validation\Validator;


class Platform extends Controller
{
    public function all()
    {
        $res = PlatformAction::all();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}