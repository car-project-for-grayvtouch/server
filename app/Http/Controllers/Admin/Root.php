<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 14:09
 */

namespace App\Http\Controllers\Admin;


use App\Customize\Admin\Util\RTC;
use Validator;
use DB;
use Hash;


use App\Customize\Admin\Model\AdminUser;

use function Admin\form_error;
use function Admin\error;
use function Admin\success;
use function extra\array_unit;

use App\Customize\Admin\Http\Middleware\Customize;
use App\Customize\Admin\Http\Middleware\Throwable;
use App\Customize\Admin\Http\Middleware\Loader;

/**
 * ******************************
 * 错误排查这一块
 * ******************************
 */

class Root extends Controller
{
    function __construct()
    {
        // 在这边做一些模块内共享的事情
        $this->middleware(Customize::class);
        $this->middleware(Throwable::class);
        $this->middleware(Loader::class);
    }

    // 新增用户
    public function add()
    {
        $param = request()->input();
        $param['username'] = $param['username'] ?? '';
        $param['password'] = $param['password'] ?? '';
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
        ] , [
            'username.required' => '用户名尚未提供' ,
            'password.required' => '密码尚未提供' ,
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        // 检查用户是否存在
        $exists = AdminUser::existsByUsername($param['username']);
        if ($exists) {
            return error('该用户名已经被使用！');
        }
        $param['password'] = Hash::make($param['password']);
        $res = AdminUser::insertGetId(array_unit($param , [
            'username' ,
            'password'
        ]));
        return success('新增用户成功：' . $res);
    }

    // 修改密码
    public function password()
    {
        $param = $this->request->post();
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
        ] , [
            'username.required' => '用户名尚未提供' ,
            'password.required' => '密码尚未提供' ,
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $exists = AdminUser::existsByUsername($param['username']);
        if (!$exists) {
            return error('用户不存在');
        }
        $param['old_password']  = $param['password'];
        $param['password']      = Hash::make($param['password']);
        AdminUser::updateByUsername($param['username'] , array_unit($param , [
            'password'
        ]));
        return success($param['old_password']);
    }

    public function test()
    {
        $res = RTC::register('abc' , 'fuck' , 'ri');
        var_dump($res);
        print_r($res);
    }
}