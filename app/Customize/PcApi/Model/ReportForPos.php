<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:16
 */

namespace App\Customize\PcApi\Model;


use function core\convert_obj;

class ReportForPos extends Model
{
    protected $table = 'report_for_pos';
    public $timestamps = false;

    public static function getByReportForModuleId($report_for_module_id)
    {
        $res = self::where('report_for_module_id' , $report_for_module_id)->get();
        $res = convert_obj($res);
        self::multiple($res);
        return $res;
    }
}