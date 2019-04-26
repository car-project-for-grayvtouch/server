<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/22
 * Time: 16:55
 */

namespace App\Customize\PcApi\Model;

use DB;

class CarModel extends Model
{
    protected $table = 'car_model';
    public $timestamps = false;

    public static function getConfiguration($car_model_id)
    {
        return DB::table('car_model_with_configuration as cmwc')
            ->join('car_configuration as cc' , 'cc.id' , '=' , 'cmwc.car_configuration_id')
            ->where('car_model_id' , $car_model_id)
            ->select('cc.*')
            ->get()
            ->each(function($m){
                $m->group = CarConfigurationGroup::findById($m->car_configuration_group_id);
                self::single($m);
            });
    }
}