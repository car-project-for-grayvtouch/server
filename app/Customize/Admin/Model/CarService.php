<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class CarService extends Model
{
    protected $table = 'car_service';
    public $timestamps = false;

    public static function delByCarId($car_id)
    {
        return self::where('car_id' , $car_id)->delete();
    }
}