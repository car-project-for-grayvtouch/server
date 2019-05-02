<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 16:12
 */

namespace App\Customize\Admin\Http\Action;

use function Admin\config;
use function Admin\parse_order;
use App\Customize\Admin\Model\StagingBuyApplication;

use function extra\array_unit;
use Validator;

class StagingBuyApplicationAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = StagingBuyApplication::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    public static function updateStatus(array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
            'status' => 'required' ,
        ] , [
            'id_list.required' => 'id_list 尚未提供' ,
            'status.required' => 'status 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('id_list 尚未提供');
        }
        if (!in_array($param['status'] , config('business.staging_buy_application_status_range'))) {
            return self::error('不支持的状态值');
        }
        $res = StagingBuyApplication::updateByIds($id_list , array_unit($param , [
            'status'
        ]));
        return self::success($res);
    }

}