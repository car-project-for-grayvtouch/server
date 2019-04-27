<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 16:46
 */

namespace App\Http\Controllers\Admin;


use App\Customize\Admin\Util\File as FileUtil;

use function Admin\error;
use function Admin\success;
use function Admin\res_url;

class File extends Controller
{
    // 单个：上传图片
    public function image()
    {
        $image = isset($_FILES['image']) ? $_FILES['image'] : [];
        $file = new FileUtil();
        $res = $file->image($image);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 单张：上传文件
    public function file()
    {
        $file = isset($_FILES['file']) ? $_FILES['file'] : [];
        $_file = new FileUtil();
        $res = $_file->file($file);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}