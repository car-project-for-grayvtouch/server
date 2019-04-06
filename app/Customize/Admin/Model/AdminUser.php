<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\config;
use function Admin\get_value;
use function Admin\res_url;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class AdminUser extends Model  implements ModelInterface
{
    protected $table = 'admin_user';
    public $timestamps = false;

    // 用户关联角色
    public function role()
    {
        return $this->belongsTo(Role::class , 'role_id' , 'id');
    }

    public static function single(Model $m = null)
    {
        if (empty($m)) {
            return ;
        }
        // 用户头像
        $m->avatar_explain = empty($m->avatar) ? config('app.avatar') : res_url($m->avatar , true);
        $m->is_root_explain = get_value('business.bool' , $m->is_root);
        $m->last_ip_explain = long2ip($m->last_ip);
        if (isset($m->role)) {
            Role::single($m->role);
        } else {
            unset($m->role);
            $m->role = new class() {};
        }
    }

    public static function multiple(Collection $list)
    {
        foreach ($list as $v)
        {
            self::single($v);
        }
    }

    // 获取用户
    public static function findByUsername($username = '')
    {
        $m = self::where('username' , $username)
                ->first();
        self::single($m);
        return $m;
    }

    // 获取用户
    public static function findById($id = '')
    {
        $m = self::find($id);
        self::single($m);
        return $m;
    }

    // 获取用户密码
    public static function getPasswordByUsername($username = '')
    {
        return self::where('username' , $username)->value('password');
    }

    // 更新数据
    public static function updateByUsername($username = '' , array $param = [])
    {
        return self::where('username' , $username)
            ->update($param);
    }

    // 更新数据，通过 id
    public static function updateById($id , array $param = [])
    {
        return self::where('id' , $id)
            ->update($param);
    }

    // 检查用户是否存在
    public static function existsByUsername($username = '')
    {
        return self::where('username' , $username)->count() > 0;
    }

    public static function list(array $param = [] , array $order = [] , $limit = 20)
    {
        $param['id'] = $param['id'] ?? '';
        $param['username'] = $param['username'] ?? '';
        $param['sex'] = $param['sex'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($param['id'] != '') {
            $where[] = ['id' , '=' , $param['id']];
        }
        if ($param['username'] != '') {
            $where[] = ['username' , 'like' , "%{$param['username']}%"];
        }
        if ($param['sex'] != '') {
            $where[] = ['sex' , '=' , $param['sex']];
        }
        $res = self::with('role')
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }
}