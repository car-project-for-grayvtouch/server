const carSeries = `${topContext.api}carSeries/series`;
const detail = `${topContext.api}carSeries/series/?`;
const all = `${topContext.api}carSeries/all`;

export default {
    list (data , success , error) {
        return G.ajax({
            url: carSeries ,
            data ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    detail (id , success , error) {
        return G.ajax({
            url: detail.replace('?' , id) ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    edit (data , success , error) {
        return G.ajax({
            url: carSeries ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    add (data , success , error) {
        return G.ajax({
            url: carSeries ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    del (data , success , error) {
        return G.ajax({
            url: carSeries ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,

    all (data , success , error) {
        return G.ajax({
            url: all ,
            data ,
            method: 'get' ,
            success ,
            error
        });
    } ,

};