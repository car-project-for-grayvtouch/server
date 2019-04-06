<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/21
 * Time: 10:15
 */

namespace App\Customize\Admin\Http\Middleware;

use Closure;

class Loader
{
    public function handle($request , Closure $next)
    {
        $this->loadClass();
        $this->loadFile();
        return $next($request);
    }

    // 注册自定义类自动加载
    public function loadClass()
    {

    }

    // 注册文件加载
    public function loadFile()
    {
        require_once(__DIR__ . '/../../Common/currency.php');
    }
}