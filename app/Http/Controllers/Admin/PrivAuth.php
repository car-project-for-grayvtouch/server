<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 21:33
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Customize\Admin\Http\Middleware\PrivAuth as PrivAuthMiddleware;

class PrivAuth extends UserAuth
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->middleware(PrivAuthMiddleware::class);
    }
}