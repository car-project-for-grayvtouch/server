const main = `${topContext.api}carConfiguration/carConfiguration`;
const detail = `${topContext.api}carConfiguration/carConfiguration/?`;
const image = `${topContext.api}carConfiguration/image`;
const all = `${topContext.api}carConfiguration/all`;
const group = `${topContext.api}carConfiguration/group`;

export default {
    // 文章分类列表
    list (data , success , error) {
        return G.ajax({
            url: main ,
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
            url: main ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    // 添加
    add (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 删除
    del (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,

    // 上传头像
    image (data , success , error) {
        return G.ajax({
            url: image ,
            data ,
            method: 'put' ,
            success ,
            error
        });
    } ,

    // 上传头像
    all (success , error) {
        return G.ajax({
            url: all ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    // 分组数据
    group (success , error) {
        return G.ajax({
            url: group ,
            method: 'get' ,
            success ,
            error
        });
    } ,
};