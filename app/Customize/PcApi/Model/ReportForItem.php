<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:16
 */

namespace App\Customize\PcApi\Model;


class ReportForItem extends Model
{
    protected $table = 'report_for_item';
    public $timestamps = false;

    public static function getByReportForPosId($report_for_pos_id , $language = null)
    {
        $res = self::where('report_for_pos_id' , $report_for_pos_id)->get();
        $res = self::multiple($res , $language);
        return $res;
    }
}