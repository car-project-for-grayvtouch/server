<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/21
 * Time: 9:45
 */

namespace App\Http\Controllers\Mobile;

use App\Customize\Mobile\Http\Middleware\Customize;
use App\Customize\Mobile\Http\Middleware\Throwable;
use App\Customize\Mobile\Http\Middleware\Loader;
use App\Customize\Mobile\Http\Middleware\User;

use App\Http\Controllers\Controller as BaseController;

use Illuminate\Http\Request;

use ReflectionClass;

class Controller extends BaseController
{
    protected $request = null;

    public function __construct(Request $request)
    {
        $this->request = $request;
        // 检查父类是否有构造函数
        // 如果存在则调用
        $parent = new ReflectionClass(parent::class);
        if ($parent->hasMethod('__construct')) {
            parent::__construct();
        }
        // 在这边做一些模块内共享的事情
        $this->middleware(Customize::class);
        $this->middleware(Throwable::class);
        $this->middleware(Loader::class);
        $this->middleware(User::class);
    }
}