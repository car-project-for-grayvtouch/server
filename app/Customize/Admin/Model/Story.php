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
use function core\obj_to_array;

class Story extends Model
{
    protected $table = 'story';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->image_explain = res_url($m->image);
        $m_arr = obj_to_array($m);
        $m->hidden_explain = get_value('business.bool' , $m_arr['hidden']);
    }

    // 获取数据列表
    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        // 字段检索
        $filter['id']    = $filter['id'] ?? '';
        $filter['title']  = $filter['title'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['title'] != '') {
            $where[] = ['title' , 'like' , "%{$filter['title']}%"];
        }
        $res = self::where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }
}