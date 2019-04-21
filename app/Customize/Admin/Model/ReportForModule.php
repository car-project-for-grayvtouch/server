<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/20
 * Time: 9:22
 */

namespace App\Customize\Admin\Model;


class ReportForModule extends Model
{
    protected $table = 'report_for_module';
    public $timestamps = false;

    public static function delByReportId($report_id)
    {
        return self::where('report_id' , $report_id)->delete();
    }

    public static function getByReportId($report_id)
    {
        $res = self::where('report_id' , $report_id)->get();
        self::multiple($res);
        return $res;
    }
}