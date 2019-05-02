<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 21:55
 */

namespace App\Http\Controllers\Admin;


use App\Customize\Admin\Http\Action\StagingBuyApplicationAction;
use Illuminate\Validation\Validator;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

class StagingBuyApplication extends Controller
{
    public function list()
    {
        $param = $this->request->query();
        $param['id']        = $param['id'] ?? '';
        $param['user_id']   = $param['user_id'] ?? '';
        $param['phone']     = $param['phone'] ?? '';
        $param['order']     = $param['order'] ?? 'id|desc';
        $res = StagingBuyApplicationAction::list($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function updateStatus()
    {
        $param = $this->request->post();
        $param['id_list']        = $param['id_list'] ?? '';
        $param['status']   = $param['status'] ?? '';
        $res = StagingBuyApplicationAction::updateStatus($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}