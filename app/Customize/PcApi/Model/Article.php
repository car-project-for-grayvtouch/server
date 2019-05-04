<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 23:50
 */

namespace App\Customize\PcApi\Model;


use function core\convert_obj;
use function PcApi\res_url;

class Article extends Model
{
    protected $table = 'article';
    public $timestamps = false;

    public static function listForHome($article_type_id , $limit = 20 , $language = null)
    {
        $res = self::with('content')
            ->where('article_type_id' , $article_type_id)
            ->limit($limit)
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$v)
        {
            $v = self::single($v , $language);
            $v->content = ArticleContent::single($v->content , $language);
        }
        return $res;
    }

    public static function listForMedia($article_type_id , int $limit = 20 , $language = null)
    {
        $res = self::with('content')
            ->where('article_type_id' , $article_type_id)
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as &$v)
        {
            $v = self::single($v , $language);
            $v->content = ArticleContent::single($v->content , $language);
        }
        return $res;
    }

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->thumb = res_url($m->thumb);
        return self::translate($m , $language);
    }

    public function content()
    {
        return $this->hasOne(ArticleContent::class , 'article_id' , 'id');
    }

    public static function findById($id , $language = null)
    {
        $res = self::with('content')
            ->find($id);
        if (empty($res)) {
            return ;
        }
        $res = self::single($res , $language);
        $res->content = ArticleContent::single($res->content , $language);
        return $res;
    }
}