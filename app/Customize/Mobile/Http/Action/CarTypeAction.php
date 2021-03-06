<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 10:42
 */

namespace App\Customize\Mobile\Http\Action;


use App\Customize\Mobile\Model\CarType;
use App\Customize\Mobile\Util\YouDaoTranslation;

class CarTypeAction extends Action
{
    public static function all(array $param)
    {
        $res = CarType::getAll($param['language']);
        return self::success($res);
    }
}