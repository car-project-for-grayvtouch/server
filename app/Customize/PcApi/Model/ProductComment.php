<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 9:38
 */

namespace App\Customize\PcApi\Model;

use DB;
use function PcApi\config;

class ProductComment extends Model
{
    protected $table = 'product_comment';
    public $timestamps = false;

    // 优质评论
    public static function featuredComment(int $limit = 10)
    {
        $sql = <<<EOT
        SELECT
            pc.* 
        FROM
            xq_product_comment AS pc
            INNER JOIN xq_product p ON pc.product_id = p.id
            INNER JOIN xq_car AS c ON p.type = 'car' 
            AND c.id = p.relation_id 
        WHERE
            pc.id = ( SELECT id FROM xq_product_comment WHERE product_id = pc.product_id ORDER BY commendation DESC LIMIT 1 ) 
        GROUP BY
            p.type,
            p.relation_id 
        ORDER BY
            pc.commendation DESC 
            LIMIT :limit;
EOT;
        $res = DB::select($sql , [
            'limit' => $limit
        ]);
        array_walk($res , function($v){
            // 评论图片
            $v->image = ProductCommentImage::getByProductCommentId($v->id);
            // 评论用户
            $v->user = User::findById($v->user_id);
            // 评论主体
            $v->product = Product::findById($v->product_id);
            if (!empty($v->product)) {
                switch ($v->product->type)
                {
                    case 'car':
                        $v->product->thing = Car::findByIdForSimple($v->product->relation_id);
                        break;
                    default:
                        $v->product->thing = null;
                }
            }
        });
        return $res;
    }

    public function image()
    {
        return $this->hasMany(ProductCommentImage::class , 'car_comment_id' , 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class , 'user_id' , 'id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class , 'product_id' , 'id');
    }


}