<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 14:36
 */

namespace App\Customize\Mobile\Model;


class Reservation extends Model
{
    protected $table = 'reservation';
    public $timestamps = false;

    public static function countForDay($day)
    {
        // 上午九点 - 下午九点
        $nine = sprintf('%s %s', $day , '09:00');
        $ten = sprintf('%s %s', $day , '10:00');
        $eleven = sprintf('%s %s', $day , '11:00');
        $twelve = sprintf('%s %s', $day , '12:00');
        $thirteen = sprintf('%s %s', $day , '13:00');
        $fourteen = sprintf('%s %s', $day , '14:00');
        $fifteen = sprintf('%s %s', $day , '15:00');
        $sixteen = sprintf('%s %s', $day , '16:00');
        $seventeen = sprintf('%s %s', $day , '17:00');
        $eighteen = sprintf('%s %s', $day , '18:00');

        $res = [];
        $res[$nine] = self::countForTimestamp($nine);
        $res[$ten] = self::countForTimestamp($ten);
        $res[$eleven] = self::countForTimestamp($eleven);
        $res[$twelve] = self::countForTimestamp($twelve);
        $res[$thirteen] = self::countForTimestamp($thirteen);
        $res[$fourteen] = self::countForTimestamp($fourteen);
        $res[$fifteen] = self::countForTimestamp($fifteen);
        $res[$sixteen] = self::countForTimestamp($sixteen);
        $res[$seventeen] = self::countForTimestamp($seventeen);
        $res[$eighteen] = self::countForTimestamp($eighteen);
        return $res;
    }

    private static function countForTimestamp($appointment)
    {
        return self::whereRaw('date_format(appointment , "%Y-%m-%d %H:%i") = :appointment' , [
                'appointment' => $appointment
            ])
            ->count();
    }
}