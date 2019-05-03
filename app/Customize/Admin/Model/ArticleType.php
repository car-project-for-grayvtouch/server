<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\get_value;
use Exception;

class ArticleType extends Model
{
    protected $table = 'article_type';
    public $timestamps = false;
    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }

    }

    public static function getTypeByName($name = '')
    {
        $res = self::where('name' , $name)->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }

    // 获取数据列表
    public static function list(array $filter = [])
    {
        $filter['id']   = $filter['id'] ?? '';
        $filter['p_id'] = $filter['p_id'] ?? '';
        $filter['name'] = $filter['name'] ?? '';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['p_id'] != '') {
            $where[] = ['p_id' , '=' , $filter['p_id']];
        }
        if ($filter['name'] != '') {
            $where[] = ['name' , 'like' , "%{$filter['name']}%"];
        }
        $res = self::where($where)
            ->get()
            ->each(function($v){
                self::single($v);
            })
            ->toArray();
        foreach ($res as &$v)
        {
            // hidden 字段有问题，所以必须要转化成数组后再做修改
            $v['hidden_explain'] = get_value('business.bool' , $v['hidden']);
        }
        return $res;
    }
}