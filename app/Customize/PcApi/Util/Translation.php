<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/13
 * Time: 22:28
 */

namespace App\Customize\PcApi\Util;

use App\Customize\PcApi\Model\Translation as TranslationModel;
use function core\obj_to_array;
use Exception;
use function extra\has_cn;
use function extra\is_http;


class Translation
{

    // 翻译
    public static function translate($value = null , string $source = 'cn' , string $language = 'cn')
    {
        if (empty($value)) {
            return ;
        }
        $scalar = is_scalar($value);
        if ($source == 'cn' && $language == 'en') {
            // 中文 => 英文
            return $scalar ? self::cnToEn($value) : self::cnToEns($value);
        }
        return $value;
    }

    // 标量值：中文 => 英文
    private static function cnToEn($value = '')
    {
        return self::save($value);
    }

    // 对象，属性值：中文 => 英文
    private static function cnToEns($value = null)
    {
        if (empty($value)) {
            return $value;
        }
        $value = obj_to_array($value);
        foreach ($value as &$v)
        {
            if (is_array($v)) {
                 $v = self::cnToEns($v);
                continue ;
            }
            $v = self::save($v);
        }
        return $value;
    }

    // 保存到映射表
    private static function save($value = '')
    {
        if (!is_scalar($value)) {
            return $value;
        }
        if (is_numeric($value)) {
            return $value;
        }
        if (is_http($value)) {
            return $value;
        }
        if (!has_cn($value)) {
            return $value;
        }
        $original = $value;
        $m = TranslationModel::findByOriginalForCnToEn($original);
        // 检查是否存在
        if (!empty($m)) {
            return $m->translation;
        }
        $translation = YouDaoTranslation::cnToEn($value);
        if (!empty($translation)) {
            $source_language = 'cn';
            $target_language = 'en';
            // 保存到翻译表
            $data = [
                'source_language' => $source_language ,
                'target_language' => $target_language ,
                'original' => $original ,
                'translation' => $translation
            ];
            TranslationModel::insert($data);
        }
        return $translation;
    }
}