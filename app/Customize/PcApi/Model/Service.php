<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:44
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\res_url;

class Service extends Model
{
    protected $table = 'service';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 错误');
        }
        $m->image = res_url($m->image);
    }
}