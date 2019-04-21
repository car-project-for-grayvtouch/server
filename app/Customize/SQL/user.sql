drop table if exists `xq_user`;
create table if not exists `xq_user` (
  id int unsigned not null auto_increment ,
  username char(255) default '' comment '用户名' ,
  password char(255) default '' comment '密码' ,
  sex char(255) default 'unknow' comment '性别：male-男；female-女；shemale-人妖；both-两性；unknow-未知' ,
  birthday date default null comment '生日: YYYY-MM-DD' ,
  phone char(32) default '' comment '手机号码' ,
  area_code char(32) default '' comment '区号：86-中国' ,
  avatar varchar(500) default '' comment '头像' ,
  last_ip char(32) default '' comment '用户最近一次登录 ip' ,
  last_time datetime default current_timestamp comment '用户最近一次登录时间' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '用户表';

drop table if exists `xq_collection_for_car`;
create table if not exists `xq_collection_for_car` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  car_id int unsigned default 0 comment 'xq_car.id' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '用户收藏车辆表';

drop table if exists `xq_sale_application`;
create table if not exists `xq_collection_for_car` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  address varchar(1000) default '' comment '地址' ,
  mileage decimal(13 ,2) unsigned default 0 comment '行驶里程，单位：英里' ,
  price decimal(13 , 2) unsigned default 0 comment '预期价格，单位：美元' ,
  vin char(17) default '' comment '17bit vin' ,
  phone char(32) default '' comment '手机号码' ,
  weixin char(100) default '' comment '微信号' ,
  color char(255) default '' comment '车身颜色' ,
  interior_color char(255) default '' comment '内饰颜色' ,
  remark varchar(1000) default '' comment '备注' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '卖车申请';

drop table if exists `xq_recommendation_application`;
create table if not exists `xq_collection_for_car` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  name char(255) default '' comment '心仪的品牌和车型，例：2016年BMW 428i' ,
  price char(255) default '' comment '预期价格，单位：美元，例：3w-4.5w（美元）' ,
  mileage char(255) default '' comment '预期里程，单位：英里，例：10000-30000' ,
  phone char(32) default '' comment '手机号码' ,
  weixin char(100) default '' comment '微信号' ,
  remark varchar(1000) default '' comment '备注' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆推荐申请';

drop table if exists `xq_staging_buy_application`;
create table if not exists `xq_buy_application` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  phone char(32) default '' comment '手机号码' ,
  weixin char(100) default '' comment '微信号' ,
  profession char(255) default '' comment '职业：student-学生 work-工作' ,
  ssn enum('y' , 'n') default 'n' comment '是否有 ssn：y-是 n-否' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '分期买车申请';

drop table if exists `xq_bought_car`;
create table if not exists `xq_bought_car` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  car_id int unsigned default 0 comment 'xq_car.id' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '已购车辆';

drop table if exists `xq_car_comment`;
create table if not exists `xq_car_comment` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  car_id int unsigned default 0 comment 'xq_car.id' ,
  content varchar(1000) default '' comment '评论内容' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆评论-仅允许已购买的人评论';

drop table if exists `xq_car_comment_image`;
create table if not exists `xq_car_comment_image` (
  id int unsigned not null auto_increment ,
  car_comment_id int unsigned default 0 comment 'xq_car_comment.id' ,
  name char(255) default '' comment '图片名称' ,
  size int unsigned default 0 comment '图片大小' ,
  mime char(255) default '' comment '媒体类型' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆评论图片';

drop table if exists `xq_user_token`;
create table if not exists `xq_user_token` (
  id int unsigned not null auto_increment ,
  token char(64) default '' ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  token_expire datetime default current_timestamp comment 'token 过期时间' ,
  refresh_token char(64) comment '刷新 token 的令牌，永不过期' ,
  refresh_token_expire datetime default current_timestamp comment 'refresh_token 过期时间' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 password 模式';