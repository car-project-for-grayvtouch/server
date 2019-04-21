<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/20
 * Time: 9:22
 */

namespace App\Customize\Admin\Model;


class Report extends Model
{
    protected $table = 'report';
    public $timestamps = false;


    public static function findByCarId($car_id)
    {
        $res = self::where('car_id' , $car_id)->first();
        self::single($res);
        return $res;
    }

}