<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:07
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\LoginAction;
use Illuminate\Validation\Validator;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;

class Login extends Controller
{
    // 登录
    public function login()
    {
        $param = $this->request->post();

        $param['username'] = $param['username'] ?? '';
        $param['password'] = $param['password'] ?? '';
        $res = LoginAction::login($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);

    }

    // 注册
    public function register()
    {
        $param = $this->request->post();
        $param['username'] = $param['username'] ?? '';
        $param['password'] = $param['password'] ?? '';
        $res = LoginAction::register($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}