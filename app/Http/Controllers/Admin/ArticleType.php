<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/14
 * Time: 9:46
 */

namespace App\Http\Controllers\Admin;

use App\Customize\Admin\Model\ArticleType as ArticleTypeModel;
use Core\Lib\Category;
use Validator;

use function Admin\parse_order;

class ArticleType extends Controller
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
        $res = ArticleTypeModel::where($where)
            ->order($order['field'] , $order['type'])
            ->paginate(config('app.limit'));
        return success($res);
    }

    // 获取所有文章分类
    public function all()
    {
        $res = ArticleTypeModel::order('weight' , 'desc')
            ->order('create_time' , 'desc')
            ->select();
        return success($res);
    }

    // 分类详情
    public function detail()
    {
        $param = $this->request->post();
        $validator = Validator::make($param , [
            'id' => 'require' ,
        ] , [
            'id.require' => 'id尚未提供'
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $res = ArticleTypeModel::find($data['id']);
        return success($res);
    }

    // 编辑
    public function edit()
    {
        $param = $this->request->post();
        $validator = Validator::make($param , [
            'id' => 'require' ,
            'name' => 'require' ,
            'p_id' => 'require' ,
            'weight' => 'require' ,
            'hidden' => 'require' ,
        ] , [
            'id.require' => 'id 尚未提供' ,
            'name.require' => '名称尚未提供' ,
            'p_id.require' => '上级分类尚未提供' ,
            'weight.require' => '权重尚未提供' ,
            'hidden.require' => '是否隐藏尚未提供' ,
        ]);
        if (!$validator->batch()->check($data)) {
            return form_error($validator);
        }
        $data['weight'] = intval($data['weight']);
        $m = new ArticleTypeModel();
        $m->allowField([
            'name' ,
            'p_id' ,
            'weight' ,
            'hidden'
        ])->save($data , [
            'id' => $data['id']
        ]);
        return success();
    }

    // 新增
    public function add()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'name' => 'require' ,
            'p_id' => 'require' ,
            'weight' => 'require' ,
            'hidden' => 'require' ,
        ] , [
            'name.require' => '名称尚未提供' ,
            'p_id.require' => '上级分类尚未提供' ,
            'weight.require' => '权重尚未提供' ,
            'hidden.require' => '是否隐藏尚未提供' ,
        ]);
        if (!$validator->batch()->check($data)) {
            return form_error($validator);
        }
        $data['weight'] = intval($data['weight']);
        $m = new ArticleTypeModel();
        $m->allowField([
            'name' ,
            'p_id' ,
            'weight' ,
            'hidden'
        ])->save($data);
        return success($m->id);
    }

    // 删除文章分类
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
        // 将会删除该分类下的所有子分类
        $type = ArticleTypeModel::select()
            ->toArray();
        $id_list = [];
        foreach ($data['id_list'] as $v)
        {
            $childrens = Category::childrens($v , $type , [
                'id'    => 'id' ,
                'pid'  => 'p_id'
            ] , true , false);
            array_walk($childrens , function($v) use(&$id_list){
                // 过滤掉重复的id
                if (array_search($v['id'] , $id_list)) {
                    return ;
                }
                $id_list[] = $v['id'];
            });
        }
        // 删除文章分类
        $res = ArticleTypeModel::whereIn('id' , $id_list)
            ->delete();
        return success($res);
    }
}