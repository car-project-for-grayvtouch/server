/**
 * *************************
 * 业务相关字段
 * *************************
 */

window.business = {
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
    // 车辆相关
    car: {
        gearbox: ['手动' , '自动' , '手自一体' , '无级变速' , '双离合' , '机械自动变速箱' , '直驱'] ,
        salePoint: {
            affordable: '经济实惠' ,
            new: '准新车' ,
            luxury: '豪华车' ,
            none: '无' ,
        }
    } ,
    // 检测项
    detection: {
        normal: '正常' ,
        exception: '异常' ,
    } ,
};
