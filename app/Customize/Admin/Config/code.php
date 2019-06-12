<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/15
 * Time: 21:07
 *
 *
 */
return [
    // 预定义状态 start-----------------------------------------
    /**
     * 1xx，信息，收到请求，继续处理
     */
    100 => 'Continue' ,
    101 => 'Switching Protocols' ,

    /**
     * 2xx，操作成功，行动被成功的接受，理解，允许
     */
    200 => 'OK' ,
    201 => 'Created' ,
    202 => 'Accepted' ,
    203 => 'Non-Authoriative Information' ,
    204 => 'No Conent' ,
    205 => 'Reset Content' ,
    206 => 'Partial Content' ,

    /**
     * 3xx，重定向，必须采取进一步的行动来完成请求
     */
    // 多种选择
    300 => 'Multiple Choices' ,
    // 永久转移
    301 => 'Moved Permanently' ,
    // 临时转移
    302 => 'Moved Temporarily' ,
    303 => 'See Other' ,
    304 => 'Not Modified' ,
    305 => 'use Proxy' ,

    /**
     * 4xx，客户端错误，请求包含语法错误或不满足要求
     */
    // 服务器不理解客户端的请求，未做任何处理。
    400 => 'Bad Request' ,
    // 用户未提供身份验证凭据，或者没有通过身份验证。
    401 => 'Unauthorized' ,
    402 => 'Payment Required' ,
    // 用户通过了身份验证，但是不具有访问资源所需的权限。
    403 => 'Forbidden' ,
    // 所请求的资源不存在，或不可用。
    404 => 'Not Found' ,
    // 用户已经通过身份验证，但是所用的 HTTP 方法不在他的权限之内。
    405 => 'Method Not Allowed' ,
    406 => 'Not Acceptable' ,
    407 => 'Proxy Authentication Required' ,
    408 => 'Request Time-out' ,
    409 => 'Conflict' ,
    // 所请求的资源已从这个地址转移，不再可用。
    410 => 'Gone' ,
    411 => 'Length Required' ,
    412 => 'Precondition Failed' ,
    413 => 'Request Entity Too Large' ,
    414 => 'Request-URI Too Large' ,
    // 客户端要求的返回格式不支持。比如，API 只能返回 JSON 格式，但是客户端要求返回 XML 格式。
    415 => 'Unsupported Media Type' ,
    // 客户端上传的附件无法处理，导致请求失败。
    422 => 'Unprocessable Entity' ,
    // 客户端的请求次数超过限额。
    429 => 'Too Many Requests' ,

    /**
     * 5xx，服务器错误，服务器显然未能完成有效的请求
     */
    // 客户端请求有效，服务器处理时发生意外
    500 => 'Internal Server Error' ,
    501 => 'Not Implemented' ,
    502 => 'Bad Gateway' ,
    // 服务器无法处理请求，一般用于网站维护状态
    503 => 'Service Unavailable' ,
    504 => 'Gateway Time-out' ,
    505 => 'HTTP Version not supported' ,
    // 预定义状态 end-----------------------------------------



    // 自定义状态 start-----------------------------------------
    460 => '客户端请求数据不满足要求，错误处理：错误提示' ,
    420 => 'WebSocket 远程接口返回的错误信息' ,
    // 自定义状态 end-----------------------------------------
];