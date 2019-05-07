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

use function PcApi\error;
use function PcApi\config;
use function PcApi\user;

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
        $datetime = date('Y-m-d H:i:s' , time());
        if ($datetime > user()->token_expire) {
            return false;
        }
        return true;
    }
}