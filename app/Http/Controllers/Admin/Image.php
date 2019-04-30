<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/16
 * Time: 14:28
 */

namespace App\Http\Controllers\Admin;


use function Admin\error;
use function Admin\success;

use App\Customize\Admin\Util\File;
use App\Customize\Admin\Model\Image as ImageModel;




class Image extends Controller
{
    // 图片处理
    public function save()
    {
        $image = isset($_FILES['image']) ? $_FILES['image'] : null;
        $ins = new File();
        $res = $ins->image($image);
        if (!$res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 抓门为 WangEditor 准备的图片上传接口
    public function saveForWangEditor()
    {
        $image = isset($_FILES['image']) ? $_FILES['image'] : null;
        $ins = new File();
        $res = $ins->image($image);
        if (!$res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        $res = $res['data'];
        $images = [];
        foreach ($res['success'] as $v)
        {
            $images[] = $v['url'];
        }
        return response()->json([
            'errno' => 0 ,
            'data' => $images
        ] , 200);
    }

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
        $res = ImageModel::with('platform')
            ->where($where)
            ->order($order->field , $order->value)
            ->paginate(config('app.limit'));
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
        $res = ImageModel::find($data['id']);
        return success($res);
    }

    // 编辑
    public function edit()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'id' => 'require' ,
            'pos' => 'require' ,
        ] , [
            'id.require' => 'id 尚未提供' ,
            'pos.require' => '位置尚未提供' ,
        ]);
        if (!$validator->batch()->check($data)) {
            return form_error($validator);
        }
        $data['platform_id'] = 4;
        $data['weight'] = intval($data['weight']);
        $m = new ImageModel();
        $m->allowField([
            'pos' ,
            'platform_id' ,
            'name' ,
            'mime' ,
            'size' ,
            'path' ,
            'url' ,
            'link' ,
            'weight' ,
        ])->save($data , [
            'id' => $data['id']
        ]);
        return success($m->id);
    }

    // 新增
    public function add()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'pos' => 'require' ,
        ] , [
            'pos.require' => '位置尚未提供' ,
        ]);
        if (!$validator->batch()->check($data)) {
            return form_error($validator);
        }
        $data['platform_id'] = 4;
        $data['weight'] = intval($data['weight']);
        $m = new ImageModel();
        $m->allowField([
            'pos' ,
            'platform_id' ,
            'name' ,
            'mime' ,
            'size' ,
            'path' ,
            'url' ,
            'link' ,
            'weight' ,
        ])->save($data);
        return success($m->id);
    }

    // 保存图片
    public function saveImage()
    {
        $data = $this->request->post();
        $validator = Validator::make($param , [
            'id' => 'require' ,
        ] , [
            'id.require' => 'id尚未提供' ,
        ]);
        if ($validator->fails()) {
            return form_error($validator);
        }
        $m = new ImageModel();
        $m->allowField([
            'name' ,
            'mime' ,
            'size' ,
            'url'
        ])->save($data , [
            'id' => $data['id']
        ]);
        return success();
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
        $res = ImageModel::whereIn('id' , $data['id_list'])->delete();
        return success($res);
    }

}