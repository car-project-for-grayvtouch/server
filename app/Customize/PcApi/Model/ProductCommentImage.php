<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 13:40
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\res_url;

class ProductCommentImage extends Model
{
    protected $table = 'product_comment_image';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        $m->url = res_url($m->path);
    }

    public static function getByProductCommentId($product_comment_id)
    {
        $res = self::where('product_comment_id' , $product_comment_id)
            ->get();
        self::multiple($res);
        return $res;
    }

}