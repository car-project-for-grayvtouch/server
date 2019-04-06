const list = `${topContext.api}Article/list`;
const detail = `${topContext.api}Article/detail`;
const edit = `${topContext.api}Article/edit`;
const add = `${topContext.api}Article/add`;
const saveImage = `${topContext.api}Article/saveImage`;
const capture = `${topContext.api}Article/captureForJHData`;
const del = `${topContext.api}Article/del`;

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
    saveImage (data , success , error) {
        return G.ajax({
            url: saveImage ,
            data ,
            method: 'post' ,
            success ,
            error
        });
    } ,

    // 抓取
    capture (data , success , error) {
        return G.ajax({
            url: capture ,
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
};