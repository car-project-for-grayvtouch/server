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
}