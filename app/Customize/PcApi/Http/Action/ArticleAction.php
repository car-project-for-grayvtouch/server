<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 23:46
 */

namespace App\Customize\PcApi\Http\Action;

use App\Customize\PcApi\Model\Article;
use function PcApi\config;

class ArticleAction extends Action
{
    public static function listForHome()
    {
        $article_type = 1;
        $limit = config('app.limit');
        $res = Article::listForHome($article_type , $limit);
        return self::success($res);
    }
}