<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class DetectionPos extends Model
{
    protected $table = 'detection_pos';
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
                'group' => function($query){

                } ,
                'module' => function(){

                } ,
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    public function group()
    {
        return $this->belongsTo(DetectionGroup::class , 'detection_group_id' , 'id');
    }

    public function module()
    {
        return $this->belongsTo(DetectionModule::class , 'detection_module_id' , 'id');
    }

    // 获取给定模块下的检测位置
    public static function getByModuleId($detection_module_id)
    {
        $res = self::with('group')
            ->where('detection_module_id' , $detection_module_id)
            ->get()
            ->each(function($v){
                self::single($v);
                DetectionGroup::single($v->group);
            });
        return $res;
    }

    public static function getAll()
    {
        $res = self::with('group')
            ->get()
            ->each(function($m){
                self::single($m);
                DetectionGroup::single($m->group);
            });
        return $res;
    }

}