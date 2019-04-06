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

class Image extends Model  implements ModelInterface
{
    public function platform()
    {
        return $this->belongsTo(Platform::class , 'platform_id' , 'id');
    }
    public static function single(Model $m = null)
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
}