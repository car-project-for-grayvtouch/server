<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use Core\Lib\Category;

class Route extends Model
{
    protected $table = 'route';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    // 获取所有相关路由，排除 隐藏/未启用
    public static function route($id = 0 , $self = true , $struct = false)
    {
        $data = self::where([
                    ['enable' , '=' , 'y'] ,
                    ['hidden' , '=' , 'n'] ,
                ])
                ->orderBy('weight' , 'desc')
                ->orderBy('id' , 'asc')
                ->get()
                ->toArray();
        $res = Category::childrens($id , $data , [
            'id'    => 'id' ,
            'p_id'  => 'p_id' ,
        ] , $self , $struct);
        return $res;
    }

    // 获取数据列表
    public static function list(array $filter = [])
    {
        $filter['id']   = $filter['id'] ?? '';
        $filter['p_id'] = $filter['p_id'] ?? '';
        $filter['name'] = $filter['name'] ?? '';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['p_id'] != '') {
            $where[] = ['p_id' , '=' , $filter['p_id']];
        }
        if ($filter['name'] != '') {
            $where[] = ['name' , 'like' , "%{$filter['name']}%"];
        }
        return self::where($where)->get()->toArray();
    }
}