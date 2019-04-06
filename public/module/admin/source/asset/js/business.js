/**
 * *************************
 * 业务相关字段
 * *************************
 */
Object.assign(window , {
    business: {
        // 布尔-数值
        bool_int: {
            0: '否' ,
            1: '是'
        } ,
        // 布尔-字符串
        bool_str: {
            'n': '否' ,
            'y': '是'
        } ,
        // 公告-位置
        pos: {
            announcement: {
                app: 'app公告'
            } ,
            image: {
                news: '发现-焦点轮播图' ,
                app: '发现-应用-焦点轮播图'
            }
        } ,
        // 请求方法
        route: {
            method: ['GET' , 'POST' , 'PUT' , 'PATCH' , 'DELETE' , 'NONE'] ,
            type: ['view' , 'api'] ,
        } ,
    }
});