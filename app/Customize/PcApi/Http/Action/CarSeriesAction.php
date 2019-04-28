<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:37
 */

namespace App\Customize\PcApi\Http\Action;

use App\Customize\PcApi\Model\CarSeries;
use Exception;
use function PcApi\get_form_error;
use Validator;
use DB;

use function PcApi\config;

class CarSeriesAction extends Action
{
    // 车辆列表
    public static function all(array $param)
    {
        $res = CarSeries::getAll($param['brand_id']);
        return self::success($res);
    }
}