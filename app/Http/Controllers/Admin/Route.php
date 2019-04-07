<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;

use App\Customize\Admin\Http\Action\RouteAction;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

use Illuminate\Validation\Validator;

class Route extends Controller
{
    // 列表
    public function list()
    {
        $param = request()->query();
//        print_r($param);
        $param['id']    = $param['id'] ?? '';
        $param['p_id']  = $param['p_id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $res = RouteAction::list($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 添加
    public function add()
    {
        $param = request()->post();
        $param['name']  = $param['name'] ?? '';
        $param['en']    = $param['en'] ?? '';
        $param['route']  = $param['route'] ?? '';
        $param['type']  = $param['type'] ?? '';
        $param['method'] = $param['method'] ?? '';
        $param['hidden'] = $param['hidden'] ?? '';
        $param['enable'] = $param['enable'] ?? '';
        $param['menu'] = $param['menu'] ?? '';
        $param['p_id'] = $param['p_id'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = RouteAction::add($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 编辑
    public function edit()
    {
        $param = request()->post();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['en']    = $param['en'] ?? '';
        $param['route']  = $param['route'] ?? '';
        $param['type']  = $param['type'] ?? '';
        $param['method'] = $param['method'] ?? '';
        $param['hidden'] = $param['hidden'] ?? '';
        $param['enable'] = $param['enable'] ?? '';
        $param['menu']  = $param['menu'] ?? '';
        $param['p_id']  = $param['p_id'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = RouteAction::edit($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 更新图标
    public function saveImage()
    {
        $param = request()->post();
        $param['id']    = $param['id'] ?? '';
        $param['image'] = $param['image'] ?? '';
        $param['type'] = $param['type'] ?? '';
        $res = RouteAction::saveImage($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 删除
    public function del()
    {
        $param = request()->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = RouteAction::del($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 详情
    public function detail($id)
    {
        $res = RouteAction::detail($id);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}