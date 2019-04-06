const route = `${topContext.api}route/route`;
const detail = `${topContext.api}route/route/?`;
const image = `${topContext.api}route/image`;

export default {
    // 文章分类列表
    list (data , success , error) {
        return G.ajax({
            url: route ,
            data ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    // 详情
    detail (id , success , error) {
        return G.ajax({
            url: detail.replace('?' , id) ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    // 修改
    edit (data , success , error) {
        return G.ajax({
            url: route ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    // 添加
    add (data , success , error) {
        return G.ajax({
            url: route ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 删除
    del (data , success , error) {
        return G.ajax({
            url: route ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,
    // 更新
    image (data , success , error) {
        return G.ajax({
            url: image ,
            data ,
            method: 'put' ,
            success ,
            error
        });
    } ,
};