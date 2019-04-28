<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 23:50
 */

namespace App\Customize\PcApi\Model;


use function PcApi\res_url;

class Article extends Model
{
    protected $table = 'article';
    public $timestamps = false;

    public static function listForHome($article_type_id , $limit = 20)
    {
        $res = self::with('content')
            ->where('article_type_id' , $article_type_id)
            ->limit($limit)
            ->get()
            ->each(function($m){
                self::single($m);
                ArticleContent::single($m->content);
            });
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->thumb = res_url($m->thumb);
    }

    public function content()
    {
        return $this->hasOne(ArticleContent::class , 'article_id' , 'id');
    }

    public static function findById($id)
    {
        $res = self::with('content')
            ->find($id);
        self::single($res);
        return $res;
    }
}