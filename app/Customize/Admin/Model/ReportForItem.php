<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/20
 * Time: 9:22
 */

namespace App\Customize\Admin\Model;


class ReportForItem extends Model
{
    protected $table = 'report_for_item';
    public $timestamps = false;

    public static function delByReportForPosId($report_for_pos_id)
    {
        return self::where('report_for_pos_id' , $report_for_pos_id)->delete();
    }

    public static function getByReportForPosId($report_for_pos_id)
    {
        $res = self::where('report_for_pos_id' , $report_for_pos_id)->get();
        self::multiple($res);
        return $res;
    }
}