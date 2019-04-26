<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Customize\Admin\Model;

use function Admin\res_url;

class CarImage extends Model
{
    protected $table = 'car_image';
    public $timestamps = false;

    public static function sinngle($m = null){
        if (empty($m)) {
            return ;
        }
        $m->url_explain = res_url($m->url);
    }
}