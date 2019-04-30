<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class Article extends Model
{
    protected $table = 'article';
    public $timestamps = false;
    // 文章分类
    public function articleType()
    {
        return $this->belongsTo(ArticleType::class , 'article_type_id' , 'id');
    }

    // 文章内容
    public function content()
    {
        return $this->hasOne(ArticleContent::class , 'article_id' , 'id');
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    // 聚合数据：检查聚合数据id是否已经存在
    public static function isExistsByUniqueId($unique_id)
    {
        return self::where('unique_id' , $unique_id)->count();
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['p_id'] = $filter['p_id'] ?? '';
        $filter['title'] = $filter['title'] ?? '';
        $order['field'] = $filter['field'] ?? 'id';
        $order['value'] = $filter['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id', '=', $filter['id']];
        }
        if ($filter['p_id'] != '') {
            $where[] = ['p_id', '=', $filter['p_id']];
        }
        if ($filter['title'] != '') {
            $where[] = ['title', 'like', "%{$filter['title']}%"];
        }
        $res = self::with(['articleType', 'content'])
            ->where($where)
            ->orderBy($order['field'], $order['value'])
            ->paginate($limit);
        foreach ($res as $v)
        {
            self::single($v);
            ArticleContent::single($v->content);
            ArticleType::single($v->articleType);
        }
        return $res;
    }
}