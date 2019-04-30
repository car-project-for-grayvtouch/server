<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

class ArticleType extends Model
{
    protected $table = 'article_type';
    public $timestamps = false;
    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public static function getTypeByName($name = '')
    {
        return self::where('name' , $name)->find();
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
        return self::where($where)
            ->get()
            ->each(function($v){
                self::single($v);
            })
            ->toArray();
    }
}