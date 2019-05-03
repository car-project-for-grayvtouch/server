<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/5/2
 * Time: 23:19
 */

namespace App\Customize\Admin\Http\Action;


use function Admin\get_form_error;
use App\Customize\Admin\Model\AdminUser;
use App\Customize\Admin\Model\Article;
use App\Customize\Admin\Model\RecommendationApplication;
use App\Customize\Admin\Model\Reservation;
use App\Customize\Admin\Model\SaleApplication;
use App\Customize\Admin\Model\StagingBuyApplication;
use App\Customize\Admin\Model\User;
use App\Customize\Admin\Model\Car;

use function core\get_month_days;
use function core\get_month_for_quarter;
use function core\get_month_for_quarterly;
use function core\get_quarter;
use function core\get_quarterly;
use Validator;

class PannelAction extends Action
{
    public static function info()
    {
        $today      = date('Y-m-d');
        $yesterday  = date_create('yesterday')->format('Y-m-d');

        // 今日：用户数
        $user_count_for_today                       = User::countByDate($today);
        $admin_user_count_for_today                 = AdminUser::countByDate($today);
        $car_count_for_today                        = Car::countByDate($today);
        $article_count_for_today                    = Article::countByDate($today);
        $sale_application_count_for_today           = SaleApplication::countByDate($today);
        $recommendation_application_count_for_today = RecommendationApplication::countByDate($today);
        $staging_buy_application_count_for_today     = StagingBuyApplication::countByDate($today);
        $reservation_count_for_today                = Reservation::countByDate($today);

        // 昨日：用户数
        $user_count_for_yesterday = User::countByDate($yesterday);
        $admin_user_count_for_yesterday = AdminUser::countByDate($yesterday);
        $car_count_for_yesterday = Car::countByDate($yesterday);
        $article_count_for_yesterday = Article::countByDate($yesterday);
        $sale_application_count_for_yesterday = SaleApplication::countByDate($yesterday);
        $recommendation_application_count_for_yesterday = RecommendationApplication::countByDate($yesterday);
        $staging_buy_application_count_for_yesterday = StagingBuyApplication::countByDate($yesterday);
        $reservation_count_for_yesterday = Reservation::countByDate($yesterday);

        // 全部
        $user_count         = User::count();
        $admin_user_count   = AdminUser::count();
        $car_count          = Car::count();
        $article_count      = Article::count();
        $sale_application_count             = SaleApplication::count();
        $recommendation_application_count   = RecommendationApplication::count();
        $staging_buy_application_count      = StagingBuyApplication::count();
        $reservation_count                  = Reservation::count();

        // 升降
        $flag_for_user          = self::util_flag($user_count_for_today , $user_count_for_yesterday);
        $flag_for_admin_user    = self::util_flag($admin_user_count_for_today , $admin_user_count_for_yesterday);
        $flag_for_car           = self::util_flag($car_count_for_today , $car_count_for_yesterday);
        $flag_for_article       = self::util_flag($article_count_for_today , $article_count_for_yesterday);
        $flag_for_sale_application              = self::util_flag($sale_application_count_for_today , $sale_application_count_for_yesterday);
        $flag_for_recommendation_application    = self::util_flag($recommendation_application_count_for_today , $recommendation_application_count_for_yesterday);
        $flag_for_staging_buy_application       = self::util_flag($staging_buy_application_count_for_today , $staging_buy_application_count_for_yesterday);
        $flag_for_reservation                   = self::util_flag($reservation_count_for_today , $reservation_count_for_yesterday);

        // 比例
        $ratio_for_user = self::util_ratio($user_count_for_today , $user_count_for_yesterday);
        $ratio_for_admin_user = self::util_ratio($admin_user_count_for_today , $admin_user_count_for_yesterday);
        $ratio_for_car = self::util_ratio($car_count_for_today , $car_count_for_yesterday);
        $ratio_for_article = self::util_ratio($article_count_for_today , $article_count_for_yesterday);
        $ratio_for_sale_application = self::util_ratio($sale_application_count_for_today , $sale_application_count_for_yesterday);
        $ratio_for_recommendation_application = self::util_ratio($recommendation_application_count_for_today , $recommendation_application_count_for_yesterday);
        $ratio_for_staging_buy_application = self::util_ratio($staging_buy_application_count_for_today , $staging_buy_application_count_for_yesterday);
        $ratio_for_reservation = self::util_ratio($reservation_count_for_today , $reservation_count_for_yesterday);

        return self::success([
            'user' => [
                'today'     => $user_count_for_today ,
                'yesterday' => $user_count_for_yesterday ,
                'flag'      => $flag_for_user ,
                'ratio'     => $ratio_for_user ,
                'total'     => $user_count ,
            ] ,
            'admin_user' => [
                'today'     => $admin_user_count_for_today ,
                'yesterday' => $admin_user_count_for_yesterday ,
                'flag'      => $flag_for_admin_user ,
                'ratio'     => $ratio_for_admin_user ,
                'total'     => $admin_user_count ,
            ] ,
            'car' => [
                'today'     => $car_count_for_today ,
                'yesterday' => $car_count_for_yesterday ,
                'flag'      => $flag_for_car ,
                'ratio'     => $ratio_for_car ,
                'total'     => $car_count ,
            ] ,
            'article' => [
                'today'     => $article_count_for_today ,
                'yesterday' => $article_count_for_yesterday ,
                'flag'      => $flag_for_article ,
                'ratio'     => $ratio_for_article ,
                'total'     => $article_count ,
            ] ,
            'sale_application' => [
                'today'     => $sale_application_count_for_today ,
                'yesterday' => $sale_application_count_for_yesterday ,
                'flag'      => $flag_for_sale_application ,
                'ratio'     => $ratio_for_sale_application ,
                'total'     => $sale_application_count ,
            ] ,
            'recommendation_application' => [
                'today'     => $recommendation_application_count_for_today ,
                'yesterday' => $recommendation_application_count_for_yesterday ,
                'flag'      => $flag_for_recommendation_application ,
                'ratio'     => $ratio_for_recommendation_application ,
                'total'     => $recommendation_application_count ,
            ] ,
            'staging_buy_application' => [
                'today'     => $staging_buy_application_count_for_today ,
                'yesterday' => $staging_buy_application_count_for_yesterday ,
                'flag'      => $flag_for_staging_buy_application ,
                'ratio'     => $ratio_for_staging_buy_application ,
                'total'     => $staging_buy_application_count ,
            ] ,
            'reservation' => [
                'today'     => $reservation_count_for_today ,
                'yesterday' => $reservation_count_for_yesterday ,
                'flag'      => $flag_for_reservation ,
                'ratio'     => $ratio_for_reservation ,
                'total'     => $reservation_count ,
            ] ,
        ]);
    }

