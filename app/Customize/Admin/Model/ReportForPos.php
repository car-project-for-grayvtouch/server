<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/20
 * Time: 9:22
 */

namespace App\Customize\Admin\Model;


class ReportForPos extends Model
{
    protected $table = 'report_for_pos';
    public $timestamps = false;

    public static function delByReportForModuleId($report_for_module_id)
    {
        return self::where('report_for_module_id' , $report_for_module_id)->delete();
    }

    public static function getByReportForModuleId($report_for_module_id)
    {
        $res = self::where('report_for_module_id' , $report_for_module_id)->get();
        self::multiple($res);
        return $res;
    }
}