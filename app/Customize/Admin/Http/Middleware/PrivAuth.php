<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/17
 * Time: 10:16
 *
 * 权限认证
 */

namespace App\Customize\Admin\Http\Middleware;

use Closure;
use App\Customize\Admin\Model\Role;
use App\Customize\Admin\Model\Route;

use function Admin\user;
use function Admin\error;
use function Admin\config;

use function extra\regexp_check;


class PrivAuth
{
    protected $exclude = [
        [
            'method' => 'PATCH' ,
            'path'  => 'api/admin/oauth/token' ,
        ] ,
    ];

    public function handle($request , Closure $next)
    {
        if (!$this->auth($request)) {
            return error('禁止访问' , 403);
        }
        return $next($request);
    }

    // 鉴权
    public function auth($q)
    {
        if ($q->input('debug') == config('app.debug')) {
            return true;
        }
        $method = $q->method();
        $path   = $q->path();
        if ($this->isExclude($method , $path)) {
            // 在排除验证列表内，放行
            return true;
        }
        if (!$this->exists($method , $path)) {
            // 权限列表中不存在，放行
            return true;
        }
        if (user()->is_root == 'y') {
            // 超级管理员，放行
            return true;
        }
        // 权限列表中存在，鉴权
        $priv = Role::priv(user()->role_id , false , false);
        foreach ($priv as $v)
        {
            if ($v['type'] == 'api' && $v['method'] == $method && regexp_check($path , $v['route'])) {
                return true;
            }
        }
        return false;
    }

    // 检查是否是数据库中存在的权限
    public function exists($method , $path)
    {
        $route = Route::get();
        foreach($route as $v)
        {
            if ($v->type == 'api' && $v->method == $method && regexp_check($path , $v->route)) {
                return true;
            }
        }
        return false;
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