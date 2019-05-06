<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 22:39
 */

namespace App\Customize\PcApi\Http\Action;


use function PcApi\get_form_error;
use App\Customize\PcApi\Model\User;
use function core\array_unit;
use function PcApi\user;

use Hash;
use Validator;

class UserAction extends Action
{
    public static function info(array $param)
    {
        $res = User::findById(user()->id , $param['language']);
        return self::success($res);
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'sex' => 'required' ,
        ] , [
            'sex.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        User::updateById(user()->id , array_unit($param , [
            'nickname' ,
            'sex' ,
            'birthday' ,
            'area_code' ,
        ]));
        return self::success();
    }

    public static function updatePassword(array $param)
    {
        $validator = Validator::make($param , [
            'o_password' => 'required' ,
            'password' => 'required' ,
            'confirm_password' => 'required' ,
        ] , [
            'o_password.required' => '必须' ,
            'password.required' => '必须' ,
            'confirm_password.required' => '必须' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if ($param['password'] != $param['confirm_password']) {
            return self::error([
                'password' => '两次输入的密码不一致' ,
            ]);
        }
        if (!Hash::check($param['o_password'] , user()->password)) {
            return self::error([
                'o_password' => '旧密码错误'
            ]);
        }
        $password = Hash::make($param['password']);
        User::updateById(user()->id , [
            'password' => $password
        ]);
        return self::success();
    }

    public static function image(array $param)
    {
        $validator = Validator::make($param , [
            'image' => 'required' ,
        ] , [
            'image.required' => '请上传图片' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $param['avatar'] = $param['image'];
        User::updateById(user()->id , array_unit($param , [
            'avatar'
        ]));
        return self::success();
    }
}