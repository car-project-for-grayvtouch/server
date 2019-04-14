const main = `${topContext.api}car/car`;
const detail = `${topContext.api}car/car/?`;
const all = `${topContext.api}car/all`;
const image = `${topContext.api}car/image`;
const thumb = `${topContext.api}car/thumb`;

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

    all (success , error) {
        return G.ajax({
            url: all ,
            method: 'get' ,
            success ,
            error
        });
    } ,

    thumb (data , success , error) {
        return G.ajax({
            url: thumb ,
            method: 'patch' ,
            data ,
            success ,
            error ,
        });
    } ,

    image (data , success , error) {
        return G.ajax({
            url: image ,
            method: 'patch' ,
            data ,
            success ,
            error ,
        });
    } ,

    delImage (data , success , error) {
        return G.ajax({
            url: image ,
            method: 'delete' ,
            data ,
            success ,
            error ,
        });
    } ,
};