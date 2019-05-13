<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/17
 * Time: 0:19
 */

namespace App\Customize\Mobile\Http\Middleware;

use Closure;

class Customize
{
    public function handle($request , Closure $next)
    {
        // 加载自定义部分
        require_once __DIR__ . '/../../Extra/app.php';
        return $next($request);
    }
}