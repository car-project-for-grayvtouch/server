<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:07
 */

namespace App\Customize\PcApi\Http\Action;


use App\Customize\PcApi\Model\Brand;
use App\Customize\PcApi\Util\YouDaoTranslation;

class BrandAction extends Action
{
    public static function all(array $param)
    {
        $res = Brand::getAll($param['language']);
        return self::success($res);
    }
}