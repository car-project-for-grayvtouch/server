<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/8
 * Time: 16:44
 */

namespace App\Customize\Admin\Http\Action;

use App\Customize\Admin\Model\Brand;

use App\Customize\Admin\Model\CarConfiguration;
use App\Customize\Admin\Model\CarConfigurationGroup;
use App\Customize\Admin\Model\CarModel;
use App\Customize\Admin\Model\CarSeries;
use App\Customize\Admin\Model\CarSeriesGroup;
use App\Customize\Admin\Model\CarType;
use App\Customize\Admin\Model\DetectionGroup;
use App\Customize\Admin\Model\DetectionItem;
use App\Customize\Admin\Model\DetectionModule;
use App\Customize\Admin\Model\DetectionPos;
use App\Customize\Admin\Model\Platform;
use App\Customize\Admin\Model\Service;
use App\Customize\Admin\Model\Story;
use App\Customize\Admin\Model\Translation;
use App\Customize\Admin\Util\YouDaoTranslation;
use function core\convert_obj;
use function extra\has_cn;
use function extra\is_http;
use Iterator;

class TranslationAction extends Action
{
    public static function translate()
    {
        // 不限制运行时间
        ini_set('max_execution_time' , 0);
        // 品牌
        $car_brand = Brand::all();
        // 车系
        $car_series = CarSeries::all();
        // 车系分组
        $car_series_group = CarSeriesGroup::all();
        // 车型
        $car_model = CarModel::all();
        // 车辆类型
        $car_type = CarType::all();
        // 车辆配置
        $car_configuration = CarConfiguration::all();
        // 车辆配置分组
        $car_configuration_group = carConfigurationGroup::all();
        // 检测模块
        $detection_module = DetectionModule::all();
        // 检测位置
        $detection_position = DetectionPos::all();
        // 检测位置分组
        $detection_group = DetectionGroup::all();
        // 检测项
        $detection_item = DetectionItem::all();
        // 平台
        $platform = Platform::all();
        // 服务
        $service = Service::all();
        // 故事
        $story = Story::all();

        self::util_translate($car_brand);
        self::util_translate($car_series);
        self::util_translate($car_series_group);
        self::util_translate($car_model);
        self::util_translate($car_type);
        self::util_translate($car_configuration);
        self::util_translate($car_configuration_group);
        self::util_translate($detection_module);
        self::util_translate($detection_position);
        self::util_translate($detection_group);
        self::util_translate($detection_item);
        self::util_translate($platform);
        self::util_translate($service);
        self::util_translate($story);
        return self::success('数据测试成功');
    }

    // 是否需要翻译
    public static function util_needTranslate($v)
    {
        if (!is_scalar($v)) {
            return false;
        }
        if (is_numeric($v)) {
            return false;
        }
        if (is_http($v)) {
            return false;
        }
        if (!has_cn($v)) {
            return false;
        }
        return true;
    }

    // 翻译
    public static function util_translate($objs)
    {
        $source_language = 'cn';
        $target_language = 'en';
        $objs = convert_obj($objs);
        foreach ($objs  as $v)
        {
            foreach ($v as $v1)
            {
                if (!self::util_needTranslate($v1)) {
                    continue ;
                }
                // 需要翻译
                $original = $v1;
                $m = Translation::findByOriginalForCnToEn($original);
                // 检查是否存在
                if (!empty($m)) {
                    continue;
                }
                $translation = YouDaoTranslation::cnToEn($original);
                // 保存到翻译表
                $data = [
                    'source_language' => $source_language ,
                    'target_language' => $target_language ,
                    'original' => $original ,
                    'translation' => $translation
                ];
                Translation::insert($data);
            }
        }
    }
}