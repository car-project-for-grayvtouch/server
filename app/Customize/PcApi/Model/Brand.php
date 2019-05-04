<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/21
 * Time: 22:05
 */

namespace App\Customize\PcApi\Model;


use function PcApi\res_url;

class Brand extends Model
{
    protected $table = 'brand';
    public $timestamps = false;

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->logo = res_url($m->logo);
        return self::translate($m , $language);
    }
}