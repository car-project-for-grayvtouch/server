<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:07
 */

namespace App\Customize\PcApi\Http\Action;


use App\Customize\PcApi\Model\Brand;

class BrandAction extends Action
{
    public static function all()
    {
        $res = Brand::getAll();
        return self::success($res);
    }
}