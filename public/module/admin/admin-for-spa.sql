-- 后台用户表
drop table if exists `cq_admin_user`;
create table if not exists `cq_admin_user` (
  id int unsigned not null auto_increment ,
  username char(50) default '用户名' ,
  password char(64) default '' comment '密码' ,
  avatar varchar(500) default '' comment '用户头像' ,
  role_id int unsigned default 0 comment 'cq_role.id' ,
  token char(64) default '' comment 'token，单点登录' ,
  expire datetime default current_timestamp comment '过期时间' ,
  is_root tinyint default 0 comment '是否超级管理员 0-否 1-是' ,
  last_ip long comment '最近一次登录ip' ,
  create_time datetime default current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '后台用户表';

drop table if exists `cq_admin_land_log`;
create table if not exists `cq_admin_land_log` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'cq_admin_user.id' ,
  ip long comment '最近一次登录ip' ,
  create_time datetime default current_timestamp comment '最近一次登录时间' ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '后台用户表';

-- 平台表
drop table if exists `cq_platform`;
create table if not exists `cq_platform` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '默认名称' ,
  create_time datetime default current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '平台表';

-- 展示图片
drop table if exists `cq_image`;
create table if not exists `cq_image` (
  id int unsigned not null auto_increment ,
  pos char(50) default '' comment '展示位置，仅用作区分' ,
  platform_id int unsigned default 0 comment 'cq_platform.id' ,
  name char(255) default '' comment '图片名称' ,
  mime char(50) default '' comment 'mime 类型，例如：image/jpeg' ,
  size int unsigned default 0 comment '大小，单位：字节' ,
  path varchar(500) default '' comment 'path 路径' ,
  url varchar(500) default '' comment '图片url' ,
  link varchar(500) default '' comment '链接' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '图片库-焦点图/轮播图';

--  应用表
drop table if exists `cq_app`;
create table if not exists `cq_app` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '名称' ,
  thumb varchar(500) default '' comment '封面' ,
  ios_link varchar(500) default '' comment 'ios 下载链接' ,
  android_link varchar(500) default '' comment 'android 下载链接' ,
  android_wakeup_link varchar(500) default '' comment 'android 唤醒链接' ,
  ios_wakeup_link varchar(500) default '' comment 'ios 唤醒链接' ,
  is_app tinyint default 0 comment '是否 app： 0-否 1-是' ,
  link varchar(500) default '' comment '外部链接' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '应用表';

-- 文章分类
drop table if exists `cq_article_type`;
create table if not exists `cq_article_type` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '分类名称' ,
  p_id int unsigned default 0 comment 'cq_article_type.id，上级分类id' ,
  weight smallint default 0 comment '权重' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏：n-否 y-是' ,
  create_time datetime default current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '文章分类表';

-- 文章表
drop table if exists `cq_article`;
create table if not exists `cq_article` (
  id int unsigned not null auto_increment ,
  title varchar(500) default '' comment '标题' ,
  source varchar(500) default '' comment '来源' ,
  article_type_id int unsigned default 0 comment 'cq_article_type.id，文章分类id' ,
  thumb varchar(500) default '' comment '封面' ,
  weight smallint default 0 comment '权重' ,
  is_third enum('y' , 'n') default 'n' comment '是否第三方抓取：y-是 n-否' ,
  unique_id char(255) default '' comment '第三方 记录id' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏：n-否 y-是' ,
  create_time datetime default current_timestamp ,
  update_time datetime default current_timestamp on update current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '文章表';

-- 文章内容表
drop table if exists `cq_article_content`;
create table if not exists `cq_article_content` (
  id int unsigned not null auto_increment ,
  article_id int unsigned default 0 comment 'cq_article.id' ,
  content mediumtext  comment '文章内容' ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '文章表';

/**
 * 默认的一些位置：
 * news 资讯模块
 */
drop table if exists `cq_role`;
create table if not exists `cq_role` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '角色名称' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '角色表';

drop table if exists `cq_route`;
create table if not exists `cq_route` (
  id int unsigned not null auto_increment ,
  name char(50) comment '路由名称' ,
  en char(50) default '' comment '英文名称' ,
  route char(255) comment '路由' ,
  s_ico varchar(500) default '' comment '小图标' ,
  b_ico varchar(500) default '' comment '大图标' ,
  method enum('GET' , 'POST' , 'PUT' , 'DISPATCH' , 'DELETE' , 'NONE') default 'NONE' comment '请求方法，如果 type = view，请设置为 NONE' ,
  `type` enum('api' , 'view') default 'api' comment '类型，由于采用前后端分离开发，所以前端也有自己的路由！' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏 y-是 n-否' ,
  enable enum('y' , 'n') default 'y' comment '是否启用 y-是；n-否' ,
  menu enum('y' , 'n') default 'n' comment '是否菜单 y-是；n-否' ,
  p_id int default 0 comment '上级id，cq_route.id' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp comment '创建时间' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '路由表';

drop table if exists `cq_role_privilege`;
create table if not exists `cq_role_privilege` (
  id int unsigned not null auto_increment ,
  role_id int default 0 comment 'cq_role.id' ,
  route_id int default 0 comment 'cq_route.id' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '角色权限表';

-- 路由数据
insert into cq_route (id , name , en , route , method , type , hidden , enable , menu , p_id) values
(1 , '文章管理' , 'Artilce Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
(2 , '分类列表' , '' , '/articleType/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 1) ,
(3 , '文章列表' , '' , '/article/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 1) ,
(4 , '图库管理' , 'Image Manager' , '/image/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
(5 , '应用管理' , 'App Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
(6 , '平台列表' , '' , '/platform/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 5) ,
(7 , '应用列表' , '' , '/app/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 5) ,
(8 , '编辑文章分类' , '' , '/articleType/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 2) ,
(9 , '添加文章分类' , '' , '/articleType/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 2) ,
(10 , '编辑文章' , '' , '/article/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 3) ,
(11 , '添加文章' , '' , '/article/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 3);
(12 , '编辑图片' , '' , '/image/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 4) ,
(13 , '添加图片' , '' , '/image/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 4) ,
(14 , '编辑应用' , '' , '/app/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7) ,
(15 , '添加应用' , '' , '/app/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7);
(14 , '编辑应用' , '' , '/app/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7) ,
(15 , '添加应用' , '' , '/app/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 7);
(16 , '公告管理' , 'Announcement Manager' , '' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 0) ,
(17 , '公告列表' , '' , '/announcement/list' , 'NONE' , 'view' , 'n' , 'y' , 'y' , 16) ,
(18 , '编辑公告' , '' , '/announcement/edit' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 17) ,
(19 , '添加公告' , '' , '/announcement/add' , 'NONE' , 'view' , 'n' , 'y' , 'n' , 17);

-- 公告
drop table if exists `cq_announcement`;
create table if not exists `cq_announcement` (
  id int unsigned not null auto_increment ,
  title varchar(500) default '' comment '标题' ,
  pos char(255) default '' comment '展示位置' ,
  text longtext comment '内容' ,
  weight smallint unsigned default 0 comment '权重' ,
  create_time datetime default current_timestamp comment '创建时间' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '公告表';