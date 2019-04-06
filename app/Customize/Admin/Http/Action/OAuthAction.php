<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/29
 * Time: 11:00
 */

namespace App\Customize\Admin\Http\Action;

use function Admin\get_form_error;
use App\Customize\Admin\Model\AdminToken;
use App\Customize\Admin\Util\OAuth as OAuthUtil;

use Validator;

class OAuthAction extends Action
{
    public static function refreshToken(array $param)
    {
        $validator = Validator::make($param , [
            'refresh_token' => 'required' ,
        ] , [
            'refresh_token.required' => 'refresh token 尚未提供'
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = AdminToken::findByRefreshToken($param['refresh_token']);
        if (empty($m)) {
            return self::error('refresh token 无效');
        }
        $time = time();
        $datetime = date('Y-m-d H:i:s' , $time);
        // 检查 refresh token 是否过期
        if ($m->refresh_token_expire < $datetime) {
            // 删除该条记录
            $m->delete();
            return self::error('refresh token 已经过期');
        }
        // 重新生成 token
        $token = OAuthUtil::token();
        // 更新
        AdminToken::updateById($m->id , [
            'token'         => $token->token ,
            'token_expire'  => $token->tokenExpire
        ]);
        return self::success([
            'token'         => $token->token ,
            'refresh_token' => $m->refresh_token
        ]);
    }
}