<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/8
 * Time: 21:58
 */

namespace App\Customize\PcApi\Model;


use function core\convert_obj;

class Translation extends Model
{
    protected $table = 'translation';
    public $timestamps = false;

    public static function findByOriginalForCnToEn($original = '')
    {
        $res = self::where([
            ['source_language' , '=' , 'cn'] ,
            ['target_language' , '=' , 'en'] ,
            ['original' , '=' , $original] ,
        ])->first();
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        return $res;
    }
}