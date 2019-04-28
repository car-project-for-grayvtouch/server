<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/27
 * Time: 14:36
 */

namespace App\Customize\PcApi\Model;


use Exception;
use function PcApi\get_value;

class RecommendationApplication extends Model
{
    protected $table = 'recommendation_application';
    public $timestamps = false;

    public static function list(array $param = [] , $limit = 20)
    {
        $where = [];
        $res = self::where($where)
            ->paginate($limit);
        self::multiple($res->getCollection());
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->status_explain = get_value('business.recommendation_application_status' , $m->status);
    }
}