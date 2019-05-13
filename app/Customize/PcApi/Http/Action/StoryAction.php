<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/3
 * Time: 19:09
 */

namespace App\Customize\PcApi\Http\Action;


use App\Customize\PcApi\Model\Story;

class StoryAction extends Action
{
    public static function listForHome(array $param)
    {
        $res = Story::listForHome($param['limit']);
        return self::success($res);
    }
}