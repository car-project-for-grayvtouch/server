<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

use function core\convert_obj;
use function PcApi\res_url;

class CarConfiguration extends Model
{
    protected $table = 'car_configuration';
    public $timestamps = false;

    public function group()
    {
        return $this->belongsTo(CarConfigurationGroup::class , 'car_configuration_group_id' , 'id');
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->image = res_url($m->image);

    }

    

    // 获取分组后的数据
    public static function groupData($language = null)
    {
        $res = self::with('group')
            ->orderBy('weight' , 'desc')
            ->orderBy('id' , 'asc')
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$v)
        {
            self::single($v);
            CarConfigurationGroup::single($v->group);
        }
        $group = [];
        $exists = function($group_id) use(&$group){
            foreach ($group as $v)
            {
                if ($v['group_id'] == $group_id) {
                    return true;
                }
            }
            return false;
        };
        foreach ($res as $v)
        {
            if (!$exists($v->car_configuration_group_id)) {
                $group[] = [
                    'group_id' => $v->car_configuration_group_id ,
                    'name' => empty($v->group) ? '' : $v->group->name ,
                    'data' => [$v]
                ];
            } else {
                foreach ($group as &$v1)
                {
                    if ($v1['group_id'] == $v->car_configuration_group_id) {
                        $v1['data'][] = $v;
                    }
                }
            }
        }
        return $group;
    }
}