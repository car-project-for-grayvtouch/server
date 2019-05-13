<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:04
 */

namespace App\Customize\Mobile\Http\Action;

class Action
{
    public static function success($data = '' , $code = 200)
    {
        return compact('data' , 'code');
    }

    public static function error($data = '' , $code = 400)
    {
        return compact('data' , 'code');
    }
}