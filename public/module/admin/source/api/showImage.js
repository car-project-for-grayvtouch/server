const main = `${topContext.api}showImage/image`;
const detail = `${topContext.api}showImage/image/?`;

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
            url: main ,
            data ,
            method: 'put' ,
            success ,
            error
        });
    } ,
    add (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,
    del (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,
    image (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,
};