const brand = `${topContext.api}brand/brand`;
const detail = `${topContext.api}brand/brand/?`;
const image = `${topContext.api}brand/image`;
const all = `${topContext.api}brand/all`;

export default {
    list (data , success , error) {
        return G.ajax({
            url: brand ,
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
            url: brand ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    // 添加
    add (data , success , error) {
        return G.ajax({
            url: brand ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 删除
    del (data , success , error) {
        return G.ajax({
            url: brand ,
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
};