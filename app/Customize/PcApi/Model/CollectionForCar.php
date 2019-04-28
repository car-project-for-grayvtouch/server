<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 17:35
 */

namespace App\Customize\PcApi\Model;


class CollectionForCar extends Model
{
    protected $table = 'collection_for_car';
    public $timestamps = false;

    public static function isCollected($user_id , $car_id)
    {
        return (bool) self::where([
                ['user_id' , '=' , $user_id] ,
                ['car_id' , '=' , $car_id]
            ])
            ->count();
    }

    public static function findByUserIdAndCarId($user_id , $car_id)
    {
        return self::where([
            ['user_id' , '=' , $user_id] ,
            ['car_id' , '=' , $car_id] ,
        ])
            ->first();
    }

    public static function delByUserIdAndCarId($user_id , $car_id)
    {
        return self::where([
                ['user_id' , '=' , $user_id] ,
                ['car_id' , '=' , $car_id] ,
            ])
            ->delete();
    }
}