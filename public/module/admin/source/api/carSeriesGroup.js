const carSeriesGroup = `${topContext.api}carSeriesGroup/group`;
const detail = `${topContext.api}carSeriesGroup/group/?`;

export default {
    list (data , success , error) {
        return G.ajax({
            url: carSeriesGroup ,
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
            url: carSeriesGroup ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,

    add (data , success , error) {
        return G.ajax({
            url: carSeriesGroup ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    del (data , success , error) {
        return G.ajax({
            url: carSeriesGroup ,
            data ,
            method: 'delete' ,
            success ,
            error
        });
    } ,

    all (success , error) {
        return G.ajax({
            url: carSeriesGroup ,
            method: 'get' ,
            success ,
            error
        });
    } ,

};