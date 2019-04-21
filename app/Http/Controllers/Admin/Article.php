<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/14
 * Time: 9:46
 */

namespace App\Http\Controllers\Admin;

use App\Customize\Admin\Model\Article as ArticleModel;
use App\Customize\Admin\Model\ArticleContent;
use App\Customize\Admin\Model\ArticleType;
use Core\Lib\Http;
use Exception;
use think\Db;
use Validator;

class Article extends Controller
{
    public function list()
    {
        $data = $this->request->post();
        $data['id'] = $data['id'] ?? '';
        $data['order'] = isset($data['order']) && !empty($data['order']) ? $data['order'] : 'create_time|desc';
        // 排序
        $order = parse_order($data['order']);
        // 获取总数
        $where = [];
        if ($data['id'] != '') {
            $where[] = ['id' , '=' , $data['id']];
        }
        $res = ArticleModel::with(['articleType' , 'content'])
            ->where($where)
            ->order($order->field , $order->value)
            ->paginate(config('app.limit'))
            ->each(function($m){
                ArticleModel::single($m);
                $m->hidden_explain = get_value('business.bool_str' , $m->hidden);
            });
        return success($res);
    }

    // 分类详情
    public function detail()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'id' => 'require' ,
        ] , [
            'id.require' => 'id尚未提供'
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $res = ArticleModel::with('content')
            ->find($data['id']);
        return success($res);
    }

    // 编辑
    public function edit()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'title' => 'require' ,
            'article_type_id' => 'require' ,
        ] , [
            'title.require' => '标题尚未提供' ,
            'article_type_id.require' => '文章分类尚未提供' ,
        ]);
        if (!$validator->batch()->check($data)) {
            return form_error($validator);
        }
        $data['id'] = $data['id'] ?? 0;
        if (empty($data['id'])) {
            return error('id 尚未提供' , 451);
        }
        // 检查文章分类
        if (empty($data['article_type_id'])) {
            return error([
                'article_type_id' => '文章分类尚未提供' ,
            ]);
        }
        $data['weight'] = isset($data['weight']) ? intval($data['weight']) : 0;
        $data['hidden'] = $data['hidden'] ?? 'n';
        try {
            Db::startTrans();
            $m = new ArticleModel();
            $m->allowField([
                'title' ,
                'source' ,
                'weight' ,
                'hidden' ,
                'article_type_id' ,
            ])->save($data , [
                'id' => $data['id']
            ]);
            $m1 = new ArticleContent();
            $m1->allowField([
                'content'
            ])->save([
                'content' => $data['content']
            ] , [
                'article_id' => $data['id']
            ]);
            Db::commit();
            return success($m->id);
        } catch(Exception $e) {
            Db::rollback();
            throw $e;
        }
    }

    // 新增
    public function add()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'title' => 'require' ,
            'article_type_id' => 'require' ,
        ] , [
            'title.require' => '标题尚未提供' ,
            'article_type_id.require' => '文章分类尚未提供' ,
        ]);
        if (!$validator->batch()->check($data)) {
            return form_error($validator);
        }
        // 检查文章分类
        if (empty($data['article_type_id'])) {
            return error([
                'article_type_id' => '文章分类尚未提供' ,
            ]);
        }
        $data['weight'] = isset($data['weight']) ? intval($data['weight']) : 0;
        $data['hidden'] = $data['hidden'] ?? 'n';
        try {
            Db::startTrans();
            $m = new ArticleModel();
            $m->allowField([
                'title' ,
                'source' ,
                'weight' ,
                'hidden' ,
                'article_type_id' ,
            ])->save($data);
            $m1 = new ArticleContent();
            $m1->allowField([
                'article_id' ,
                'content'
            ])->save([
                'content' => $data['content'] ,
                'article_id' => $m->id
            ]);
            Db::commit();
            return success($m->id);
        } catch(Exception $e) {
            Db::rollback();
            throw $e;
        }
    }

    // 删除
    public function del()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'id_list' => 'require' ,
        ] , [
            'id_list.require' => '待删除的记录尚未提供' ,
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $data['id_list'] = json_decode($data['id_list'] , true);
        try {
            Db::startTrans();
            // 删除文章
            ArticleModel::whereIn('id' , $data['id_list'])
                ->delete();
            // 删除文章对应的内容
            ArticleContent::whereIn('article_id' , $data['id_list'])
                ->delete();
            Db::commit();
            return success();
        } catch (Exception $e) {
            Db::rollback();
            throw $e;
        }
    }

    // 保存图片
    public function saveImage()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'id' => 'require' ,
            'image' => 'require' ,
        ] , [
            'id.require' => 'id尚未提供' ,
            'image.require' => '图片尚未提供' ,
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $data['thumb'] = $data['image'];
        $m = new ArticleModel();
        $m->allowField([
            'thumb'
        ])->save($data , [
            'id' => $data['id']
        ]);
        return success();
    }

    // 抓取聚合数据
    public function captureForJHData()
    {
        $url        = 'http://v.juhe.cn/toutiao/index';
        $app_key    = 'f455253376508bc628217cead552c7cc';
        $data       = $this->request->post();
        $validator = Validator::make($param , [
            'type' => 'require' ,
        ] , [
            'type.require' => '类型尚未提供'
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $range = config('business.jh_data_type');
        $type = array_search($data['type'] , $range);
        if ($type === false) {
            return error('不支持的 type，当前受支持的 type 有' . implode(',' , array_values(config('business.jh_data_type'))));
        }
        $article_type = ArticleType::getTypeByName($data['type']);
        if (empty($article_type)) {
            return error('未找到给分类，请手动添加后再次抓取！');
        }
        // 抓取数据
        $res = Http::post($url , [
            'data' => [
                'key' => $app_key ,
                'type' => $type
            ]
        ]);
        if ($res === false) {
            return error('抓取数据失败！可能已经超过免费抓取次数（每天100次），或者请稍后再试！');
        }
        $res = json_decode($res , true);
        if ($res['error_code'] != 0) {
            return error($res['reason']);
        }
        $res = $res['result']['data'];
        $num = [
            // 总记录数
            'total' => count($res) ,
            // 成功抓取条数
            'success' => 0 ,
            // 重复记录数
            'repeat' => 0 ,
            // 失败记录数
            'error' => 0 ,
        ];
        try {
            Db::startTrans();
            foreach ($res as $v)
            {
                /**
                 * {
                "uniquekey": "4a648bd9bbe3271f6a89a2360a17f3e1",
                "title": "小车司机遇交警查车冲卡弃车逃跑 留下14万元物品",
                "date": "2019-03-18 12:47",
                "category": "头条",
                "author_name": "广西新闻网",
                "url": "http://mini.eastday.com/mobile/190318124753799.html",
                "thumbnail_pic_s": "http://04imgmini.eastday.com/mobile/20190318/20190318124753_354e9ae908783576fec0cae8e0093839_3_mwpm_03200403.jpg",
                "thumbnail_pic_s02": "http://04imgmini.eastday.com/mobile/20190318/20190318124753_354e9ae908783576fec0cae8e0093839_2_mwpm_03200403.jpg",
                "thumbnail_pic_s03": "http://04imgmini.eastday.com/mobile/20190318/20190318124753_354e9ae908783576fec0cae8e0093839_1_mwpm_03200403.jpg"
                },
                 */
                // 检查是否已经存在
                if (ArticleModel::isExistsByUniqueId($v['uniquekey'])) {
                    // 统计重复的个数
                    $num['repeat']++;
                    continue ;
                }
                // 抓取内容
                $content = Http::get($v['url']);
                // 取出不合法的标签
//                $content = strip_tags($content , '<b><span><p><img><ol><li><ul><br><div><i><link><figure><script><a><article><h1><h2><h3><h4><h5><h6><input>');
                if ($content === false) {
                    // 统计抓取失败的个数
                    $num['error']++;
                    continue ;
                }
                $data = [
                    'title'    => $v['title'] ,
                    'unique_id' => $v['uniquekey'] ,
                    'is_third'  => 'y' ,
                    'source'    => $v['author_name'] ,
                    'article_type_id' => $article_type->id ,
                    'thumb'     => $v['thumbnail_pic_s'] ?? $v['thumbnail_pic_s02'] ?? $v['thumbnail_pic_s03'] ?? '' ,
                ];
                $m = new ArticleModel();
                $m->save($data);
                $m1 = new ArticleContent();
                $m1->save([
                    'article_id' => $m->id ,
                    'content' => $content
                ]);
                // 统计抓取成功的个数
                $num['success']++;
            }
            Db::commit();
            return success($num);
        } catch(Exception $e) {
            Db::rollback();
            throw $e;
        }
    }
}