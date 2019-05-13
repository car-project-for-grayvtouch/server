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
    public static function hot(array $param)
    {
        $res = SearchLog::hot($param['limit']);
        return self::success($res);
    }
}