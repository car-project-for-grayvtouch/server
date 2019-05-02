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

use App\Customize\Admin\Http\Action\UserAction;
use Illuminate\Validation\Validator;


class User extends Controller
{
    // 获取登录用户所需要的相关信息
    public function list()
    {
        $param = $this->request->query();
        $param['id']        = $param['id'] ?? '';
        $param['username']  = $param['username'] ?? '';
        $param['order']     = $param['order'] ?? 'id|desc';
        $res = UserAction::list($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}