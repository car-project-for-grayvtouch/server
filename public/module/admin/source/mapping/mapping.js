/**
 * *************************
 * 菜单映射
 * *************************
 */
export default [
    {
        name: '控制面板' ,
        route: '/' ,
        children: []
    } ,
    {
        name: '用户管理' ,
        route: 'user' ,
        children: [
            {
                name: '用户列表' ,
                route: '/user/list' ,
                children: []
            } ,
        ]
    } ,
    {
        name: '模块管理' ,
        route: 'module' ,
        children: [
            {
                name: '模块列表' ,
                route: '/module/list' ,
                children: []
            } ,
        ]
    } ,
    {
        name: '标签管理' ,
        route: 'tag' ,
        children: [
            {
                name: '标签列表' ,
                route: '/tag/list' ,
                children: []
            } ,
        ]
    } ,
    {
        name: '图库管理' ,
        route: 'image' ,
        children: [
            {
                name: '图库列表' ,
                route: '/image/list' ,
                children: []
            } ,
            {
                name: '评论列表' ,
                route: '/image/comment' ,
                children: []
            }
        ]
    } ,
    {
        name: '视频管理' ,
        route: 'video' ,
        children: [
            {
                name: '视频列表' ,
                route: '/video/list' ,
                children: []
            } ,
        ]
    } ,
    {
        name: '权限管理' ,
        route: 'privilege' ,
        children: [
            {
                name: '角色列表' ,
                route: '/role/list' ,
                children: []
            } ,
            {
                name: '路由列表' ,
                route: '/route/list' ,
                children: []
            }
        ]
    } ,
    {
        name: '系统设置' ,
        route: 'system' ,
        children: [
            {
                name: '分类管理' ,
                route: 'category' ,
                children: [
                    {
                        name: '分类列表' ,
                        route: '/category/list' ,
                        children: []
                    } ,
                ]
            } ,
            {
                name: '关联主题' ,
                route: 'subject' ,
                children: [
                    {
                        name: '主体列表' ,
                        route: '/subject/list' ,
                        children: []
                    } ,
                ]
            } ,
        ]
    } ,
];