<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 16:12
 */

namespace App\Customize\Admin\Http\Action;


use function Admin\parse_order;
use App\Customize\Admin\Model\SaleApplication;


class ApplicationAction extends Action
{
    // 卖车申请
    public static function saleApplication(array $param)
    {
        $order = parse_order($param['order']);
        $res = SaleApplication::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    // 卖车申请
    public static function Application(array $param)
    {
        $order = parse_order($param['order']);
        $res = SaleApplication::list($param , $order , config('app.limit'));
        return self::success($res);
    }


}