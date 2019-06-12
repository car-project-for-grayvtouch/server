const push = `${topContext.api}adminPush/push`;

export default {
    list (data , success , error) {
        return G.ajax({
            url: push ,
            method: 'get' ,
            data ,
            success ,
            error
        });
    } ,

    add (data , success , error) {
        return G.ajax({
            url: push ,
            method: 'post' ,
            data ,
            success ,
            error
        });
    } ,
};