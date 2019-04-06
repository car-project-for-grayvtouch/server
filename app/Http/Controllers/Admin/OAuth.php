<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/21
 * Time: 16:39
 */

namespace App\Http\Controllers\Admin;

use App\Customize\Admin\Http\Action\OAuthAction;

use function Admin\success;
use function Admin\error;

class OAuth extends Controller
{
    // 更新 token
    public function refreshToken()
    {
        $param = request()->post();
        $param['refresh_token'] = $param['refresh_token'] ?? '';

        $res = OAuthAction::refreshToken($param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}