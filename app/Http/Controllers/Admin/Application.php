<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;


use App\Customize\Admin\Http\Action\ApplicationAction;
use Illuminate\Validation\Validator;


use function Admin\success;
use function Admin\error;
use function Admin\form_error;

class Application extends Controller
{
    // 卖车申请
    public function saleApplication()
    {
        $param = $this->request->query();
        $param['id']        = $param['id'] ?? '';
        $param['user_id']   = $param['user_id'] ?? '';
        $param['phone']     = $param['phone'] ?? '';
        $param['order']     = $param['order'] ?? 'id|desc';
        $res = ApplicationAction::saleApplication($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}