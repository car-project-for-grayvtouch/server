<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 20:37
 */

namespace App\Customize\Admin\Model;


use function Admin\get_value;
use Exception;

class Reservation extends Model
{
    protected $table = 'reservation';
    public $timestamps = false;

    public function car()
    {
        return $this->belongsTo(Car::class , 'car_id' , 'id');
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['user_id'] = $filter['user_id'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['user_id'] != '') {
            $where[] = ['user_id' , '=' , $filter['user_id']];
        }
        $res = self::with([
                'user' ,
                'car'
            ])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        foreach ($res as $v)
        {
            self::single($v);
            User::single($v->user);
            Car::single($v->car);
        }
        return $res;
    }

    public function user()
    {
        return $this->belongsTo(User::class , 'user_id' , 'id');
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->status_explain = get_value('business.reservation_status' , $m->status);
    }

    public static function countByDate($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }
}