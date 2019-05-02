const info = `${topContext.api}pannel/info`;
const month = `${topContext.api}pannel/month`;
const quarter = `${topContext.api}pannel/quarter`;
const year = `${topContext.api}pannel/year`;

export default {
    // 用户登录
    info (success , error) {
        return G.ajax({
            url: info ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    month (data , success , error) {
        return G.ajax({
            url: month ,
            method: 'get' ,
            data ,
            success ,
            error
        });
    } ,

    quarter (data , success , error) {
        return G.ajax({
            url: quarter ,
            method: 'get' ,
            data ,
            success ,
            error
        });
    } ,

    year (data , success , error) {
        return G.ajax({
            url: year ,
            method: 'get' ,
            data ,
            success ,
            error
        });
    } ,
};