drop table if exists `xq_role`;
create table if not exists `xq_role` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '角色名称' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '角色表';

drop table if exists `xq_route`;
create table if not exists `xq_route` (
  id int unsigned not null auto_increment ,
  name char(50) comment '路由名称' ,
  en char(50) default '' comment '英文名称' ,
  route char(255) comment '路由' ,
  s_ico varchar(500) default '' comment '小图标' ,
  b_ico varchar(500) default '' comment '大图标' ,
  method enum('GET' , 'POST' , 'PUT' , 'PATCH' , 'DELETE' , 'NONE') default 'NONE' comment '请求方法，如果 type = view，请设置为 NONE' ,
  `type` enum('api' , 'view') default 'api' comment '类型，由于采用前后端分离开发，所以前端也有自己的路由！' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏 y-是 n-否' ,
  enable enum('y' , 'n') default 'y' comment '是否启用 y-是；n-否' ,
  menu enum('y' , 'n') default 'n' comment '是否菜单 y-是；n-否' ,
  p_id int default 0 comment '上级id，xq_route.id' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp comment '创建时间' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '路由表';

drop table if exists `xq_role_privilege`;
create table if not exists `xq_role_privilege` (
  id int unsigned not null auto_increment ,
  role_id int default 0 comment 'xq_role.id' ,
  route_id int default 0 comment 'xq_route.id' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '角色权限表';


-- 路由数据
insert into xq_route (id , name , en , route , method , type , hidden , enable , menu , p_id , weight) values
(1 , '控制面板' , 'Control Pannel' , '/' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0 , 0) ,
(2 , '用户管理' , 'User Manager' , 'user' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0 , 0) ,
(3 , '用户列表' , '' , '/user/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 2 , 0) ,

(4 , '权限管理' , 'Privilege Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0 , 0) ,
(5 , '角色列表' , '' , '/role/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 4 , 0) ,
(6 , '添加角色' , '' , '/role/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 5 , 0) ,
(7 , '编辑角色' , '' , '/role/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 5 , 0) ,
(8 , '权限分配' , '' , '/role/auth' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 5 , 0) ,

(9 , '路由列表' , '' , '/route/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 4 , 0) ,
(10 , '添加路由' , '' , '/route/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 9 , 0) ,
(11 , '编辑路由' , '' , '/route/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 9 , 0);

-- (1 , '文章管理' , 'Artilce Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
-- (2 , '分类列表' , '' , '/articleType/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 1) ,
-- (3 , '文章列表' , '' , '/article/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 1) ,
-- (4 , '图库管理' , 'Image Manager' , '/image/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
-- (5 , '应用管理' , 'App Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
-- (6 , '平台列表' , '' , '/platform/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 5) ,
-- (7 , '应用列表' , '' , '/app/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 5) ,
-- (8 , '编辑文章分类' , '' , '/articleType/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 2) ,
-- (9 , '添加文章分类' , '' , '/articleType/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 2) ,
-- (10 , '编辑文章' , '' , '/article/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 3) ,
-- (11 , '添加文章' , '' , '/article/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 3);
-- (12 , '编辑图片' , '' , '/image/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 4) ,
-- (13 , '添加图片' , '' , '/image/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 4) ,
-- (14 , '编辑应用' , '' , '/app/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7) ,
-- (15 , '添加应用' , '' , '/app/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7);
-- (14 , '编辑应用' , '' , '/app/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7) ,
-- (15 , '添加应用' , '' , '/app/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7);
-- (16 , '公告管理' , 'Announcement Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
-- (17 , '公告列表' , '' , '/announcement/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 16) ,
-- (18 , '编辑公告' , '' , '/announcement/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 17) ,
-- (19 , '添加公告' , '' , '/announcement/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 17);


