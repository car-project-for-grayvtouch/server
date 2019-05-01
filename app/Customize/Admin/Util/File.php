<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 16:57
 */

namespace App\Customize\Admin\Util;

use function Admin\res_path;
use Core\Lib\UploadFile;
use Core\Lib\UploadImage;

use function Admin\config;

class File
{
    private $image = null;
    private $file = null;

    function __construct()
    {
        $dir = config('app.upload_dir');
        $this->image = new UploadImage($dir);
        $this->file = new UploadFile($dir);
    }

    // 保存图片
    public function image($image)
    {
        if (!UploadImage::isImage($image)) {
            return $this->response('不支持的文件类型，请上传图片' , 400);
        }
        $res = $this->image->save($image);
        $res['url'] = res_path($res['path']);
        return $this->response($res);
    }

    // 保存多张图片
    public function images($image)
    {
        if (!UploadImage::isImage($image)) {
            return $this->response('不支持的文件类型，请上传图片' , 400);
        }
        $res = $this->image->saveAll($image);

        $res['url'] = res_path($res['path']);
        return $this->response($res);
    }

    // 保存文件
    public function file($file)
    {
        if (UploadFile::emptyFile($file)) {
            return $this->response('不支持的文件类型，请上传图片' , 400);
        }
        $res = $this->file->save($file);
        $res['url'] = res_path($res['path']);
        return $this->response($res);
    }

    // 响应
    public function response($data , $code = 200)
    {
        return compact('data' , 'code');
    }
}