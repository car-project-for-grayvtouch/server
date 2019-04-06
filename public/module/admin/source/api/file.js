const image = `${topContext.api}admin/file/image`;
const file = `${topContext.api}admin/file/file`;

export default {
    // 用户登录
    image (data , success , error) {
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
};