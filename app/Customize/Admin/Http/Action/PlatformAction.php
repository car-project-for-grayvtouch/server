<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:16
 */

namespace App\Customize\Admin\Http\Action;

use App\Customize\Admin\Model\Platform;

use Validator;
use DB;
use Exception;

class PlatformAction extends Action
{
    public static function all()
    {
        $res = Platform::getAll();
        return self::success($res);
    }
}