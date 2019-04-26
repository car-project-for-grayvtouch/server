<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

class DetectionItem extends Model
{
    protected $table = 'detection_item';
    public $timestamps = false;

    public static function getByPosId($detection_pos_id)
    {
        $res = self::where('detection_pos_id' , $detection_pos_id)
            ->get();
        self::multiple($res);
        return $res;
    }
}