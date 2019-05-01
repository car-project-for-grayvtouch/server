<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/29
 * Time: 21:13
 */

namespace App\Customize\Admin\Http\Action;

use App\Customize\Admin\Model\Article;
use App\Customize\Admin\Model\ArticleContent;

use Exception;
use DB;
use Validator;

use function Admin\config;
use function extra\array_unit;
use function Admin\parse_order;

class ArticleAction extends Action
{
    public static function list(array $param)
    {
        // 排序
        $order = parse_order($param['order']);
        $res = Article::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    // 分类详情
    public static function detail($id)
    {
        $res = Article::findById($id);
        if (empty($res)) {
            return self::error('未找到 id 对应数据' , 404);
        }
        return self::success($res);
    }

    // 编辑
    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'title' => 'required' ,
            'article_type_id' => 'required' ,
            'hidden' => 'required' ,
            'is_link' => 'required' ,
        ] , [
            'title.required' => '必须' ,
            'article_type_id.required' => '必须' ,
            'hidden.required' => '必须' ,
            'is_link.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $m = Article::find($param['id']);
        if (empty($m)) {
            return self::error('未找到id对应数据');
        }
        $param['weight'] = !empty($param['weight']) ? $param['weight'] : $m->weight;
        try {
            DB::beginTransaction();
            Article::updateById($param['id'] , array_unit($param , [
                'title' ,
                'source' ,
                'weight' ,
                'hidden' ,
                'article_type_id' ,
                'link' ,
                'is_link' ,
            ]));
            ArticleContent::updateByArticleId($param['id'] , array_unit($param , [
                'content'
            ]));
            DB::commit();
            return self::success($param['id']);
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    // 新增
    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'title' => 'required' ,
            'article_type_id' => 'required' ,
            'hidden' => 'required' ,
            'is_link' => 'required' ,
        ] , [
            'title.required' => '必须' ,
            'article_type_id.required' => '必须' ,
            'hidden.required' => '必须' ,
            'is_link.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight'] = empty($param['weight']) ? $param['weight'] : config('app.weight');
        $param['hidden'] = empty($param['hidden']) ? $param['hidden'] : 'n';
        $param['is_link'] = empty($param['is_link']) ? $param['is_link'] : 'n';
        try {
            DB::beginTransaction();
            $id = Article::insertGetId(array_unit($param , [
                'title' ,
                'source' ,
                'weight' ,
                'hidden' ,
                'article_type_id' ,
                'link' ,
                'is_link' ,
            ]));
            ArticleContent::insert([
                'article_id' => $id ,
                'content' => $param['content']
            ]);
            DB::commit();
            return self::success($id);
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    // 删除
    public static function del(array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ] , [
            'id_list.required' => '待删除的记录尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        try {
            DB::beginTransaction();
            // 删除文章
            Article::destroy($id_list);
            // 删除文章对应的内容
            array_walk($id_list , function ($v){
                ArticleContent::delByArticleId($v);
            });
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
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
        $m = Article::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $param['thumb'] = $param['image'];
        Article::updateById($param['id'] , array_unit($param , [
            'thumb'
        ]));
        return self::success();
    }
}