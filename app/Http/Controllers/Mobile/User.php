<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:07
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\UserAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;

class User extends Auth
{
    // 用户信息
    public function info()
    {
        $param = $this->request->post();
        $param['language'] = $param['language'] ?? null;
        $res = UserAction::info($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 修改用户信息
    public function edit()
    {
        $param = $this->request->post();
        $param['nickname'] = $param['nickname'] ?? '';
        $param['sex'] = $param['sex'] ?? '';
        $param['birthday'] = $param['birthday'] ?? null;
        $param['area_code'] = $param['area_code'] ?? '';
        $res = UserAction::edit($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 设置密码
    public function updatePassword()
    {
        $param = $this->request->post();
        $param['o_password'] = $param['o_password'] ?? '';
        $param['password'] = $param['password'] ?? '';
        $param['confirm_password'] = $param['confirm_password'] ?? '';
        $res = UserAction::updatePassword($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 设置头像
    public function image()
    {
        $param = $this->request->post();
        $param['image'] = $param['image'] ?? '';
        $res = UserAction::image($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}