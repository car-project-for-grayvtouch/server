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

use Validator;

class ArticleAction extends Action
{
    public static function listForHome(array $param)
    {
        $article_type = 1;
        $res = Article::listForHome($article_type , $param['limit'] , $param['language']);
        return self::success($res);
    }

    public static function listForMedia(array $param)
    {
        $article_type = 1;
        $res = Article::listForMedia($article_type , $param['limit'] , $param['language']);
        return self::success($res);
    }

    public static function detail(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
        ] , [
            'id.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $res = Article::findById($param['id'] , $param['language']);
        if (empty($res)) {
            return self::error('未找到 id 对应项');
        }
        return self::success($res);
    }
}