    private static function util_ratio(int $today , int $yesterday)
    {
        if ($yesterday == 0) {
            $ratio = bcmul($today , 100 , 2);
        } else {
            $amount = bcsub($today  , $yesterday);
            $ratio = bcdiv($amount , $yesterday , 4);
            $ratio = bcmul($ratio , 100 , 2);
        }
        $ratio = abs($ratio);
        return sprintf('%s%%' , $ratio);
    }

    private static function util_flag($today , $yesterday)
    {
        return $today - $yesterday >= 0 ? 'up' : 'down';
    }

    private static function util_isNowMonth($year , $month)
    {
        $time = time();
        $cur_year = date('Y' , $time);
        $cur_month = date('m' , $time);
        return $cur_year == $year && $cur_month == $month;
    }

    private static function util_isGTMonth($year , $month)
    {
        $time = time();
        $cur_year = date('Y' , $time);
        $cur_month = date('m' , $time);
        return $year > $cur_year ||  $month > $cur_month;
    }

    private static function util_isGTQuarter($year , $quarter)
    {
        $time = time();
        $cur_year = date('Y' , $time);
        $cur_month = date('m' , $time);
        $cur_quarter = get_quarter($cur_month);
        return $year > $cur_year ||  $quarter > $cur_quarter;
    }

    private static function util_isNowQuarter($year , $quarter)
    {
        $time = time();
        $cur_year = date('Y' , $time);
        $cur_month = date('m' , $time);
        $cur_quarter = get_quarter($cur_month);
        return $year == $cur_year &&  $cur_quarter == $quarter;
    }

    private static function util_isNowYear($year)
    {
        $time = time();
        $cur_year = date('Y' , $time);
        return $cur_year == $year;
    }

    private static function util_isGTYear($year)
    {
        $time = time();
        $cur_year = date('Y' , $time);
        return $year > $cur_year;
    }

