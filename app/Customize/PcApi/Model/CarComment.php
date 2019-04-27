<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/24
 * Time: 9:38
 */

namespace App\Customize\PcApi\Model;

use DB;
use function PcApi\config;

class CarComment extends Model
{
    protected $table = 'car_comment';
    public $timestamps = false;

    // 优质评论
    public static function featuredComment(int $limit = 10)
    {
        $sold_status = config('business.sold_status');
        $res = self::with([
                'image' ,
                'user' ,
                'car'
            ])
            ->where([
                ['is_supplier' , '=' , 'n'] ,
            ])
            ->groupBy('car_id')
            ->orderBy('commendation' , 'desc')
            ->limit($limit)
            ->get()
            ->each(function($v){
                self::single($v);
                CarCommentImage::multiple($v->image);
                User::single($v->user);
            });
        return $res;
    }

    public function car()
    {
        return $this->belongsTo(Car::class , 'car_id' , 'id');
    }

    public function image()
    {
        return $this->hasMany(CarCommentImage::class , 'car_comment_id' , 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class , 'user_id' , 'id');
    }


}