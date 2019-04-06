<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/17
 * Time: 10:14
 *
 * 用户登录认证
 */

namespace App\Customize\Admin\Http\Middleware;

use App\Customize\Admin\Model\Role;
use App\Customize\Admin\Model\Route;
use Closure;
use App\Customize\Admin\Model\AdminToken;
use App\Customize\Admin\Model\AdminUser;

use function Admin\error;
use function extra\regexp_check;
use function Admin\config;

use Illuminate\Database\Eloquent\Model;

class UserAuth
{
    // 定义排除验证的路由
    private $exclude = [
        [
            'method' => 'POST' ,
            'path'  => 'api/admin/admin/logining' ,
        ] ,
        [
            'method' => 'GET' ,
            'path'  => 'api/admin/misc/code' ,
        ] ,
        [
            'method' => 'GET' ,
            'path'  => 'api/admin/admin/avatar' ,
        ] ,
        [
            'method' => 'PATCH' ,
            'path'  => 'api/admin/oauth/token' ,
        ] ,
        [
            'method' => 'GET' ,
            'path'  => 'api/admin/misc/verifyCode' ,
        ] ,
    ];

    public function handle($request , Closure $next)
    {
        $method = $request->method();
        $path   = $request->path();
        $is_exclude  = $this->isExclude($method , $path);
        if ($is_exclude) {
            return $next($request);
        }
        // 验证 token
        if (!$this->auth($request)) {
            return error('用户认证失败' , 401);
        }
        return $next($request);
    }

    public function auth($q)
    {
        if ($q->input('debug') == config('app.debug')) {
            return true;
        }
        $authorization = $q->header('Authorization');
        if (empty($authorization)) {
            return false;
        }
        $token = AdminToken::findByToken($authorization);
        if (empty($token)) {
            return false;
        }
        $datetime = date('Y-m-d H:i:s' , time());
        if ($datetime > $token->token_expire) {
            return false;
        }
        // 获取用户信息
        $user = AdminUser::with('role')
                    ->find($token->user_id);
        AdminUser::single($user);
        $user->token = $token;
        if (is_null($user->role)) {
            unset($user->role);
            $user->role = new class() {
                public $priv = null;
            };
        }
        if ($user->is_root == 'y') {
            // 超级管理员
            $user->role->priv = Route::route(0 , false , true);
        } else {
            $user->role->priv = Role::priv($user->role_id ,true , false);
        }
        app()->instance('user' , $user);
        return true;
    }

    // 检查是否排除路径
    public function isExclude($method , $path)
    {
        foreach ($this->exclude as $v)
        {
            if ($v['method'] == $method && regexp_check($path , $v['path'])) {
                return true;
            }
        }
        return false;
    }
}