<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/3
 * Time: 22:15
 */

namespace App\Customize\Admin\Http\Action;


use function Admin\get_form_error;
use function Admin\parse_order;
use App\Customize\Admin\Model\RolePrivilege;
use App\Customize\Admin\Model\Route;
use Core\Lib\Category;
use Exception;
use function extra\array_unit;
use function Admin\config;

use DB;
use Validator;

use App\Customize\Admin\Model\Role;

class RoleAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = Role::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
        ] , [
            'name.required' => 'name 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight'] = !empty($param['weight']) ? intval($param['weight']) : config('app.weight');
        $res = Role::insertGetId(array_unit($param , [
            'name' ,
            'weight'
        ]));
        return self::success($res);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
        ] , [
            'name.required' => 'name 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $param['weight'] = !empty($param['weight']) ? intval($param['weight']) : config('app.weight');
        $res = Role::updateById($param['id'] , array_unit($param , [
            'name' ,
            'weight'
        ]));
        return self::success($res);
    }

    public static function del(array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ] , [
            'id_list.required' => 'id_list 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        $res = Role::destroy($id_list);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = Role::find($id);
        if (empty($res)) {
            return self::error("未找到 id = {$id} 对应记录");
        }
        return self::success($res);
    }

    public static function info($id)
    {
        // 获取角色权限
        $priv = Role::priv($id , false , false);
        // 获取所有权限
        $route = Route::list();
        $route = Category::childrens(0 , $route , [
            'id'    => 'id' ,
            'p_id'  => 'p_id' ,
        ] , false , true);
        return self::success(compact('priv' , 'route'));
    }

    public static function auth(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'route' => 'required' ,
        ] , [
            'id.required' => 'id 尚未提供' ,
            'route.required' => 'route 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $route = json_decode($param['route'] , true);
        try {
            DB::beginTransaction();
            // 删除该角色权限
            RolePrivilege::delByRoleId($param['id']);
            // 重新分配权限
            foreach ($route as $v)
            {
                RolePrivilege::insert([
                    'role_id' => $param['id'] ,
                    'route_id' => $v ,
                ]);
            }
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    public static function all()
    {
        return self::success(Role::getAll());
    }
}