<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 23:50
 */

namespace App\Customize\PcApi\Model;


use function core\convert_obj;
use Exception;
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
            ->get();
        $res = convert_obj($res);
        foreach ($res as &$v)
        {
            self::single($v);
            ArticleContent::single($v->content);
        }
        return $res;
    }

    public static function listForMedia($article_type_id , int $limit = 20)
    {
        $res = self::with('content')
            ->where('article_type_id' , $article_type_id)
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as &$v)
        {
            self::single($v);
            ArticleContent::single($v->content);
        }
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 错误');
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
        if (empty($res)) {
            return ;
        }
        self::single($res);
        ArticleContent::single($res->content);
        return $res;
    }
}