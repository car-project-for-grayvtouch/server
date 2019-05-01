<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 20:37
 */

namespace App\Customize\Admin\Model;


class SaleApplication extends Model
{
    protected $table = 'sale_application';
    public $timestamps = false;

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        $res = self::with(['user'])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        foreach ($res as $v)
        {
            self::single($v);
            User::single($v->user);
        }
        return $res;
    }
}