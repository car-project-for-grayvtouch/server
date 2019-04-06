const list = `${topContext.api}Announcement/list`;
const detail = `${topContext.api}Announcement/detail`;
const edit = `${topContext.api}Announcement/edit`;
const add = `${topContext.api}Announcement/add`;
const del = `${topContext.api}Announcement/del`;

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
};