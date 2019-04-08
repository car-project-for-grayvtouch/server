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

class Brand extends Model
{
    protected $table = 'brand';
    public $timestamps = false;

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->hot_explain = get_value('business.bool' , $m->hot);
        $m->logo_explain = res_url($m->logo , true);
    }

    // 获取数据列表
    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        // 字段检索
        $filter['id']    = $filter['id'] ?? '';
        $filter['name']  = $filter['name'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['name'] != '') {
            $where[] = ['name' , 'like' , "%{$filter['name']}%"];
        }
        $res = self::where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }
}