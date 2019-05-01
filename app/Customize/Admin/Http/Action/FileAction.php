<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/1
 * Time: 11:34
 */

namespace App\Customize\Admin\Http\Action;


use function Admin\res_url;
use App\Customize\Admin\Util\File;

class FileAction extends Action
{
    // 保存单张图片
    public static function image(array $image)
    {
        $file = new File();
        $res = $file->image($image);
        return $res;
    }

    // 保存单个文件
    public static function file(array $file)
    {
        $file_ins = new File();
        $res = $file_ins->file($file);
        return $res;
    }

    // 保存多张图片
    public static function imageForWangEditor(array $images)
    {
        $file = new File();
        $res = $file->images($images);
        if ($res['code'] != 200) {
            return $res;
        }
        $res = $res['data'];
        $_res = [];
        foreach ($res['success'] as $v)
        {
            $_res[] = res_url($v['url']);
        }
        return self::success([
            'errno' => 0 ,
            'data' => $_res
        ]);
    }
}