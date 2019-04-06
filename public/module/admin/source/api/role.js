const role = `${topContext.api}role/role`;
const info = `${topContext.api}role/info/?`;
const detail = `${topContext.api}role/role/?`;
const auth = `${topContext.api}role/auth`;
const all = `${topContext.api}role/all`;

export default {
    // 文章分类列表
    list (data , success , error) {
        return G.ajax({
            url: role ,
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
            url: role ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    // 添加
    add (data , success , error) {
        return G.ajax({
            url: role ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 删除
    del (data , success , error) {
        return G.ajax({
            url: role ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,

    // 角色权限
    info (id , success , error) {
        return G.ajax({
            url: info.replace('?' , id) ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    auth (data , success , error) {
        return G.ajax({
            url: auth ,
            method: 'post' ,
            data ,
            success ,
            error
        });
    } ,

    all (success , error) {
        return G.ajax({
            url: all ,
            method: 'get' ,
            success ,
            error
        });
    } ,
};