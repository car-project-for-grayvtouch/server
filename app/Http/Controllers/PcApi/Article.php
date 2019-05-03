<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 23:42
 */

namespace App\Http\Controllers\PcApi;


use App\Customize\PcApi\Http\Action\ArticleAction;
use function PcApi\error;
use function PcApi\form_error;
use function PcApi\success;

class Article extends Controller
{
    public function listForHome()
    {
        $res = ArticleAction::listForHome();
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
        $res = ArticleAction::listForMedia();
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