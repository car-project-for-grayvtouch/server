<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:16
 */

namespace App\Customize\Admin\Http\Action;

use function extra\array_unit;
use function extra\check_phone;
use Validator;
use DB;
use Hash;
use Exception;

use App\Customize\Admin\Model\AdminLandLog;
use App\Customize\Util\VerifyCode;

use App\Customize\Admin\Model\AdminToken;
use App\Customize\Admin\Model\AdminUser;
use App\Customize\Admin\Model\Route;

use App\Customize\Admin\Util\Misc;
use App\Customize\Admin\Util\OAuth;

use function Admin\get_form_error;
use function Admin\parse_order;
use function Admin\user;
use function extra\check_len;

class AdminUserAction extends Action
{
    // 注册
    public static function login(array $param)
    {
        $validator = Validator::make($param , [
            'username'      => 'required' ,
            'password'      => 'required' ,
            'verify_code'   => 'required|between:4,4' ,
        ] , [
            'username.required'     => '用户名尚未提供' ,
            'password.required'     => '密码尚未提供' ,
            'verify_code.required'  => '验证码尚未提供' ,
            'verify_code.between'   => '验证码长度必须是四位' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        // 验证码
        if (!isset($param['verify_code_key'])) {
            return self::error('验证码 key 尚未提供' , 460);
        }
        // 检查验证码是否正确
        if (!VerifyCode::check($param['verify_code'] ?? '' , $param['verify_code_key'] ?? '')) {
            return self::error([
                'verify_code' => '验证码不正确'
            ]);
        }
        $oauth = new OAuth(new AdminUser());
        $res = $oauth->password($param['username'] , $param['password'] , [Hash::class , 'check']);
        if ($res['code'] != 200) {
            return self::error($res['data']);
        }
        $token = $res['data'];
        $last_ip = ip2long($_SERVER['REMOTE_ADDR']);
        try {
            DB::beginTransaction();
            $m = AdminUser::findByUsername($param['username']);
            // 更新用户登录记录
            AdminUser::updateById($m->id , [
                'last_ip'   => $last_ip ,
                'last_time' => date('Y-m-d H:i:s' , time())
            ]);
            // 写入 token
            AdminToken::insert([
                'token'                 => $token->token ,
                'token_expire'          => $token->tokenExpire ,
                'refresh_token'         => $token->refreshToken ,
                'refresh_token_expire'  => $token->refreshTokenExpire ,
                'user_id'               => $m->id
            ]);
            // 记录登录日志
            AdminLandLog::insert([
                'user_id' => $m->id ,
                'last_ip' => $last_ip ,
            ]);
            DB::commit();
            return self::success([
                'token'         => $token->token ,
                'refresh_token' => $token->refreshToken
            ]);
        } catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    // 退出
    public static function logout()
    {
        if (!user()->token->delete()) {
            return self::error('删除失败，请稍后再试');
        }
        return self::success();
    }

    // 信息
    public static function info()
    {
        $res = [];
        // 当前登录用户信息
        $res['user'] = user();
        // 所有：路由信息
        $res['route'] = Route::route();
        // 系统信息
        $res['os'] =  Misc::os();
        return self::success($res);
    }

    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = AdminUser::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    // 详情：编辑
    public static function detail($id)
    {
        $res = AdminUser::findById($id);
        unset($res->password);
        return self::success($res);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'phone'    => 'required' ,
            'role_id'  => 'required' ,
        ] , [
            'username.required' => 'username 尚未提供' ,
            'phone.required' => 'phone 尚未提供' ,
            'role_id.required' => 'role_id 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!isset($param['id']) || empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = AdminUser::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        if (isset($param['password']) && !empty($param['password']) && !check_len($param['password'] , 6 , 'gte')) {
            return self::error([
                'password' => '密码格式错误' ,
            ]);
        }
        if (!check_phone($param['phone'])) {
            return self::error([
                'phone' => '手机格式错误' ,
            ]);
        }
        if (empty($param['role_id'])) {
            return self::error([
                'role_id' => 'role_id 尚未提供' ,
            ]);
        }
        $param['password'] = empty($param['password']) ? $m->password : Hash::make($param['password']);
        AdminUser::updateById($param['id'] , array_unit($param , [
            'username' ,
            'password' ,
            'phone' ,
            'role_id' ,
        ]));
        return self::success($param['id']);
    }


    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
            'phone'    => 'required' ,
            'role_id'  => 'required' ,
        ] , [
            'username.required' => 'username 尚未提供' ,
            'password.required' => 'password 尚未提供' ,
            'phone.required' => 'phone 尚未提供' ,
            'role_id.required' => 'role_id 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_len($param['password'] , 6 , 'gte')) {
            return self::error([
                'password' => '密码格式错误' ,
            ]);
        }
        if (!check_phone($param['phone'])) {
            return self::error([
                'phone' => '手机格式错误' ,
            ]);
        }
        if (empty($param['role_id'])) {
            return self::error([
                'role_id' => 'role_id 尚未提供' ,
            ]);
        }
        $m = AdminUser::findByUsername($param['username']);
        if (!empty($m)) {
            return self::error([
                'username' => '用户名已经存在'
            ]);
        }
        $param['password'] = Hash::make($param['password']);
        $id = AdminUser::insertGetId(array_unit($param , [
            'username' ,
            'password' ,
            'phone' ,
            'role_id' ,
        ]));
        return self::success($id);
    }

    public static function avatar(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'image' => 'required' ,
        ] , [
            'id.required' => 'username 尚未提供' ,
            'image.required' => 'username 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = AdminUser::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $param['avatar'] = $param['image'];
        AdminUser::updateById($param['id'] , array_unit($param , [
            'avatar'
        ]));
        return self::success();
    }
}