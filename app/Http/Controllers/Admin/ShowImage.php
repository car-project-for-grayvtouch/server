<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/21
 * Time: 9:44
 */

namespace App\Http\Controllers\Admin;

use function Admin\error;
use function Admin\success;
use function Admin\form_error;

use App\Customize\Admin\Http\Action\ShowImageAction;
use Illuminate\Validation\Validator;


class ShowImage extends Controller
{
    // 获取登录用户所需要的相关信息
    public function list()
    {
        $param = $this->request->query();
        $param['id']        = $param['id'] ?? '';
        $param['order']        = $param['order'] ?? 'id|desc';
        $res = ShowImageAction::list($param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 登录
    public function add()
    {
        $param = $this->request->post();
        $param['platform_id'] = $param['platform_id'] ?? '';
        $param['position'] = $param['position'] ?? '';
        $param['link'] = $param['link'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = ShowImageAction::add($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 获取登录用户所需要的相关信息
    public function detail($id)
    {
        $res = ShowImageAction::detail($id);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id']        = $param['id'] ?? '';
        $param['platform_id'] = $param['platform_id'] ?? '';
        $param['position'] = $param['position'] ?? '';
        $param['link'] = $param['link'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = ShowImageAction::edit($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function image()
    {
        $param = $this->request->post();
        $param['id']  = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['size']  = $param['size'] ?? '';
        $param['mime']  = $param['mime'] ?? '';
        $param['path']  = $param['path'] ?? '';
        $res = ShowImageAction::image($param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function del()
    {
        $param = $this->request->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = ShowImageAction::del($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}