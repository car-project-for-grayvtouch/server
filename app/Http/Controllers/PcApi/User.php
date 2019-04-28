<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 18:07
 */

namespace App\Http\Controllers\PcApi;


use App\Customize\PcApi\Http\Action\UserAction;
use Illuminate\Validation\Validator;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class User extends Auth
{
    // 1. 用户信息
    public function info()
    {
        $res = UserAction::info();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 2. 已经购买的车辆列表
//    public function

    // 3. 针对已经购买的车辆进行评论

    // 4. 卖车申请
    public function test()
    {
        $res = UserAction::info();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
    // 5. huma值购（求平台推荐车辆）
    // 6. 分期购车申请
    // 7. 收藏的车辆
}