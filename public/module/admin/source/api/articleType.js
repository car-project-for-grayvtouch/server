const list = `${topContext.api}ArticleType/list`;
const detail = `${topContext.api}ArticleType/detail`;
const edit = `${topContext.api}ArticleType/edit`;
const add = `${topContext.api}ArticleType/add`;
const del = `${topContext.api}ArticleType/del`;
const all = `${topContext.api}ArticleType/all`;

export default {
    // 文章分类列表
    list (data , success , error) {
        return G.ajax({
            url: list ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 详情
    detail (data , success , error) {
        return G.ajax({
            url: detail ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 修改
    edit (data , success , error) {
        return G.ajax({
            url: edit ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 添加
    add (data , success , error) {
        return G.ajax({
            url: add ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,


    // 删除
    del (data , success , error) {
        return G.ajax({
            url: del ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 删除
    all (success , error) {
        return G.ajax({
            url: all ,
            method: 'post' ,
            success ,
            error
        });
    } ,


};