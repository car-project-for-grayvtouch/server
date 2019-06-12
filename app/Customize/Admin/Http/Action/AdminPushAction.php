<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:16
 */

namespace App\Customize\Admin\Http\Action;

use function Admin\get_form_error;
use function Admin\user;
use App\Customize\Admin\Model\AdminPush;
use function extra\array_unit;
use Validator;

use function Admin\config;

class AdminPushAction extends Action
{
    public static function list(array $param)
    {
        $param['admin_push_id'] = empty($param['admin_push_id']) ? 0 : $param['admin_push_id'];
//        $limit = config('app.limit');
        $limit = 30;
        $res = AdminPush::list($param['admin_push_id'] , user()->id , $limit);
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'type' => 'required' ,
            'data' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }

        $param['user_id'] = user()->id;
        $id = AdminPush::insertGetId(array_unit($param , [
            'user_id' ,
            'type' ,
            'data' ,
        ]));
        return self::success($id);
    }
}