<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/3
 * Time: 22:15
 */

namespace App\Customize\Admin\Http\Action;


use function extra\array_unit;
use function Admin\config;
use function Admin\get_form_error;
use function Admin\parse_order;

use App\Customize\Admin\Model\Story;

use Exception;
use DB;
use Validator;

class StoryAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = Story::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'title' => 'required' ,
            'content' => 'required' ,
            'username' => 'required' ,
            'score' => 'required' ,
        ] , [
            'title.required' => '必须' ,
            'content.required' => '必须' ,
            'username.required' => '必须' ,
            'score.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight'] = !empty($param['weight']) ? $param['weight'] : config('app.weight');
        $id = Story::insertGetId(array_unit($param , [
            'title' ,
            'content' ,
            'username' ,
            'hidden' ,
            'score' ,
            'weight' ,
        ]));
        return self::success($id);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'title' => 'required' ,
            'content' => 'required' ,
            'username' => 'required' ,
            'score' => 'required' ,
        ] , [
            'title.required' => '必须' ,
            'content.required' => '必须' ,
            'username.required' => '必须' ,
            'score.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = Story::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录');
        }
        $param['weight'] = !empty($param['weight']) ? $param['weight'] : $m->weight;
        Story::updateById($param['id'] , array_unit($param , [
            'title' ,
            'content' ,
            'username' ,
            'hidden' ,
            'score' ,
            'weight' ,
        ]));
        return self::success($param['id']);
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
        $res = Story::destroy($id_list);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = Story::findById($id);
        if (empty($res)) {
            return self::error("未找到 id 对应记录");
        }
        return self::success($res);
    }

    public static function all()
    {
        $res = Story::getAll();
        return self::success($res);
    }

    public static function image(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'image' => 'required' ,
        ] , [
            'id.required' => 'id 尚未提供' ,
            'image.required' => 'image 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = Story::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        Story::updateById($param['id'] , array_unit($param , [
            'image'
        ]));
        return self::success();
    }
}