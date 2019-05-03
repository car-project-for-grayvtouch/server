<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;


use Illuminate\Validation\Validator;

use App\Customize\Admin\Http\Action\StoryAction;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

class Story extends Controller
{
    // 列表
    public function list()
    {
        $param = $this->request->query();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['order'] = $param['order'] ?? 'id|desc';
        $res = StoryAction::list($param);
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
        $param['title']  = $param['title'] ?? '';
        $param['content']  = $param['content'] ?? '';
        $param['username']  = $param['username'] ?? '';
        $param['score']  = $param['score'] ?? '';
        $param['hidden']  = $param['hidden'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        $res = StoryAction::add($param);
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
        $param['title']  = $param['title'] ?? '';
        $param['content']  = $param['content'] ?? '';
        $param['username']  = $param['username'] ?? '';
        $param['score']  = $param['score'] ?? '';
        $param['hidden']  = $param['hidden'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        $res = StoryAction::edit($param);
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
        $res = StoryAction::del($param);
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
        $res = StoryAction::detail($id);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 获取所有的角色
    public function all()
    {
        $res = StoryAction::all();
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
        $param['id'] = $param['id'] ?? '';
        $param['image'] = $param['image'] ?? '';
        $res = StoryAction::image($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}