    // 月份统计
    public static function month(array $param)
    {
        $validator = Validator::make($param , [
            'year'  => 'required' ,
            'month'  => 'required' ,
        ] , [
            'year.required'    => 'year 尚未提供' ,
            'month.required'    => 'month 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        // 检查是否大于当前月份
        if (self::util_isGTMonth($param['year'] , $param['month'])) {
            return self::error('超过当前时间，请重现选择');
        }
        $start  = 1;
        $end    = self::util_isNowMonth($param['year'] , $param['month']) ? intval(date('d')) : get_month_days($param['year'] , $param['month']);
        $res = [
            'user' => [
                'name' => '用户' ,
                'data' => []
            ] ,
            'admin_user' => [
                'name' => '后台用户' ,
                'data' => []
            ] ,
            'car' => [
                'name' => '车辆' ,
                'data' => []
            ] ,
            'article' => [
                'name' => '文章' ,
                'data' => []
            ] ,
            'sale_application' => [
                'name' => '卖车申请' ,
                'data' => []
            ] ,
            'recommendation_application' => [
                'name' => '值购车辆申请' ,
                'data' => []
            ] ,
            'staging_buy_application' => [
                'name' => '分期购车申请' ,
                'data' => []
            ] ,
            'reservation' => [
                'name' => '预约看车申请' ,
                'data' => []
            ] ,
        ];
        for ($i = $start; $i <= $end; ++$i)
        {
            $year = $param['year'];
            $month = intval($param['month']) < 10 ? '0' . $param['month']: $param['month'];
            $day = $i < 10 ? '0' . $i : $i;
            $date = sprintf('%s-%s-%s' , $year ,  $month , $day);
            $res['user']['data'][$date] = User::countByDate($date);
            $res['admin_user']['data'][$date] = AdminUser::countByDate($date);
            $res['car']['data'][$date] = Car::countByDate($date);
            $res['article']['data'][$date] = Article::countByDate($date);
            $res['sale_application']['data'][$date] = SaleApplication::countByDate($date);
            $res['recommendation_application']['data'][$date] = RecommendationApplication::countByDate($date);
            $res['staging_buy_application']['data'][$date] = StagingBuyApplication::countByDate($date);
            $res['reservation']['data'][$date] = Reservation::countByDate($date);
        }
        return self::success($res);
    }

    // 季度统计资料
    public static function quarter(array $param)
    {
        $validator = Validator::make($param , [
            'year'  => 'required' ,
            'quarter'  => 'required' ,
        ] , [
            'year.required'    => 'year 尚未提供' ,
            'quarter.required'    => 'quarter 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        // 检查是否大于当前月份
        if (self::util_isGTQuarter($param['year'] , $param['quarter'])) {
            return self::error('超过当前时间，请重现选择');
        }
        $range = get_month_for_quarter($param['quarter']);
        $start  = $range[0];
        $end    = self::util_isNowQuarter($param['year'] , $param['quarter']) ?
            intval(date('m')) :
            $range[2];
        $res = [
            'user' => [
                'name' => '用户' ,
                'data' => []
            ] ,
            'admin_user' => [
                'name' => '后台用户' ,
                'data' => []
            ] ,
            'car' => [
                'name' => '车辆' ,
                'data' => []
            ] ,
            'article' => [
                'name' => '文章' ,
                'data' => []
            ] ,
            'sale_application' => [
                'name' => '卖车申请' ,
                'data' => []
            ] ,
            'recommendation_application' => [
                'name' => '值购车辆申请' ,
                'data' => []
            ] ,
            'staging_buy_application' => [
                'name' => '分期购车申请' ,
                'data' => []
            ] ,
            'reservation' => [
                'name' => '预约看车申请' ,
                'data' => []
            ] ,
        ];
        for ($i = $start; $i <= $end; ++$i)
        {
            $year = $param['year'];
            $month = $i < 10 ? '0' . $i : $i;
            $date = sprintf('%s-%s' , $year ,  $month);
            $res['user']['data'][$date] = User::countByMonth($date);
            $res['admin_user']['data'][$date] = AdminUser::countByMonth($date);
            $res['car']['data'][$date] = Car::countByMonth($date);
            $res['article']['data'][$date] = Article::countByMonth($date);
            $res['sale_application']['data'][$date] = SaleApplication::countByMonth($date);
            $res['recommendation_application']['data'][$date] = RecommendationApplication::countByMonth($date);
            $res['staging_buy_application']['data'][$date] = StagingBuyApplication::countByMonth($date);
            $res['reservation']['data'][$date] = Reservation::countByMonth($date);
        }
        return self::success($res);
    }

    // 季度统计资料
    public static function year(array $param)
    {
        $validator = Validator::make($param , [
            'year'  => 'required' ,
        ] , [
            'year.required'    => 'year 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error(get_form_error($validator));
        }
        // 检查是否大于当前月份
        if (self::util_isGTYear($param['year'])) {
            return self::error('超过当前时间，请重现选择');
        }
        $start = 1;
        $end = self::util_isNowYear($param['year']) ? intval(date('m')) : 12;
        $res = [
            'user' => [
                'name' => '用户' ,
                'data' => []
            ] ,
            'admin_user' => [
                'name' => '后台用户' ,
                'data' => []
            ] ,
            'car' => [
                'name' => '车辆' ,
                'data' => []
            ] ,
            'article' => [
                'name' => '文章' ,
                'data' => []
            ] ,
            'sale_application' => [
                'name' => '卖车申请' ,
                'data' => []
            ] ,
            'recommendation_application' => [
                'name' => '值购车辆申请' ,
                'data' => []
            ] ,
            'staging_buy_application' => [
                'name' => '分期购车申请' ,
                'data' => []
            ] ,
            'reservation' => [
                'name' => '预约看车申请' ,
                'data' => []
            ] ,
        ];
        for ($i = $start; $i <= $end; ++$i)
        {
            $year = $param['year'];
            $month = $i < 10 ? '0' . $i : $i;
            $date = sprintf('%s-%s' , $year ,  $month);
            $res['user']['data'][$date] = User::countByMonth($date);
            $res['admin_user']['data'][$date] = AdminUser::countByMonth($date);
            $res['car']['data'][$date] = Car::countByMonth($date);
            $res['article']['data'][$date] = Article::countByMonth($date);
            $res['sale_application']['data'][$date] = SaleApplication::countByMonth($date);
            $res['recommendation_application']['data'][$date] = RecommendationApplication::countByMonth($date);
            $res['staging_buy_application']['data'][$date] = StagingBuyApplication::countByMonth($date);
            $res['reservation']['data'][$date] = Reservation::countByMonth($date);
        }
        return self::success($res);
    }

}