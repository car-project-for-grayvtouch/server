<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/30
 * Time: 14:08
 */

namespace App\Http\Middleware;

use Closure;

class Cors
{
    private $header = [
        'Access-Control-Allow-Origin'       => '*' ,
        'Access-Control-Allow-Methods'      => 'GET,POST,PUT,PATCH,DELETE' ,
        'Access-Control-Allow-Credentials'  => 'false' ,
        'Access-Control-Allow-Headers'      => 'Authorization,Content-Type,X-Request-With,Ajax-Request' ,
    ];

    public function handle($request , Closure $next)
    {
        // 允许跨域
        $this->crossDomain();
        // OPTIONS 预检请求
        if ($request->isMethod('OPTIONS')) {
            return response('');
        }
        return $next($request);
    }

    // 支持跨域
    private function crossDomain()
    {
        foreach ($this->header as $k => $v)
        {
            header(sprintf('%s: %s' , $k , $v));
        }
    }
}