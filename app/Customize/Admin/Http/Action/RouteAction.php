<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/31
 * Time: 13:11
 */

namespace App\Customize\Admin\Http\Action;

use Validator;

use Core\Lib\Category;

use App\Customize\Admin\Model\Route;

use function extra\array_unit;


use function Admin\get_form_error;
use function Admin\config;

class RouteAction extends Action
{
    public static function list(array $param)
    {
        $res = Route::list($param);
        $res = Category::childrens(0 , $res , [
            'id'    => 'id' ,
            'p_id'  => 'p_id' ,
        ] , false , false);
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'p_id' => 'required' ,
        ] , [
            'name.required' => 'name 尚未提供' ,
            'p_id.required' => 'p_id 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $route = config('business.route');
        $method_range   = $route['method'];
        $type_range     = $route['type'];
        if (!in_array($param['method'] , $method_range)) {
            return self::error([
                'method' => '不支持的 method' ,
            ]);
        }
        if (!in_array($param['type'] , $type_range)) {
            return self::error([
                'type' => '不支持的 type' ,
            ]);
        }
        $param['weight'] = !empty($param['weight']) ? intval($param['weight']) : config('app.weight');
        $res = Route::insertGetId(array_unit($param , [
            'name' ,
            'en' ,
            'route' ,
            'method' ,
            'type' ,
            'hidden' ,
            'enable' ,
            'menu' ,
            'p_id' ,
            'weight'
        ]));
        return self::success($res);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'p_id' => 'required' ,
        ] , [
            'name.required' => 'name 尚未提供' ,
            'p_id.required' => 'p_id 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供' , 460);
        }
        $m = Route::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $param['weight'] = $param['weight'] ?? $m->weight;
        Route::updateById($param['id'] , array_unit($param , [
            'name' ,
            'en' ,
            'route' ,
            'method' ,
            'type' ,
            'hidden' ,
            'enable' ,
            'menu' ,
            'p_id' ,
            'weight'
        ]));
        return self::success($param['id']);
    }

    public static function saveImage(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'image' => 'required' ,
            'type' => 'required' ,
        ] , [
            'id.required' => 'id 尚未提供' ,
            'image.required' => 'image 尚未提供' ,
            'type.required' => 'type 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = Route::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $type_range = ['small' , 'big'];
        if (!in_array($param['type'] , $type_range)) {
            return self::error('不支持的 type');
        }
        $column = $param['type'] == 'small' ? 's_ico' : 'b_ico';
        Route::updateById($param['id'] , [
            $column => $param['image']
        ]);
        return self::success();
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
        $del = [];
        $route = Route::get()->toArray();
        foreach ($id_list as $v)
        {
            $children = Category::childrens($v , $route , [
                'id'    => 'id' ,
                'p_id'  => 'p_id' ,
            ] , true , false);
            $c_ids = [];
            foreach ($children as $v1)
            {
                $c_ids[] = $v1['id'];
            }
            $diff   = array_diff($c_ids , $del);
            $del    = array_merge($del , $diff);
        }
        $res = Route::destroy($del);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = Route::findById($id);
        if (empty($res)) {
            return self::error("未找到 id 对应记录");
        }
        return self::success($res);
    }
}