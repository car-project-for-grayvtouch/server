<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:08
 */

namespace App\Http\Controllers\Mobile;

use App\Customize\Mobile\Http\Action\ShowImageAction;
use Illuminate\Validation\Validator;

use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;

class ShowImage extends Controller
{
    public function home()
    {
        $res = ShowImageAction::home();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}