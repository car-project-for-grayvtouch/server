<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/3
 * Time: 19:10
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\res_url;

class Story extends Model
{
    protected $table = 'story';
    public $timestamps = false;

    public static function listForHome(int $limit =20 , $language = null)
    {
        $res = self::where([
                ['hidden' , '<>' , 'y'] ,
            ])
            ->orderBy('score' , 'desc')
            ->limit($limit)
            ->get();
        $res = self::multiple($res , $language);
        return $res;
    }

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        $m->image = res_url($m->image);
        return self::translate($m , $language);
    }
}