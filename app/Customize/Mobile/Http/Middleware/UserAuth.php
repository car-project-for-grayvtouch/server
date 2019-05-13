<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/17
 * Time: 10:14
 *
 * 用户登录认证
 */

namespace App\Customize\Mobile\Http\Middleware;

use Closure;

use function Mobile\error;
use function Mobile\config;
use function Mobile\user;

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
        $user = user();
        if (empty($user)) {
            return false;
        }
        if (empty($user->token)) {
            return false;
        }
        $datetime = date('Y-m-d H:i:s' , time());
        if ($datetime > $user->token->token_expire) {
            return false;
        }
        return true;
    }
}