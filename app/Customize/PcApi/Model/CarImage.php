<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 16:44
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\res_url;

class CarImage extends Model
{
    protected $table = 'car_image';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 错误');
        }
        unset($m->path);
        $m->url = res_url($m->url);

    }

}