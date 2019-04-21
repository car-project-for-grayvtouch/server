<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:07
 */

namespace App\Customize\PcApi\Http\Action;


use App\Customize\PcApi\Model\SearchLog;

class SearchLogAction extends Action
{
    public static function hot()
    {
        $res = SearchLog::hot(10);
        return self::success($res);
    }
}