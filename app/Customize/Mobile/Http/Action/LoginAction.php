<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 13:54
 */

namespace App\Customize\Mobile\Http\Action;

use App\Customize\Mobile\Model\User;
use App\Customize\Mobile\Model\UserToken;
use App\Customize\Mobile\Util\OAuth;
use function core\ssl_random;
use function extra\array_unit;
use Validator;
use DB;
use Exception;
use Hash;
use function Mobile\config;

class LoginAction extends Action
{

    public static function login(array $param)
    {
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
            'remember' => 'required' ,
        ] , [
            'username.required' => '必须' ,
            'password.required' => '必须' ,
            'remember.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $user = User::findByUsername($param['username']);
        if (empty($user)) {
            return self::error([
                'username' => '用户名错误' ,
            ]);
        }
        if (!Hash::check($param['password'] , $user->password)) {
            return self::error([
                'password' => '密码错误' ,
            ]);
        }
        // 是否记住密码
        $param['remember'] = in_array($param['remember'] , ['n' , 'y']) ? $param['remember'] : 'n';
        $time = time();
        $expire = $param['remember'] == 'y' ? $time + config('app.long_for_login') : $time + config('app.short_for_login');
        $expire = date('Y-m-d H:i:s' , $expire);
        $token  = ssl_random(64);
        $last_ip = $_SERVER['REMOTE_ADDR'];
        try {
            DB::beginTransaction();
            $m = User::findByUsername($param['username']);
            // 更新用户登录记录
            User::updateById($m->id , [
                'last_ip'   => $last_ip ,
                'last_time' => date('Y-m-d H:i:s' , time())
            ]);
            // 写入 token
            UserToken::insert([
                'token'                 => $token ,
                'token_expire'          => $expire ,
                'user_id'               => $m->id
            ]);
            DB::commit();
            return self::success($token);
        } catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public static function register(array $param)
    {
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
        ] , [
            'username.required' => '必须' ,
            'password.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $regexp_for_username = config('regexp.username');
        $regexp_for_password = config('regexp.password');
        if (!preg_match($regexp_for_username['value'] , $param['username'])) {
            return self::error([
                'username' => $regexp_for_username['desc']
            ]);
        }
        if (!preg_match($regexp_for_password['value'] , $param['password'])) {
            return self::error([
                'password' => $regexp_for_password['desc']
            ]);
        }
        // 检查用户名是否已经被注册
        $user = User::findByUsername($param['username']);
        if (!empty($user)) {
            return self::error([
                'username' => '用户名已经存在' ,
            ]);
        }
        $password = Hash::make($param['password']);
        $id = User::insertGetId([
            'username' => $param['username'] ,
            'password' => $password
        ]);
        return self::success($id);
    }
}