<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 23:42
 */

namespace App\Http\Controllers\Mobile;


use App\Customize\Mobile\Http\Action\ArticleAction;
use function Mobile\error;
use function Mobile\form_error;
use function Mobile\success;
use function Mobile\config;


class Article extends Controller
{
    public function listForHome()
    {
        $param = $this->request->post();
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $res = ArticleAction::listForHome($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 媒体声音
    public function listForMedia()
    {
        $param = $this->request->post();
        $param['limit'] = $param['limit'] ?? config('app.limit');
        $param['language'] = $param['language'] ?? null;
        $res = ArticleAction::listForMedia($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function detail()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['language'] = $param['language'] ?? null;
        $res = ArticleAction::detail($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}