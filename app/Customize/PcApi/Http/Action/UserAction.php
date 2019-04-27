<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 22:39
 */

namespace App\Customize\PcApi\Http\Action;


use function PcApi\user;

class UserAction extends Action
{
    public static function info()
    {
        return self::success(user());
    }
}