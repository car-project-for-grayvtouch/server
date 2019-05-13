<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/28
 * Time: 13:55
 */

namespace App\Customize\Mobile\Http\Action;


use App\Customize\Mobile\Model\Order;
use App\Customize\Mobile\Model\Product;
use App\Customize\Mobile\Model\ProductComment;
use App\Customize\Mobile\Model\ProductCommentImage;
use Exception;
use function extra\array_unit;
use function extra\check_num;
use function Mobile\user;
use function Mobile\config;

use Validator;
use DB;

class OrderAction extends Action
{
    public static function list(array $param = [])
    {
        $res = Order::list(user()->id , $param , config('app.limit'));
        return self::success($res);
    }

    public static function commentForMain(array $param)
    {
        $validator = Validator::make($param , [
            'product_id' => 'required' ,
            'content' => 'required' ,
            'product_score' => 'required' ,
            'image' => 'required' ,
        ] , [
            'product_id.required' => '必须' ,
            'content.required' => '必须' ,
            'product_score.required' => '必须' ,
            'image.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $image = json_decode($param['image'] , true);
        if (empty($image)) {
            return self::error('请提供评论图片');
        }
        // 检查评分数量是否正确
        if (!check_num($param['product_score'] , 2)) {
            return self::error([
                'product_score' => '产品评分格式错误，请输入数字，最多仅允许2位小数' ,
            ]);
        }
        // 检查评论图片格式是否正确
        foreach ($image as $v)
        {
            if (
                !isset($v['name']) ||
                !isset($v['mime']) ||
                !isset($v['size']) ||
                !isset($v['path'])
            ) {
                return self::error('图片数据格式不正确，请确保每个单元都包含 name|mime|size|path 字段！');
            }
        }
        // 检查该商品是否已经完成交易，检查是否评论过
        $product = Product::findById($param['product_id']);
        if (empty($product)) {
            return self::error('未找到当前提供 id = ' . $param['product_id'] . '对应的订单商品记录' , 404);
        }
        if (!in_array($product->status , config('business.can_comment_status_for_product'))) {
            return self::error('目前的订单状态不支持评论');
        }
        if (Product::commented(user()->id , $product->id)) {
            return self::error('您已经评论过该订单商品，不允许再次添加主体评论！');
        }
        $param['type'] = 'main';
        $param['user_id'] = user()->id;
        try {
            DB::beginTransaction();
            $id = ProductComment::insertGetId(array_unit($param , [
                'user_id' ,
                'product_id' ,
                'type' ,
                'content' ,
                'product_score' ,
            ]));
            // 保存评论图片
            array_walk($image , function($v) use($id){
                $v['product_comment_id'] = $id;
                ProductCommentImage::insert(array_unit($v , [
                    'product_comment_id' ,
                    'name' ,
                    'mime' ,
                    'path' ,
                    'size' ,
                ]));
            });
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }
}