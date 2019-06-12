<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/6/7
 * Time: 20:24
 */

namespace App\Http\Controllers\Admin;



use function Admin\error;
use function Admin\form_error;
use function Admin\success;
use App\Customize\Admin\Http\Action\AdminPushAction;
use Illuminate\Validation\Validator;

class AdminPush extends Controller
{
    public function list()
    {
        $param = $this->request->post();
        $param['admin_push_id'] = $param['admin_push_id'] ?? '';
        $res = AdminPushAction::list($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function add()
    {
        $param = $this->request->post();
        $param['type'] = $param['type'] ?? '';
        $param['data'] = $param['data'] ?? '';
        $res = AdminPushAction::add($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}