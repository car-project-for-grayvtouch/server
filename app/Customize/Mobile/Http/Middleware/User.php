<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/7
 * Time: 14:32
 */

namespace App\Customize\Mobile\Http\Middleware;

use App\Customize\Mobile\Model\UserToken;
use App\Customize\Mobile\Model\User as UserModel;
use Closure;

class User
{
    public function handle($request , Closure $next)
    {
        $this->user($request);
        return $next($request);
    }

    public function user($q)
    {
        $authorization = $q->header('Authorization');
        if (empty($authorization)) {
            return ;
        }
        $token = UserToken::findByToken($authorization);
        if (empty($token)) {
            return ;
        }
        // 获取用户信息
        $user = UserModel::findById($token->user_id);
        if (empty($user)) {
            return;
        }
        $user->token = $token;
        app()->instance('user' , $user);
    }
}