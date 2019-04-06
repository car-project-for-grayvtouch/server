const verifyCode = `${topContext.api}misc/verifyCode`;

let xhrForCode = null;
export default {
    // 获取验证码
    verifyCode  (success , error) {
        if (xhrForCode instanceof G.ajax) {
            xhrForCode.native('abort');
        }
        return xhrForCode = G.ajax({
            url: verifyCode ,
            method: 'get' ,
            success ,
            error
        });
    } ,

};