const main = `${topContext.api}reservation/reservation`;
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
    updateStatus (data , success , error) {
        return G.ajax({
            url: main ,
            data ,
            method: 'patch' ,
            success ,
            error
        });
    } ,
};