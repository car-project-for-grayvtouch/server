<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class DetectionItem extends Model
{
    protected $table = 'detection_item';
    public $timestamps = false;

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
                'position' => function($query){

                } ,
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        foreach ($res as &$v)
        {
            if (empty($v->position)) {
                continue ;
            }
            $v->module = DetectionModule::findById($v->position->detection_module_id);
            $v->position->group = DetectionGroup::findById($v->position->detection_group_id);
        }
        return $res;
    }

    public function position()
    {
        return $this->belongsTo(DetectionPos::class , 'detection_pos_id' , 'id');
    }

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public static function getByPosId($detection_pos_id)
    {
        $res = self::where('detection_pos_id' , $detection_pos_id)
            ->get();
        self::multiple($res);
        return $res;
    }
}