<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\PcApi\Model;

use function PcApi\res_url;

class DetectionModule extends Model
{
    protected $table = 'detection_module';
    public $timestamps = false;

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->image = res_url($m->image);
        return self::translate($m , $language);
    }
}