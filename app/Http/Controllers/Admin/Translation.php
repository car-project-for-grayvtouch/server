<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/8
 * Time: 16:45
 */

namespace App\Http\Controllers\Admin;


use function Admin\error;
use function Admin\form_error;
use function Admin\success;
use App\Customize\Admin\Http\Action\TranslationAction;
use Illuminate\Validation\Validator;

class Translation extends Controller
{
    public function translate()
    {
        $res = TranslationAction::translate();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}