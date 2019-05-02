const main = `${topContext.api}platform/all`;

export default {
    all (success , error) {
        return G.ajax({
            url: main ,
            method: 'get' ,
            success ,
            error
        });
    } ,
};