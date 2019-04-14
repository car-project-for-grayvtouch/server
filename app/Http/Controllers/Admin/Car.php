<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Validation\Validator;

use App\Customize\Admin\Http\Action\CarAction;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

class Car extends Controller
{
    // 列表
    public function list()
    {
        $param = request()->query();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['order'] = $param['order'] ?? 'id|desc';
        $res = CarAction::list($param);
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
        $param['title']          = $param['title'] ?? '';
        $param['brand_id']      = $param['brand_id'] ?? '';
        $param['car_series_id'] = $param['car_series_id'] ?? '';
        $param['car_model_id']  = $param['car_model_id'] ?? '';
        $param['price']         = $param['price'] ?? '';
        $param['mileage']       = $param['mileage'] ?? '';
        $param['transfer_record']  = $param['transfer_record'] ?? '';
        $param['color']         = $param['color'] ?? '';
        $param['sale_point']    = $param['sale_point'] ?? '';
        $param['service']    = $param['service'] ?? '';
        $res = CarAction::add($param);
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
        $param['title']          = $param['title'] ?? '';
        $param['brand_id']      = $param['brand_id'] ?? '';
        $param['car_series_id'] = $param['car_series_id'] ?? '';
        $param['car_model_id']  = $param['car_model_id'] ?? '';
        $param['price']         = $param['price'] ?? '';
        $param['mileage']       = $param['mileage'] ?? '';
        $param['transfer_record']  = $param['transfer_record'] ?? '';
        $param['color']         = $param['color'] ?? '';
        $param['sale_point']    = $param['sale_point'] ?? '';
        $param['service']    = $param['service'] ?? '';
        $res = CarAction::edit($param);
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
        $res = CarAction::del($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function delImage()
    {
        $param = request()->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = CarAction::delImage($param);
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
        $res = CarAction::detail($id);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function thumb()
    {
        $param = request()->post();
        $param['id'] = $param['id'] ?? '';
        $param['image'] = $param['image'] ?? '';
        $res = CarAction::thumb($param);
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
        $param = request()->post();
        $param['id'] = $param['id'] ?? '';
        $param['image'] = $param['image'] ?? '';
        $res = CarAction::image($param);
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
        $res = CarAction::all();
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}