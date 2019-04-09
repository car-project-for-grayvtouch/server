<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class CarModelWithConfiguration extends Model
{
    protected $table = 'car_model_with_configuration';
    public $timestamps = false;

    public static function delByCarModelId($car_model_id)
    {
        return self::where('car_model_id' , $car_model_id)->delete();
    }
}