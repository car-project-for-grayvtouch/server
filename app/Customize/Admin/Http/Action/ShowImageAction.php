<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:16
 */

namespace App\Customize\Admin\Http\Action;

use function Admin\res_path;
use App\Customize\Admin\Model\ShowImage;
use function extra\array_unit;
use Validator;
use DB;
use Exception;

use function Admin\get_form_error;
use function Admin\parse_order;

class ShowImageAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = ShowImage::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    // 详情：编辑
    public static function detail($id)
    {
        $res = ShowImage::findById($id);
        if (empty($res)) {
            return self::error('未找到 id 对应得数据' , 404);
        }
        return self::success($res);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'platform_id' => 'required' ,
            'position'    => 'required' ,
        ] , [
            'platform_id.required' => '必须' ,
            'position.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $m = ShowImage::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $param['weight'] = empty($param['weight']) ? $m->weight : $param['weight'];
        ShowImage::updateById($param['id'] , array_unit($param , [
            'platform_id' ,
            'position' ,
            'link' ,
            'weight' ,
        ]));
        return self::success($param['id']);
    }


    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'platform_id' => 'required' ,
            'position'    => 'required' ,
        ] , [
            'platform_id.required' => '必须' ,
            'position.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight'] = empty($param['weight']) ? config('app.weight') : $param['weight'];
        $id = ShowImage::insertGetId(array_unit($param , [
            'platform_id' ,
            'position' ,
            'link' ,
            'weight' ,
        ]));
        return self::success($id);
    }

    public static function image(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'name' => 'required' ,
            'mime' => 'required' ,
            'size' => 'required' ,
            'path' => 'required' ,
        ] , [
            'id.required'   => 'id 尚未提供' ,
            'name.required' => 'name 尚未提供' ,
            'mime.required' => 'mime 尚未提供' ,
            'size.required' => 'size 尚未提供' ,
            'path.required' => 'path 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = ShowImage::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $param['path'] = res_path($param['path']);
        ShowImage::updateById($param['id'] , array_unit($param , [
            'name' ,
            'mime' ,
            'size' ,
            'path' ,
        ]));
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
        // todo 删除图片本身
        $res = ShowImage::destroy($id_list);
        return self::success($res);
    }

}