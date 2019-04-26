<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class ArticleType extends Model  implements ModelInterface
{
    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
    }

    public static function multiple(Collection $list)
    {
        foreach ($list as $v)
        {
            self::single($v);
        }
    }

    public static function getTypeByName($name = '')
    {
        return self::where('name' , $name)->find();
    }
}