<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/6/7
 * Time: 20:15
 */

namespace App\Customize\Admin\Model;


use function core\get_time_diff;
use Exception;

class AdminPush extends Model
{
    protected $table = 'admin_push';

    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 错误');
        }
        $m->format_time = get_time_diff($m->create_time);
    }

    public static function list(int $id , int $user_id , int $limit = 20)
    {
        $where = [
            ['user_id' , '=' , $user_id]
        ];
        if (!empty($id)) {
            $where[] = ['id' , '<' , $id];
        }
        $res = self::where($where)
            ->limit($limit)
            ->orderBy('create_time' , 'desc')
            ->orderBy('id' , 'desc')
            ->get();
        self::multiple($res);
        return $res;
    }
}