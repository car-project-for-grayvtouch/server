<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 13:40
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\res_url;

class CarCommentImage extends Model
{
    protected $table = 'car_comment_image';
    public $timestamps = false;

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        $m->url = res_url($m->path);
    }
}