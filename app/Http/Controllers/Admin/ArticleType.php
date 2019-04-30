<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;


use App\Customize\Admin\Http\Action\ArticleTypeAction;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

use Illuminate\Validation\Validator;

class ArticleType extends Controller
{
    // 列表
    public function list()
    {
        $param = $this->request->query();
        $param['id']    = $param['id'] ?? '';
        $param['p_id']  = $param['p_id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $res = ArticleTypeAction::list($param);
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
        $param = $this->request->post();
        $param['name']  = $param['name'] ?? '';
        $param['hidden'] = $param['hidden'] ?? '';
        $param['p_id'] = $param['p_id'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = ArticleTypeAction::add($param);
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
        $param = $this->request->post();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['hidden'] = $param['hidden'] ?? '';
        $param['p_id'] = $param['p_id'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = ArticleTypeAction::edit($param);
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
        $param = $this->request->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = ArticleTypeAction::del($param);
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
        $res = ArticleTypeAction::detail($id);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}