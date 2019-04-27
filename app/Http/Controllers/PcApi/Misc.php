<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/24
 * Time: 10:06
 */

namespace App\Http\Controllers\PcApi;

use function PcApi\success;

use App\Customize\Util\VerifyCode;

class Misc extends Controller
{
    // 验证码
    public function verifyCode()
    {
        return success(VerifyCode::make('default' , true));
    }
}