<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/17
 * Time: 10:14
 *
 * 用户登录认证
 */

namespace App\Customize\PcApi\Http\Middleware;

use Closure;
use App\Customize\PcApi\Model\UserToken;
use App\Customize\PcApi\Model\User;

use function PcApi\error;
use function extra\regexp_check;
use function PcApi\config;

class UserAuth
{

    public function handle($request , Closure $next)
    {
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
        $token = UserToken::findByToken($authorization);
        if (empty($token)) {
            return false;
        }
        $datetime = date('Y-m-d H:i:s' , time());
        if ($datetime > $token->token_expire) {
            return false;
        }
        // 获取用户信息
        $user = User::with('role')
                    ->find($token->user_id);
        User::single($user);
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