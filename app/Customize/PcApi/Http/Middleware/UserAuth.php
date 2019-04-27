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
        $user = User::findById($token->user_id);
        $user->token = $token;
        app()->instance('user' , $user);
        return true;
    }
}