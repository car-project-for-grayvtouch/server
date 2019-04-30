<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class ArticleContent extends Model
{
    protected $table = 'article_content';
    public $timestamps = false;
    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public static function updateByArticleId($article_id , array $data = [])
    {
        return self::where('article_id' , $article_id)
            ->update($data);
    }

    public static function delByArticleId($article_id)
    {
        return self::where('article_id' , $article_id)
            ->delete();
    }
}