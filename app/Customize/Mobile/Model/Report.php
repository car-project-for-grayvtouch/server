<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:16
 */

namespace App\Customize\Mobile\Model;


use function core\convert_obj;

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
        $res = convert_obj($res);
        self::single($res);
        return $res;
    }
}