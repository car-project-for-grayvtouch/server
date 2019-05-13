<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:06
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\SearchLogAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;
use function Mobile\config;

class SearchLog extends Controller
{
    // 品牌列表
    public function hot()
    {
        $param = $this->request->post();
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = SearchLogAction::hot($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}