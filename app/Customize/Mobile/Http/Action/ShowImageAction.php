<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:33
 */

namespace App\Customize\Mobile\Http\Action;

use App\Customize\Mobile\Model\ShowImage;

class ShowImageAction extends Action
{
    public static function home()
    {
        $res = ShowImage::getByPlatformAndPosition(1 , 'home');
        return self::success($res);
    }
}