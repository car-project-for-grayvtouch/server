<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/15
 * Time: 16:49
 */

return [
    'host' => 'http://xq.com/' ,
    // refresh token 保存时常
    'refresh_token_duration_type' => 'short' ,
    // 默认头像
    'avatar' => __DIR__ . '/../../../../public/static/image/avatar.jpg' ,
    // 数据长度限制
    'limit' => 20 ,
    // 默认权重
    'weight' => 0 ,
    // 测试 key
    'debug' => 'abc123' ,
    // 图片默认保存路径
    'image_dir' => __DIR__ . '/../../../../public/upload/image/' ,
    // 文件默认保存路径
    'file_dir' => __DIR__ . '/../../../../public/upload/file/' ,
];