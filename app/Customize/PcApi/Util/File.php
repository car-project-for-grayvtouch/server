<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 16:57
 */

namespace App\Customize\PcApi\Util;


use Core\Lib\UploadFile;
use Core\Lib\UploadImage;

use function PcApi\res_path;
use function PcApi\config;
use function PcApi\res_url;

class File
{
    private $image = null;
    private $file = null;

    function __construct()
    {
        $this->image = new UploadImage(config('app.upload_dir'));
        $this->file = new UploadFile(config('app.upload_dir'));
    }

    // 保存图片
    public function image($image)
    {
        if (!UploadImage::isImage($image)) {
            return $this->response('不支持的文件类型，请上传图片' , 400);
        }
        $res = $this->image->save($image);
        $res['path'] = res_path($res['path']);
        $res['url'] = res_url($res['path']);
        return $this->response($res);
    }

    // 保存文件
    public function file($file)
    {
        if (UploadFile::emptyFile($file)) {
            return $this->response('不支持的文件类型，请上传图片' , 400);
        }
        $res = $this->file->save($file);
        $res['path'] = res_path($res['path']);
        $res['url'] = res_url($res['path']);
        return $this->response($res);
    }

    // 响应
    public function response($data , $code = 200)
    {
        return compact('data' , 'code');
    }
}