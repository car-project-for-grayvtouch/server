const verifyCode = `${topContext.api}misc/verifyCode`;
const translation = `${topContext.api}translation/translation`;

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

    // 翻译
    translate  (success , error) {
        return G.ajax({
            url: translation ,
            method: 'post' ,
            success ,
            error
        });
    } ,

};