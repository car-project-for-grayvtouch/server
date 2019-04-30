<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;


use Illuminate\Validation\Validator;

use App\Customize\Admin\Http\Action\ArticleAction;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

class Article extends Controller
{
    // 列表
    public function list()
    {
        $param = $this->request->query();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['order'] = $param['order'] ?? 'id|desc';
        $res = ArticleAction::list($param);
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
        $param['source']  = $param['source'] ?? '';
        $param['article_type_id']  = $param['article_type_id'] ?? '';
        $param['hidden']  = $param['hidden'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        $param['is_link']  = $param['is_link'] ?? '';
        $param['link']  = $param['link'] ?? '';
        $res = ArticleAction::add($param);
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
        $param['source']  = $param['source'] ?? '';
        $param['article_type_id']  = $param['article_type_id'] ?? '';
        $param['hidden']  = $param['hidden'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        $param['is_link']  = $param['is_link'] ?? '';
        $param['link']  = $param['link'] ?? '';
        $res = ArticleAction::edit($param);
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
        $res = ArticleAction::del($param);
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
        $res = ArticleAction::detail($id);
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
        $res = ArticleAction::image($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}