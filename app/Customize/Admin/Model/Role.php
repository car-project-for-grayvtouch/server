<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use Core\Lib\Category;

class Role extends Model
{
    protected $table = 'role';
    public $timestamps = false;

    // 关联模型：route
    public function route()
    {
        return $this->belongsToMany(Route::class , 'role_privilege' , 'role_id' , 'route_id');
    }

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    // 角色权限
    public static function priv($id = 0 , bool $struct = false , bool $is_return_role = false)
    {
        $role = self::with([
            'route' => function($query){
                $query
                    ->orderBy('weight' , 'desc')
                    ->orderBy('create_time' , 'asc')
                    ->orderBy('id' , 'asc');
            } ,
        ])
            ->where('id' , $id)
            ->first();
        $priv = $role->route->toArray();
        if ($struct) {
            // 如果想要保留结构
            // 数据库中的数据就必须有严格的上下级关系
            // 否则会和不保留数据结构产生不同的结果！
            $priv = Category::childrens(0 , $priv , [
                'id'    => 'id' ,
                'p_id'   => 'p_id' ,
            ] , false , true);
        }
        if (!$is_return_role) {
            return $priv;
        }
        // 销毁无用数据
        unset($role->route);
        $role->priv = $priv;
        return $role;
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
        $res = self::where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

}