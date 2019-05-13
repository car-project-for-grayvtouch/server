<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:06
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\BrandAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;

class Brand extends Controller
{
    // 品牌列表
    public function all()
    {
        $param = $this->request->post();
        $param['language'] = $param['language'] ?? 'cn';
        $res = BrandAction::all($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}