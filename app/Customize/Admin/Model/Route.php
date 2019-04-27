<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use Core\Lib\Category;
use Exception;
use function Admin\res_url;

class Route extends Model
{
    protected $table = 'route';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->s_ico_explain = res_url($m->s_ico);
        $m->b_ico_explain = res_url($m->b_ico);
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
                ->each(function($v){
                    self::single($v);
                })
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
        return self::where($where)
            ->get()
            ->each(function($v){
                self::single($v);
            })
            ->toArray();
    }
}