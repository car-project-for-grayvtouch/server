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
create table if not exists `xq_sale_application` (
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
  status char(255) default 'wait' comment '状态：wait-等待处理 ing-处理中 cancel-已取消 completed-已完成' ,
  remark varchar(1000) default '' comment '备注' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '卖车申请';

drop table if exists `xq_recommendation_application`;
create table if not exists `xq_recommendation_application` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  name char(255) default '' comment '心仪的品牌和车型，例：2016年BMW 428i' ,
  price char(255) default '' comment '预期价格，单位：美元，例：3w-4.5w（美元）' ,
  mileage char(255) default '' comment '预期里程，单位：英里，例：10000-30000' ,
  phone char(32) default '' comment '手机号码' ,
  weixin char(100) default '' comment '微信号' ,
  remark varchar(1000) default '' comment '备注' ,
  status char(255) default 'wait' comment '状态：wait-等待处理 ing-处理中 cancel-已取消 completed-已完成' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆推荐申请';

drop table if exists `xq_buy_application`;
drop table if exists `xq_staging_buy_application`;
create table if not exists `xq_staging_buy_application` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  phone char(32) default '' comment '手机号码' ,
  weixin char(100) default '' comment '微信号' ,
  profession char(255) default '' comment '职业：student-学生 work-工作' ,
  ssn enum('y' , 'n') default 'n' comment '是否有 ssn：y-是 n-否' ,
  status char(255) default 'wait' comment '状态：wait-等待处理 ing-处理中 cancel-已取消 completed-已完成' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '分期买车申请';

drop table if exists `xq_user_token`;
create table if not exists `xq_user_token` (
  id int unsigned not null auto_increment ,
  token char(64) default '' ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  token_expire datetime default current_timestamp comment 'token 过期时间' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment 'oauth 2.0 password 模式';

drop table if exists `xq_reservation`;
create table if not exists `xq_reservation` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  appointment datetime default current_timestamp comment '预约时间' ,
  phone char(32) default '' comment '手机号码' ,
  weixin char(100) default '' comment '微信号' ,
  status char(255) default 'wait' comment '状态：wait-等待处理 ing-处理中 cancel-已取消 completed-已完成' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '预约车辆';


drop table if exists `xq_order`;
create table if not exists `xq_order` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  order_sn char(255) default '' comment '订单号' ,
  status char(255) default 'wait' comment '订单状态：wait-已下单（未付款） pay-已付款 completed-已完成' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '订单表';

-- 订单-详情表
drop table if exists `xq_product`;
create table if not exists `xq_product` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  order_id int unsigned default 0 comment 'xq_order.id' ,
  type char(255) default '' comment '商品类型：car-车辆，可能后续会有新增商品类型，比如说配件等 ...' ,
  relation_id int unsigned default 0 comment '关联id，如果 type = car，那么即使 xq_car.id，如果是配件，那么就是配件表的 id' ,
  quantity int unsigned default 0 comment '购买数量' ,
  status char(255) default 'wait' comment '商品状态：wait-待发货 shipped-已发货 pending-待收货 completed-已完成' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '订单-清单表';

drop table if exists `xq_bought_car`;
drop table if exists `xq_car_comment`;
drop table if exists `xq_car_comment_image`;

drop table if exists `xq_product_comment`;
create table if not exists `xq_product_comment` (
  id int unsigned not null auto_increment ,
  user_id int unsigned default 0 comment 'xq_user.id' ,
  product_id int unsigned default 0 comment 'xq_product.id' ,
  type enum('main' , 'append') default 'main' comment 'main-主要 append-附加' ,
  content varchar(1000) default '' comment '评论内容' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏' ,
  commendation int unsigned default 0 comment '赞数' ,
  product_score decimal(13,2) default 0 comment '商品评分' ,
  p_id int unsigned default 0 comment '上级评论id: xq_car_comment.id' ,
  is_supplier enum('y' , 'n') default 'n' comment '是否是商家：y-是 n-否' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '商品评论-主体/追加评论';


drop table if exists `xq_product_comment_image`;
create table if not exists `xq_product_comment_image` (
  id int unsigned not null auto_increment ,
  product_comment_id int unsigned default 0 comment 'xq_product_comment.id' ,
  name char(255) default '' comment '图片名称' ,
  size int unsigned default 0 comment '图片大小' ,
  mime char(255) default '' comment '媒体类型' ,
  path varchar(500) default '' comment '评论图片' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '商品评论图片';
