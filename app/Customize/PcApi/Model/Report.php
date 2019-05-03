<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:16
 */

namespace App\Customize\PcApi\Model;


class Report extends Model
{
    protected $table = 'report';
    public $timestamps = false;

    public static function findByCarId($car_id)
    {
        $res = self::where('car_id' , $car_id)
            ->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }
}