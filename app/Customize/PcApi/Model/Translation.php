<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/8
 * Time: 21:58
 */

namespace App\Customize\PcApi\Model;


class Translation extends Model
{
    protected $table = 'translation';
    public $timestamps = false;

    public static function findByOriginalForCnToEn($original = '')
    {
        return self::where([
            ['source_language' , '=' , 'cn'] ,
            ['target_language' , '=' , 'en'] ,
            ['original' , '=' , $original] ,
        ])->first();
    }
}