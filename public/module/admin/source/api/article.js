const main = `${topContext.api}article/article`;
const detail = `${topContext.api}article/article/?`;
const image = `${topContext.api}article/image`;

export default {
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
            method: 'put' ,
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
            method: 'patch' ,
            success ,
            error
        });
    } ,
};