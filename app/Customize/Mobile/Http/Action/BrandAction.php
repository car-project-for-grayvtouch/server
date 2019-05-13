<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:07
 */

namespace App\Customize\Mobile\Http\Action;


use App\Customize\Mobile\Model\Brand;
use App\Customize\Mobile\Util\YouDaoTranslation;

class BrandAction extends Action
{
    public static function all(array $param)
    {
        $res = Brand::getAll($param['language']);
        return self::success($res);
    }
}