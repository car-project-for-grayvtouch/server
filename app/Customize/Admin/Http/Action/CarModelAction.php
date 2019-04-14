<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/3
 * Time: 22:15
 */

namespace App\Customize\Admin\Http\Action;


use Exception;
use function extra\array_unit;
use function Admin\config;
use function Admin\get_form_error;
use function Admin\parse_order;

use App\Customize\Admin\Model\CarModel;
use App\Customize\Admin\Model\CarModelWithConfiguration;

use function extra\check_num;
use function extra\check_year;
use DB;
use Validator;

class CarModelAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = CarModel::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'name'          => 'required' ,
            'brand_id'      => 'required' ,
            'car_series_id' => 'required' ,
            'car_type_id'   => 'required' ,
            'year'          => 'required' ,
            'price'         => 'required' ,
            'gearbox'         => 'required' ,
            'driver_type'         => 'required' ,
            'door_count'         => 'required' ,
            'seat_count'         => 'required' ,
            'engine'         => 'required' ,
            'level'         => 'required' ,
            'displacement'         => 'required' ,
            'fuel_type'         => 'required' ,
        ] , [
            'name.required'         => 'name 尚未提供' ,
            'brand_id.required'     => 'brand_id 尚未提供' ,
            'car_series_id.required' => 'car_series_id 尚未提供' ,
            'car_type_id.required'  => 'car_type_id 尚未提供' ,
            'year.required'         => 'year 尚未提供' ,
            'price.required'        => 'price 尚未提供' ,
            'gearbox.required'      => 'gearbox 尚未提供' ,
            'driver_type.required'  => 'driver_type 尚未提供' ,
            'door_count.required'   => 'door_count 尚未提供' ,
            'seat_count.required'   => 'seat_count 尚未提供' ,
            'engine.required'       => 'engine 尚未提供' ,
            'level.required'        => 'level 尚未提供' ,
            'displacement.required' => 'displacement 尚未提供' ,
            'fuel_type.required'    => 'fuel_type 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_year($param['year'])) {
            return self::error([
                'year' => '年份格式错误' ,
            ]);
        }
        if (!check_num($param['price'] , 2)) {
            return self::error([
                'price' => '价格格式错误'
            ]);
        }
        $param['configuration'] = json_decode($param['configuration'] , true);
        $param['weight'] = $param['weight'] != '' ? intval($param['weight']) : config('app.weight');
        try {
            DB::beginTransaction();
            $id = CarModel::insertGetId(array_unit($param , [
                'name' ,
                'brand_id' ,
                'car_series_id' ,
                'car_type_id' ,
                'year' ,
                'price' ,
                'gearbox' ,
                'size' ,
                'driver_type' ,
                'door_count' ,
                'seat_count' ,
                'high_speed_fuel_consumption' ,
                'city_fuel_consumption' ,
                'engine' ,
                'company' ,
                'level' ,
                'wheelbase' ,
                'displacement' ,
                'intake_type' ,
                'cylinder_count' ,
                'maximum_horsepower' ,
                'maximum_torque' ,
                'fuel_type' ,
                'engine_anti_theft_system' ,
                'assist_type' ,
                'front_suspension_type' ,
                'back_suspension_type' ,
                'front_brake_type' ,
                'back_brake_type' ,
                'tire_desc' ,
                'weight'
            ]));
            if (!empty($param['configuration'])) {
                foreach ($param['configuration'] as $v)
                {
                    CarModelWithConfiguration::insert([
                        'car_model_id'          => $id ,
                        'car_configuration_id'  => $v
                    ]);
                }
            }
            DB::commit();
            return self::success($id);
        } catch(Exception $e) {
            DB::rollback();
        }
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'name'          => 'required' ,
            'brand_id'      => 'required' ,
            'car_series_id' => 'required' ,
            'car_type_id'   => 'required' ,
            'year'          => 'required' ,
            'price'         => 'required' ,
            'gearbox'         => 'required' ,
            'driver_type'         => 'required' ,
            'door_count'         => 'required' ,
            'seat_count'         => 'required' ,
            'engine'         => 'required' ,
            'level'         => 'required' ,
            'displacement'         => 'required' ,
            'fuel_type'         => 'required' ,
        ] , [
            'name.required'         => 'name 尚未提供' ,
            'brand_id.required'     => 'brand_id 尚未提供' ,
            'car_series_id.required' => 'car_series_id 尚未提供' ,
            'car_type_id.required'  => 'car_type_id 尚未提供' ,
            'year.required'         => 'year 尚未提供' ,
            'price.required'        => 'price 尚未提供' ,
            'gearbox.required'      => 'gearbox 尚未提供' ,
            'driver_type.required'  => 'driver_type 尚未提供' ,
            'door_count.required'   => 'door_count 尚未提供' ,
            'seat_count.required'   => 'seat_count 尚未提供' ,
            'engine.required'       => 'engine 尚未提供' ,
            'level.required'        => 'level 尚未提供' ,
            'displacement.required' => 'displacement 尚未提供' ,
            'fuel_type.required'    => 'fuel_type 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = CarModel::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录');
        }
        if (!check_year($param['year'])) {
            return self::error([
                'year' => '年份格式错误' ,
            ]);
        }
        if (!check_num($param['price'] , 2)) {
            return self::error([
                'price' => '价格格式错误'
            ]);
        }
        $param['configuration'] = json_decode($param['configuration'] , true);
        $param['weight'] = $param['weight'] == '' ? $m->weight : $param['weight'];
        try {
            DB::beginTransaction();
            CarModel::updateById($param['id'] , array_unit($param , [
                'name' ,
                'brand_id' ,
                'car_series_id' ,
                'car_type_id' ,
                'year' ,
                'price' ,
                'gearbox' ,
                'size' ,
                'driver_type' ,
                'door_count' ,
                'seat_count' ,
                'high_speed_fuel_consumption' ,
                'city_fuel_consumption' ,
                'engine' ,
                'company' ,
                'level' ,
                'wheelbase' ,
                'displacement' ,
                'intake_type' ,
                'cylinder_count' ,
                'maximum_horsepower' ,
                'maximum_torque' ,
                'fuel_type' ,
                'engine_anti_theft_system' ,
                'assist_type' ,
                'front_suspension_type' ,
                'back_suspension_type' ,
                'front_brake_type' ,
                'back_brake_type' ,
                'tire_desc' ,
                'weight'
            ]));
            CarModelWithConfiguration::delByCarModelId($param['id']);
            foreach ($param['configuration'] as $v)
            {
                CarModelWithConfiguration::insert([
                    'car_model_id'          => $param['id'] ,
                    'car_configuration_id'  => $v
                ]);
            }
            DB::commit();
            return self::success($param['id']);
        } catch(Exception $e) {
            DB::rollback();
        }
    }

    public static function del(array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ] , [
            'id_list.required' => 'id_list 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        $res = CarModel::destroy($id_list);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = CarModel::findById($id);
        if (empty($res)) {
            return self::error("未找到 id 对应记录");
        }
        return self::success($res);
    }

    public static function all(array $param)
    {
        $res = CarModel::getAll($param);
        return self::success($res);
    }
}