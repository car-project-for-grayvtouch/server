<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 10:37
 */

namespace App\Customize\PcApi\Http\Action;

use App\Customize\PcApi\Model\CarSeries;
use App\Customize\PcApi\Util\YouDaoTranslation;
use function core\convert_obj;
use Exception;
use Validator;
use DB;

use function PcApi\config;

class CarSeriesAction extends Action
{
    // 车辆列表
    public static function all(array $param)
    {
        $res = CarSeries::getAll($param['brand_id'] , $param['language']);
        return self::success($res);
    }
}