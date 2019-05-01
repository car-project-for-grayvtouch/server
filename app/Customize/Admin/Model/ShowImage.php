<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\res_url;

class ShowImage extends Model
{
    protected $table = 'show_image';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        // 用户头像
        $m->url = res_url($m->path);
    }

    public function platform()
    {
        return $this->belongsTo(Platform::class , 'platform_id' , 'id');
    }

    public static function list(array $param = [] , array $order = [] , $limit = 20)
    {
        $param['id'] = $param['id'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($param['id'] != '') {
            $where[] = ['id' , '=' , $param['id']];
        }
        $res = self::with('platform')
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }
}