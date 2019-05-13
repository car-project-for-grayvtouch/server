<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/28
 * Time: 14:02
 */

namespace App\Customize\PcApi\Model;


use function core\convert_obj;
use Exception;
use function PcApi\get_value;

class Order extends Model
{
    protected $table = 'order';
    public $timestamps = false;

    public static function list($user_id , array $param = [] , $limit = 20)
    {
        $where = [
            ['user_id' , '=' , $user_id] ,
        ];
        $res = self::with(['product'])
            ->where($where)
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as $v)
        {
            self::single($v);
            // 检查当前用户是否评价过了
            Product::multiple($v->product);
            foreach ($v->product as $p)
            {
                // 是否评价过
                $p->commented = Product::commented($user_id , $v->id) ? 'y' : 'n';
                switch ($p->type)
                {
                    case 'car':
                        $p->thing = Car::findByIdForSimple($p->relation_id);
                        break;
                    default:
                        $p->thing = null;
                }
            }
        }
        return $res;
    }

    public function product()
    {
        return $this->hasMany(Product::class , 'order_id' , 'id');
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
        $m->status_explain = get_value('business.order_status' , $m->status);
    }

}