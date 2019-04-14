<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/3
 * Time: 22:15
 */

namespace App\Customize\Admin\Http\Action;


use App\Customize\Admin\Model\CarImage;
use App\Customize\Admin\Model\CarService;
use Exception;
use function extra\array_unit;
use function Admin\config;
use function Admin\get_form_error;
use function Admin\parse_order;

use App\Customize\Admin\Model\Car;

use function extra\check_num;
use DB;
use Validator;

class CarAction extends Action
{
    public static function list(array $param)
    {
        $order = parse_order($param['order']);
        $res = Car::list($param , $order , config('app.limit'));
        return self::success($res);
    }

    public static function add(array $param)
    {
        $validator = Validator::make($param , [
            'title'          => 'required' ,
            'brand_id'      => 'required' ,
            'car_series_id' => 'required' ,
            'car_model_id'  => 'required' ,
            'price'         => 'required' ,
            'mileage'       => 'required' ,
            'transfer_record'   => 'required' ,
            'color'             => 'required' ,
            'sale_point'        => 'required' ,
        ] , [
            'title.required'         => '必须' ,
            'brand_id.required'     => '必须' ,
            'car_series_id.required' => '必须' ,
            'car_model_id.required'  => '必须' ,
            'price.required'    => '必须' ,
            'mileage.required'  => '必须' ,
            'transfer_record.required'  => '必须' ,
            'color.required'        => '必须' ,
            'sale_point.required'   => '必须' ,

        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (!check_num($param['price'] , 2)) {
            return self::error([
                'price' => '价格格式错误'
            ]);
        }
        $param['service'] = json_decode($param['service'] , true);
        $param['service'] = empty($param['service']) ? [] : $param['service'];
        try {
            DB::beginTransaction();
            $id = Car::insertGetId(array_unit($param , [
                'title' ,
                'brand_id' ,
                'car_series_id' ,
                'car_model_id' ,
                'price' ,
                'mileage' ,
                'transfer_record' ,
                'color' ,
                'sale_point' ,
            ]));
            foreach ($param['service'] as $v)
            {
                CarService::insert([
                    'car_id' => $id ,
                    'service_id' => $v
                ]);
            }
            return self::success($id);
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    public static function edit(array $param)
    {
        $validator = Validator::make($param , [
            'title'          => 'required' ,
            'brand_id'      => 'required' ,
            'car_series_id' => 'required' ,
            'car_model_id'  => 'required' ,
            'price'         => 'required' ,
            'mileage'       => 'required' ,
            'transfer_record'   => 'required' ,
            'color'             => 'required' ,
            'sale_point'        => 'required' ,
        ] , [
            'title.required'         => '必须' ,
            'brand_id.required'     => '必须' ,
            'car_series_id.required' => '必须' ,
            'car_model_id.required'  => '必须' ,
            'price.required'    => '必须' ,
            'mileage.required'  => '必须' ,
            'transfer_record.required'  => '必须' ,
            'color.required'        => '必须' ,
            'sale_point.required'   => '必须' ,

        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = Car::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录');
        }
        if (!check_num($param['price'] , 2)) {
            return self::error([
                'price' => '价格格式错误'
            ]);
        }
        $param['service'] = json_decode($param['service'] , true);
        $param['service'] = empty($param['service']) ? [] : $param['service'];
        try {
            DB::beginTransaction();
            Car::updateById($param['id'] , array_unit($param , [
                'title' ,
                'brand_id' ,
                'car_series_id' ,
                'car_model_id' ,
                'price' ,
                'mileage' ,
                'transfer_record' ,
                'color' ,
                'sale_point' ,
            ]));
            CarService::delByCarId($param['id']);
            foreach ($param['service'] as $v)
            {
                CarService::insert([
                    'car_id' => $param['id'] ,
                    'service_id' => $v
                ]);
            }
            DB::commit();
            return self::success($param['id']);
        } catch (Exception $e) {
            DB::rollback();
            throw $e;
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
        $res = Car::destroy($id_list);
        return self::success($res);
    }

    public static function detail($id)
    {
        $res = Car::findById($id);
        if (empty($res)) {
            return self::error("未找到 id 对应记录");
        }
        return self::success($res);
    }

    public static function all()
    {
        $res = Car::getAll();
        return self::success($res);
    }

    public static function thumb(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'image' => 'required' ,
        ] , [
            'id.required' => 'id 尚未提供' ,
            'image.required' => 'image 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = Car::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        // todo 删除磁盘上文件
        $param['thumb'] = $param['image'];
        Car::updateById($param['id'] , array_unit($param , [
            'thumb'
        ]));
        return self::success();
    }

    public static function image(array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'image' => 'required' ,
            'thumb' => 'required' ,
        ] , [
            'id.required' => 'id 尚未提供' ,
            'image.required' => 'image 尚未提供' ,
            'thumb.required' => 'thumb 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        $m = Car::find($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $param['image'] = json_decode($param['image'] , true);
        if (empty($param['image'])) {
            return self::error('image 尚未提供');
        }
        $range = ['y' , 'n'];
        $param['thumb'] = in_array($param['thumb'] , $range) ? $param['thumb'] : 'y';
        try {
            DB::beginTransaction();
            foreach ($param['image'] as $k => $v)
            {
                CarImage::insert(array_unit(array_merge([
                    'car_id' => $param['id']
                ] , $v) , [
                    'car_id' ,
                    'name' ,
                    'mime' ,
                    'size' ,
                    'path' ,
                    'url' ,
                ]));
                if ($k == 0 && $param['thumb'] == 'y') {
                    // todo 删除磁盘上的图片
                    Car::updateById($param['id'] , [
                        'thumb' => $v['url']
                    ]);
                }
            }
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollback();
            throw $e;
        }
    }

    // 删除图片
    public static function delImage(array $param)
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
        $res = CarImage::destroy($id_list);
        return self::success($res);
    }
}