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

use App\Customize\Admin\Model\ArticleType;

use function extra\array_unit;
use function Admin\get_form_error;
use function Admin\config;

class ArticleTypeAction extends Action
{
    public static function list(array $param)
    {
        $res = ArticleType::list($param);
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
            'hidden' => 'required' ,
        ] , [
            'name.required' => '必须' ,
            'hidden.required' => '必须' ,
            'p_id.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight']    = !empty($param['weight']) ? intval($param['weight']) : config('app.weight');
        $res = ArticleType::insertGetId(array_unit($param , [
            'name' ,
            'hidden' ,
            'p_id' ,
            'weight' ,
        ]));
        return self::success($res);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'p_id' => 'required' ,
            'hidden' => 'required' ,
        ] , [
            'name.required' => '必须' ,
            'hidden.required' => '必须' ,
            'p_id.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $m = ArticleType::find($param['id']);
        if (empty($m)) {
            return self::error('未找到id对应数据' , 460);
        }
        $param['weight']    = !empty($param['weight']) ? intval($param['weight']) : $m->weight;
        ArticleType::updateById($param['id'] , array_unit($param , [
            'name' ,
            'hidden' ,
            'p_id' ,
            'weight'
        ]));
        return self::success($param['id']);
    }

    public static function del(array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ] , [
            'id_list.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        $del = [];
        $article_type = ArticleType::get()->toArray();
        foreach ($id_list as $v)
        {
            $children = Category::childrens($v , $article_type , [
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
        $res = ArticleType::destroy($del);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = ArticleType::findById($id);
        if (empty($res)) {
            return self::error("未找到 id 对应记录" , 404);
        }
        return self::success($res);
    }
}