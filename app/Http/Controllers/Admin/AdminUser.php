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

use App\Customize\Admin\Http\Action\AdminUserAction;
use Illuminate\Validation\Validator;


class AdminUser extends Controller
{
    // 登录
    public function login()
    {
        $param = $this->request->post();
        $param['username'] = $param['username'] ?? '';
        $param['password'] = $param['password'] ?? '';
        $param['verify_code'] = $param['verify_code'] ?? '';
        $res = AdminUserAction::login($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 退出登录
    public function logout()
    {
        $res = AdminUserAction::logout();
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 获取登录用户所需要的相关信息
    public function info()
    {
        $res = AdminUserAction::info();
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 获取登录用户所需要的相关信息
    public function list()
    {
        $param = $this->request->query();
        $param['id']        = $param['id'] ?? '';
        $param['username']  = $param['username'] ?? '';
        $param['sex']       = $param['sex'] ?? '';
        $param['order']     = $param['order'] ?? 'id|desc';
        $res = AdminUserAction::list($param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 获取登录用户所需要的相关信息
    public function detail($id)
    {
        $res = AdminUserAction::detail($id);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id']        = $param['id'] ?? '';
        $param['username']  = $param['username'] ?? '';
        $param['password']  = $param['password'] ?? '';
        $param['phone']     = $param['phone'] ?? '';
        $param['role_id']     = $param['role_id'] ?? '';
        $res = AdminUserAction::edit($param);
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
        $param['username']  = $param['username'] ?? '';
        $param['password']  = $param['password'] ?? '';
        $param['phone']     = $param['phone'] ?? '';
        $param['role_id']     = $param['role_id'] ?? '';
        $res = AdminUserAction::add($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function avatar()
    {
        $param = $this->request->post();
        $param['id']  = $param['id'] ?? '';
        $param['image']  = $param['image'] ?? '';
        $res = AdminUserAction::avatar($param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}