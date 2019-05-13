<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/26
 * Time: 23:16
 */

namespace App\Customize\Mobile\Model;


use function core\convert_obj;

class ReportForModule extends Model
{
    protected $table = 'report_for_module';
    public $timestamps = false;

    public static function getByReportId($report_id)
    {
        $res = self::where('report_id' , $report_id)->get();
        $res = convert_obj($res);
        self::multiple($res);
        return $res;
    }
}