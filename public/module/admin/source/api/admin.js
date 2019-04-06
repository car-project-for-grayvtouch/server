const logining = `${topContext.api}admin/logining`;
const info = `${topContext.api}admin/info`;
const refreshToken = `${topContext.api}oauth/token`;
const admin = `${topContext.api}admin/user`;
const detail = `${topContext.api}admin/user/?`;
const image = `${topContext.api}admin/image`;

export default {
    // 用户登录
    login (data , success , error) {
        return G.ajax({
            url: logining ,
            method: 'post' ,
            data ,
            success ,
            error
        });
    } ,

    // 注销
    logout (success , error) {
        return G.ajax({
            url: logining ,
            method: 'delete' ,
            success ,
            error
        });
    } ,

    // 获取当前登录用户相关信息
    info (success , error) {
        return G.ajax({
            url: info ,
            method: 'get' ,
            success ,
            error ,
        });
    } ,

    // 获取最新的 token
    refreshToken (data , success , error) {
        return G.ajax({
            url: refreshToken ,
            method: 'patch' ,
            data ,
            success ,
            error
        });
    } ,

    // 获取用户列表
    // 获取最新的 token
    list (data , success , error) {
        return G.ajax({
            url: admin ,
            method: 'get' ,
            data ,
            success ,
            error
        });
    } ,

    edit (data , success , error) {
        return G.ajax({
            url: admin ,
            method: 'patch' ,
            data ,
            success ,
            error
        });
    } ,

    add (data , success , error) {
        return G.ajax({
            url: admin ,
            method: 'post' ,
            data ,
            success ,
            error
        });
    } ,

    // 获取用户列表
    // 获取最新的 token
    detail (id , success , error) {
        return G.ajax({
            url: detail.replace('?' , id) ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    image (data , success , error) {
        return G.ajax({
            url: image ,
            method: 'put' ,
            data ,
            success ,
            error
        });
    } ,
};