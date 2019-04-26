<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 10:42
 */

namespace App\Customize\PcApi\Http\Action;


use App\Customize\PcApi\Model\CarType;

class CarTypeAction extends Action
{
    public static function all()
    {
        $res = CarType::getAll();
        return self::success($res);
    }
}