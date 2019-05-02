<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 21:18
 */

namespace App\Customize\Admin\Model;


use function Admin\res_url;

class User extends Model
{
    protected $table = 'user';
    public $timestamps = false;

    public static function list(array $param = [] , array $order = [] , $limit = 20)
    {
        $param['id'] = $param['id'] ?? '';
        $param['username'] = $param['username'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($param['id'] != '') {
            $where[] = ['id', '=', $param['id']];
        }
        if ($param['username'] != '') {
            $where[] = ['username', 'like', "%{$param['username']}%"];
        }
        $res = self::where($where)
            ->orderBy($order['field'], $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        // 用户头像
        $m->avatar_explain = empty($m->avatar) ? config('app.avatar') : res_url($m->avatar);
    }

    public static function countByDate($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }

    public static function countByForMonth($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }
}