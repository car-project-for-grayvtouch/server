<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\res_url;

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
        $m->image_explain = res_url($m->image);
    }

    // 获取数据列表
    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        // 字段检索
        $filter['id']    = $filter['id'] ?? '';
        $filter['name']  = $filter['name'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['name'] != '') {
            $where[] = ['name' , 'like' , "%{$filter['name']}%"];
        }
        $res = self::with([
                'group' => function($query){
                    // 预留
                }
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    // 获取分组后的数据
    public static function groupData()
    {
        $res = self::with('group')
            ->orderBy('weight' , 'desc')
            ->orderBy('id' , 'asc')
            ->get();
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