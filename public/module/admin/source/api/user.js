
const user = `${topContext.api}user/user`;

export default {
    list (data , success , error) {
        return G.ajax({
            url: user ,
            method: 'get' ,
            data ,
            success ,
            error
        });
    } ,
};