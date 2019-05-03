/**
 * *************************
 * vue 初始化处理
 * *************************
 */
// 开发者提示关闭！
Vue.config.productionTip = false;
// 是否允许 vue devtool 进行 debug
Vue.config.devtools = true;

/**
 * *********************
 * 对请求进行拦截
 * *********************
 */

let refreshToken = (resolve) => {
    if (!G.s.exists('token')) {
        // 没有登录信息，退出登录
        forceLogout();
        return ;
    }
    let token = G.s.json('token');
    adminApi.refreshToken({
        refresh_token: token.refresh_token
    } , (res , code) => {
        if (code != 200) {
            $info('登录状态已过期！请点击 <b>确定</b> 按钮退出到登录页面!' , {
                closeBtn: false ,
                btn: ['确定'] ,
                btn1 (index) {
                    layer.close(index);
                    forceLogout();
                }
            });
            return ;
        }
        // 更新 token
        G.s.json('token' , res);
        resolve();
    });
};

G.ajax.opened = function(){
    if (!isLogin()) {
        return true;
    }
    let token = G.s.json('token');
    // 设置 Authorization 头部
    this.native('setRequestHeader' , 'Authorization' , token.token);
    return true;
};

let count = 0;
// 拦截 网络/登录状态 变更
G.ajax.responded = function(res , code){
    if (code == 0) {
        console.log('请求被终止，可能是网络断开导致，也可能是用户手动终止！请稍后再试');
        return false;
    }
    if (code == 401) {
        // token 认证失败，刷新 token
        new Promise((resolve , reject) => {
            if (++count > 10) {
                console.log('刷新 token 后，尝试请求用户之前被拦截的请求次数过多！程序问题！请检查');
                return ;
            }
            refreshToken(resolve);
        }).then(() => {
            // 更新成功便重新开始之前用户的请求
            this.restart();
        });
        return false;
    }
    if (code == 500) {
        $error('服务器发生内部错误，请稍后再试');
        return false;
    }

    return true;
};