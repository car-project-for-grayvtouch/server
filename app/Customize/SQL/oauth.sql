drop table if exists `xq_oauth_client`;
create table if not exists `xq_oauth_client` (
  id int unsigned not null auto_increment ,
  `name` char(255) default '' comment '应用名称' ,
  url varchar(500) default '' comment '应用官网' ,
  `desc` varchar(500) default '' comment '应用描述' ,
  app_id char(64) default '' comment '客户端' ,
  secret char(64) default '' comment '密钥' ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  status tinyint default 0 comment '状态：0-正常；1-锁定 ...' ,
  scope int default 0 comment '授权范围，对应第三方授权表.id，待补充' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 应用表';

-- 暂时保留
-- 公众平台，如果真要做好的话
-- 所有第三方应用程序如果要申请平台服务
-- 都必须先注册添加到该表记录中
-- drop table if exists `xq_public_user`;
-- create table if not exists `xq_public_user` (
--   id int unsigned not null auto_increment ,
--
-- );

drop table if exists `xq_oauth_authorization`;
create table if not exists `xq_authorization` (
  id int unsigned not null auto_increment ,
  oauth_client_id int unsigned default 0 comment 'xq_client.id' ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 授权表';

drop table if exists `xq_oauth_code`;
create table if not exists `xq_auth_code` (
  id int unsigned not null auto_increment ,
  oauth_authrorization_id int unsigned default 0 comment 'xq_oauth_authorization.id' ,
  code char(64) default '' comment '授权码' ,
  expire datetime default current_timestamp comment '过期时间' ,
  used enum('y' , 'n') default 'n' comment '是否使用过：y-是；n-否' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 授权码';


drop table if exists `xq_oauth_token`;
create table if not exists `xq_auth_token` (
  id int unsigned not null auto_increment ,
  oauth_code_id int unsigned default 0 comment 'xq_oauth_code.id' ,
  token char(64) default '' ,
  token_expire datetime default current_timestamp comment 'token 过期时间' ,
  refresh_token char(64) comment '刷新 token 的令牌，永不过期' ,
  refresh_token_expire datetime default current_timestamp comment 'refresh_token 过期时间' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 授权码模式下 token';