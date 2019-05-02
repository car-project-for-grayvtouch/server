<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:16
 */

namespace App\Customize\Admin\Http\Action;

use App\Customize\Admin\Model\User;
use Validator;
use DB;
use Hash;
use Exception;

use function Admin\parse_order;

class UserAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = User::list($param , $order , config('app.limit'));
        return self::success($res);
    }
}