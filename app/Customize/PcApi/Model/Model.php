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
use function extra\has_cn;
use function extra\is_http;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Traversable;

class Model extends BaseModel implements ModelInterface
{
    public static function multiple($list)
    {
        foreach ($list as &$v)
        {
            $v = static::single($v);
        }
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('不支持的类型');
        }
    }

    // 更新
    public static function updateById($id , array $param = [])
    {
        return static::where('id' , $id)
            ->update($param);
    }

    public static function getAll()
    {

        $res = static::all();
        $res = convert_obj($res);
        static::multiple($res);
        return $res;
    }

    public static function findById($id)
    {
        $res = static::find($id);
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        static::single($res);
        return $res;
    }
}