<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 22:39
 */

namespace App\Customize\PcApi\Http\Action;


use App\Customize\PcApi\Model\User;
use function PcApi\user;

class UserAction extends Action
{
    public static function info(array $param)
    {
        $res = User::findById(user()->id , $param['language']);
        return self::success($res);
    }
}