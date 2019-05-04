<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

use function PcApi\res_url;

class CarConfigurationGroup extends Model
{
    protected $table = 'car_configuration_group';
    public $timestamps = false;

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        $m->image = res_url($m->image);
        return self::translate($m , $language);
    }
}