<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/28
 * Time: 11:12
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\get_value;

class Product extends Model
{
    protected $table = 'product';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->status_explain = get_value('business.product_status' , $m->status);
    }

    // 是否已经评价过
    public static function commented($user_id , $product_id)
    {
        $res = ProductComment::where([
                ['user_id' , '=' , $user_id] ,
                ['product_id' , '=' , $product_id] ,
            ])
            ->count();
        return $res > 0;
    }
}