<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:16
 */

namespace App\Customize\Mobile\Model;


use function core\convert_obj;

class ReportForItem extends Model
{
    protected $table = 'report_for_item';
    public $timestamps = false;

    public static function getByReportForPosId($report_for_pos_id)
    {
        $res = self::where('report_for_pos_id' , $report_for_pos_id)->get();
        $res = convert_obj($res);
        self::multiple($res);
        return $res;
    }
}