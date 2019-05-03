<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/3
 * Time: 19:10
 */

namespace App\Http\Controllers\PcApi;


use App\Customize\PcApi\Http\Action\StoryAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class Story extends Controller
{
    // 优质
    public function listForHome()
    {
        $res = StoryAction::listForHome();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}