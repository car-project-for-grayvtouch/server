<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/26
 * Time: 16:38
 */

namespace App\Customize\Admin\Util;

use function PcApi\config;

class Misc
{
    // 系统信息
    public static function os()
    {
        return config('os');
    }
}