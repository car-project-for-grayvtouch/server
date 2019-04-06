drop table if exists `xq_admin_user`;
create table if not exists `xq_admin_user` (
  id int unsigned not null auto_increment ,
  username char(50) default '' comment '用户名' ,
  password char(64) default '' comment '密码' ,
  phone char(20) default '' comment '手机' ,
  avatar char(255) default '' comment '头像' ,
  role_id int unsigned default 0 comment '角色：xq_role.id' ,
  last_time datetime default current_timestamp comment '最后一次登录时间' ,
  last_ip long comment '最近一次登录ip' ,
  is_root enum('y' , 'n') default 'n' comment '超级管理员：n-否 y-是' ,
  update_time datetime default current_timestamp on update current_timestamp comment '更新时间' ,
  create_time datetime default current_timestamp comment '创建时间' ,
  primary key `id` (`id`)
) engine=innodb character set = utf8mb4 collate=utf8mb4_bin comment '用户表';

drop table if exists `xq_admin_land_log`;
create table if not exists `xq_admin_land_log` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_admin_user.id' ,
  last_ip long comment '最近一次登录ip' ,
  create_time datetime default current_timestamp comment '最近一次登录时间' ,
  primary key `id` (`id`)
) engine=innodb character set = utf8mb4 collate = utf8mb4_bin comment '后台用户登录日志';

drop table if exists `xq_admin_operation_log`;
create table if not exists `xq_admin_operation_log` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_admin_user.id' ,
  operation varchar(500) comment '执行的操作' ,
  `desc` char(255) comment '操作描述' ,
  last_ip long comment '最近一次登录ip' ,
  create_time datetime default current_timestamp comment '最近一次登录时间' ,
  primary key `id` (`id`)
) engine=innodb character set = utf8mb4 collate = utf8mb4_bin comment '后台用户操作日志';

drop table if exists `xq_admin_token`;
create table if not exists `xq_admin_token` (
  id int unsigned not null auto_increment ,
  token char(64) default '' ,
  user_id int unsigned default 0 comment 'xq_admin_user.id' ,
  token_expire datetime default current_timestamp comment 'token 过期时间' ,
  refresh_token char(64) comment '刷新 token 的令牌，永不过期' ,
  refresh_token_expire datetime default current_timestamp comment 'refresh_token 过期时间' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 password 模式';