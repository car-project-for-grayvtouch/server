<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

use function core\convert_obj;

class DetectionPos extends Model
{
    protected $table = 'detection_pos';
    public $timestamps = false;

    public function group()
    {
        return $this->belongsTo(DetectionGroup::class , 'detection_group_id' , 'id');
    }

    // 获取给定模块下的检测位置
    public static function getByModuleId($detection_module_id , $language = null)
    {
        $res = self::with('group')
            ->where('detection_module_id' , $detection_module_id)
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$v)
        {
            $v = self::single($v , $language);
            $v->group = DetectionGroup::single($v->group , $language);
        }
        return $res;
    }

    public static function getAll($language = null)
    {
        $res = self::with('group')
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$v)
        {
            $v = self::single($v , $language);
            $v->group = DetectionGroup::single($v->group , $language);
        }
        return $res;
    }

}