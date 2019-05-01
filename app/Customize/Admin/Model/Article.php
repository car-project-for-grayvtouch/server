<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\get_value;
use function Admin\res_url;
use Exception;

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
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        // 封面
        $m->thumb_explain = res_url($m->thumb);
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
        $order['valute'] = $filter['value'] ?? 'desc';
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
            $v1 = json_decode(json_encode($v) , true);
            // 是否隐藏
            $v->hidden_explain = get_value('business.bool' , $v1['hidden']);
            ArticleContent::single($v->content);
            ArticleType::single($v->articleType);
        }
        return $res;
    }

    public static function findById($id)
    {
        $res = self::with('content')
            ->find($id);
        self::single($res);
        ArticleContent::single($res->content);
        return $res;
    }
}