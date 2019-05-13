<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/3
 * Time: 19:10
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\StoryAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;
use function Mobile\config;

class Story extends Controller
{
    // 优质
    public function listForHome()
    {
        $param = $this->request->post();
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = StoryAction::listForHome($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}