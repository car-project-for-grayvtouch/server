<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Validation\Validator;


use App\Customize\Admin\Http\Action\CarModelAction;

use function Admin\success;
use function Admin\error;
use function Admin\form_error;

class CarModel extends Controller
{
    // 列表
    public function list()
    {
        $param = $this->request->query();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['order'] = $param['order'] ?? 'id|desc';
        $res = CarModelAction::list($param);
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
        $param['brand_id']  = $param['brand_id'] ?? '';
        $param['car_series_id']  = $param['car_series_id'] ?? '';
        $param['year']  = $param['year'] ?? '';
        $param['price']  = $param['price'] ?? '';
        $param['car_type_id']  = $param['car_type_id'] ?? '';
        $param['gearbox']  = $param['gearbox'] ?? '';
        $param['size']  = $param['size'] ?? '';
        $param['driver_type']  = $param['driver_type'] ?? '';
        $param['door_count']  = $param['door_count'] ?? '';
        $param['seat_count']  = $param['seat_count'] ?? '';
        $param['high_speed_fuel_consumption']  = $param['high_speed_fuel_consumption'] ?? '';
        $param['city_fuel_consumption']  = $param['city_fuel_consumption'] ?? '';
        $param['engine']  = $param['engine'] ?? '';
        $param['company']  = $param['company'] ?? '';
        $param['level']  = $param['level'] ?? '';
        $param['wheelbase']  = $param['wheelbase'] ?? '';
        $param['displacement']  = $param['displacement'] ?? '';
        $param['intake_type']  = $param['intake_type'] ?? '';
        $param['cylinder_count']  = $param['cylinder_count'] ?? '';
        $param['maximum_horsepower']  = $param['maximum_horsepower'] ?? '';
        $param['maximum_torque']  = $param['maximum_torque'] ?? '';
        $param['fuel_type']  = $param['fuel_type'] ?? '';
        $param['engine_anti_theft_system']  = $param['engine_anti_theft_system'] ?? '';
        $param['assist_type']  = $param['assist_type'] ?? '';
        $param['front_suspension_type']  = $param['front_suspension_type'] ?? '';
        $param['back_suspension_type']  = $param['back_suspension_type'] ?? '';
        $param['front_brake_type']  = $param['front_brake_type'] ?? '';
        $param['back_brake_type']  = $param['back_brake_type'] ?? '';
        $param['tire_desc']  = $param['tire_desc'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        // 车辆配置，json 数组(id)
        $param['configuration']  = $param['configuration'] ?? '';

        $res = CarModelAction::add($param);
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
        $param = $this->request->post();
        $param['name']  = $param['name'] ?? '';
        $param['brand_id']  = $param['brand_id'] ?? '';
        $param['car_series_id']  = $param['car_series_id'] ?? '';
        $param['year']  = $param['year'] ?? '';
        $param['price']  = $param['price'] ?? '';
        $param['car_type_id']  = $param['car_type_id'] ?? '';
        $param['gearbox']  = $param['gearbox'] ?? '';
        $param['size']  = $param['size'] ?? '';
        $param['driver_type']  = $param['driver_type'] ?? '';
        $param['door_count']  = $param['door_count'] ?? '';
        $param['seat_count']  = $param['seat_count'] ?? '';
        $param['high_speed_fuel_consumption']  = $param['high_speed_fuel_consumption'] ?? '';
        $param['city_fuel_consumption']  = $param['city_fuel_consumption'] ?? '';
        $param['engine']  = $param['engine'] ?? '';
        $param['company']  = $param['company'] ?? '';
        $param['level']  = $param['level'] ?? '';
        $param['wheelbase']  = $param['wheelbase'] ?? '';
        $param['displacement']  = $param['displacement'] ?? '';
        $param['intake_type']  = $param['intake_type'] ?? '';
        $param['cylinder_count']  = $param['cylinder_count'] ?? '';
        $param['maximum_horsepower']  = $param['maximum_horsepower'] ?? '';
        $param['maximum_torque']  = $param['maximum_torque'] ?? '';
        $param['fuel_type']  = $param['fuel_type'] ?? '';
        $param['engine_anti_theft_system']  = $param['engine_anti_theft_system'] ?? '';
        $param['assist_type']  = $param['assist_type'] ?? '';
        $param['front_suspension_type']  = $param['front_suspension_type'] ?? '';
        $param['back_suspension_type']  = $param['back_suspension_type'] ?? '';
        $param['front_brake_type']  = $param['front_brake_type'] ?? '';
        $param['back_brake_type']  = $param['back_brake_type'] ?? '';
        $param['tire_desc']  = $param['tire_desc'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        // 车辆配置，json 数组(id)
        $param['configuration']  = $param['configuration'] ?? '';

        $res = CarModelAction::edit($param);
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
        $res = CarModelAction::del($param);
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
        $res = CarModelAction::detail($id);
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
        $param = $this->request->query();
        $param['car_series_id'] = $param['car_series_id'] ?? '';
        $res = CarModelAction::all($param);
        if ($res['code'] != 200) {
            if ($res['data'] instanceof Validator) {
                return form_error($res['data']);
            }
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}