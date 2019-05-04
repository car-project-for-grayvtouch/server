<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/7
 * Time: 21:50
 */

namespace App\Customize\PcApi\Model;

use App\Customize\PcApi\Util\YouDaoTranslation;
use function core\convert_obj;
use Exception;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Traversable;

class Model extends BaseModel implements ModelInterface
{
    public static function multiple($list , $language = null)
    {
        $list = convert_obj($list);
        foreach ($list as &$v)
        {
            $v = static::single($v , $language);
        }
        return $list;
    }

    public static function single($m = null , $language = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
        return self::translate($m , $language);
    }

    // 更新
    public static function updateById($id , array $param = [])
    {
        return static::where('id' , $id)
            ->update($param);
    }

    public static function getAll($language = null)
    {

        $res = static::all();
        $res = static::multiple($res , $language);
        return $res;
    }

    public static function findById($id , $language = null)
    {
        $res = self::find($id);
        if (empty($res)) {
            return ;
        }
        $res = self::single($res , $language);
        return $res;
    }

    // 翻译
    public static function translate($obj = null , $language = 'cn')
    {
        if (empty($obj)) {
            return ;
        }
        $obj = convert_obj($obj);
        // 多语言切换
        switch ($language)
        {
            case 'en':
                $obj = YouDaoTranslation::utilCnToEn($obj);
                break;
        }
        return $obj;
    }
}