drop table if exists `xq_brand`;
create table if not exists `xq_brand` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '名称' ,
  logo varchar(500) default '' comment 'logo' ,
  letter char(1) default '' comment '拼音首字母' ,
  hot enum('y' , 'n') default 'n' comment '热门品牌：y-是；n-否' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '品牌';

drop table if exists `xq_car_series`;
create table if not exists `xq_car_series` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '名称' ,
  car_series_group_id int unsigned default 0 comment 'xq_car_series_group.id' ,
  brand_id int unsigned default 0 comment 'xq_brand.id' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车系';

drop table if exists `xq_car_series_group`;
create table if not exists `xq_car_series_group` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '名称' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车系分组';

drop table if exists `xq_car_model`;
create table if not exists `xq_car_model` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '名称' ,
  brand_id int unsigned default 0 comment 'xq_brand.id' ,
  car_series_id int unsigned default 0 comment 'xq_car_series.id' ,
  `year` int default 0 comment '年份' ,
  price decimal(13 , 2) unsigned default 0 comment '价格（新车参考价格！），单位：美元' ,
  car_type_id int unsigned default 0 comment 'xq_car_type.id' ,

  -- 车辆核心配置
  gearbox char(255) default '' comment '变速箱：手动|自动|手自一体|无级变速|双离合|机械自动变速箱|直驱' ,
  `size` char(255) default '' comment '车辆尺寸：长/宽/高' ,
  driver_type char(255) default '' comment '驱动方式' ,
  door_count tinyint default 0 comment '车门数量' ,
  seat_count tinyint default 0 comment '座位数（承载数量）' ,
  high_speed_fuel_consumption decimal(13,2) default 0 comment '高速油耗，单位 GL' ,
  city_fuel_consumption decimal(13,2) default 0 comment '城市油耗，单位 GL' ,
  engine char(255) default '' comment '发送机' ,

  -- 车辆基本配置
  company char(255) default '' comment '公司（厂商）' ,
  `level` char(255) default '' comment '级别' ,
  wheelbase char(255) default '' comment '轴距(inch)' ,

  -- 发动机参数
  displacement decimal(13,2) default 0 comment '排量，单位：L' ,
  intake_type char(255) default '' comment '进气类型' ,
  cylinder_count tinyint default 0 comment '气缸数量' ,
  maximum_horsepower decimal(13,2) unsigned default 0 comment '最大马力，单位：Ps' ,
  maximum_torque decimal(13,2) unsigned default 0 comment '最大扭矩（N*m）' ,
  fuel_type char(255) default '' comment '燃料类型' ,
  engine_anti_theft_system enum('y','n') default 'n' comment '发动机防盗系统：y-有 n-没有' ,

  -- 底盘及制动
  assist_type char(255) default '' comment '助力类型' ,
  front_suspension_type char(255) default '' comment '前悬挂类型' ,
  back_suspension_type char(255) default '' comment '后悬挂类型' ,
  front_brake_type char(255) default '' comment '前制动类型' ,
  back_brake_type char(255) default '' comment '后制动类型' ,
  tire_desc char(255) default '' comment '轮胎描述' ,

  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车型';

-- 车辆配置（安全配置|外部配置|内部配置）
drop table if exists `xq_car_configuration`;
create table if not exists `xq_car_configuration` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '功能名称' ,
  image varchar(500) default '' comment '图片展示' ,
  `desc` char(255) default '' comment '功能描述' ,
  weight smallint default 0 comment '权重' ,
  car_configuration_group_id int unsigned default 0 comment 'xq_car_configuration_group.id' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆配置';

-- 车辆配置分组
drop table if exists `xq_car_configuration_group`;
create table if not exists `xq_car_configuration_group` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '功能名称' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆配置分组';

-- 车辆配置-关联表
drop table if exists `xq_car_model_with_configuration`;
create table if not exists `xq_car_model_with_configuration` (
  id int unsigned not null auto_increment ,
  car_model_id int unsigned default 0 comment 'xq_car_model.id' ,
  car_configuration_id int unsigned default 0 comment 'xq_car_configuration.id' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车型-车辆配置-关联表';

drop table if exists `xq_car_type`;
create table if not exists `xq_car_type` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '名称' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆类型：比如说，轿车/卡车/跑车/皮卡';


-- 车辆表
drop table if exists `xq_car`;
create table if not exists `xq_car` (
  id int unsigned not null auto_increment ,
  brand_id int unsigned default 0 comment 'xq_brand.id' ,
  car_serires_id int unsigned default 0 comment 'xq_car_series.id' ,
  car_model_id int unsigned default 0 comment 'xq_car_model.id' ,
  price decimal(13,2) unsigned default 0 comment '当前价格，单位：美元' ,
  mileage decimal(13,2) unsigned default 0 comment '行驶里程，单位：英里' ,
  transfer_record tinyint unsigned default 0 comment '过户记录（次数）' ,
  color char(255) default '' comment '车辆颜色' ,
  view_count int unsigned default 0 comment '浏览次数' ,
  test_time datetime default current_timestamp comment '检测时间（对应检测报告）' ,
  sale_point enum('affordable' , 'new' , 'luxury' , 'none') default 'none' comment '销售亮点：affordable-经济实惠；new-准新车；luxury-豪华车' ,
  create_time datetime default current_timestamp ,
  update_time datetime default current_timestamp on update current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆表';

-- 车辆图片表
drop table if exists `xq_car_image`;
create table if not exists `xq_car_image` (
  id int unsigned not null auto_increment ,
  car_id int unsigned default 0 comment 'xq_car.id' ,
  name char(255) default '' comment '名称' ,
  mime char(255) default '' comment 'mime: 如 image/jpeg' ,
  size int unsigned default 0 comment '大小，单位：字节' ,
  path varchar(500) default '' comment '磁盘路径' ,
  url varchar(500) default '' comment 'url，请不要包含 host 信息' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆表';

drop table if exists `xq_report`;
create table if not exists `xq_test_report` (
  id int unsigned not null auto_increment ,
  car_id int unsigned default 0 comment 'xq_car.id' ,
  user_id int unsigned default 0 comment '操作人员' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告';

drop table if exists `xq_report_for_module`;
create table if not exists `xq_report_for_module` (
  id int unsigned not null auto_increment ,
  report_id int unsigned default 0 comment 'xq_report.id' ,
  result varchar(1000) default '' comment '综合检测结果' ,
  module_name char(255) default '' comment '模块名称，xq_detection_module.name' ,
  version char(255) default '1.0.0' comment '检测报告版本，检测报告内容随时可能发生变化，为了兼容各个版本，故而加了版本字段！方便前端区分' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-模块';


drop table if exists `xq_report_for_pos`;
create table if not exists `xq_report_for_pos` (
  id int unsigned not null auto_increment ,
  report_for_module_id int unsigned default 0 comment 'report_for_module.id' ,
  group_name char(255) default '' comment '分组名称，xq_detection_group.name，从 xq_detection_pos.group_id 找到对应的记录，获取其名称' ,
  pos char(255) default '' comment '检测位置 xq_detection_pos.name' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-检测部位';

drop table if exists `xq_report_for_item`;
create table if not exists `xq_report_for_item` (
  id int unsigned not null auto_increment ,
  report_for_pos_id int unsigned default 0 comment 'xq_report_for_pos.id' ,
  name char(255) default '' comment '检测项名称' ,
  value char(255) default '' comment '检测结果' ,
  `desc` char(255) default '' comment '结果描述' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-检测部位-具体的检测项';

drop table if exists `xq_service`;
create table if not exists `xq_service` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '服务名称' ,
  image varchar(500) default '' comment '展示图片' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '服务';

drop table if exists `xq_car_service`;
create table if not exists `xq_car_service` (
  id int unsigned not null auto_increment ,
  car_id int unsigned default 0 comment 'xq_car.id' ,
  service_id int unsigned default 0 comment 'xq_service.id' ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆-服务-关联表';

-- 检测退则-事故检测
-- drop table if exists `xq_report_for_accident`;
-- create table if not exists `xq_test_report` (
--   id int unsigned not null auto_increment ,
--   car_id int unsigned default 0 comment 'xq_car.id' ,
--   result varchar(500) default '' comment '检测结果' ,
--   left_A_pillar enum('normal' , 'exception') default 'normal' comment '左A柱' ,
--   right_A_pillar enum('normal' , 'exception') default 'normal' comment '右A柱' ,
--   left_B_pillar enum('normal' , 'exception') default 'normal' comment '左B柱' ,
--   right_B_pillar enum('normal' , 'exception') default 'normal' comment '右B柱' ,
--   left_C_pillar enum('normal' , 'exception') default 'normal' comment '左C柱' ,
--   right_C_pillar enum('normal' , 'exception') default 'normal' comment '右C柱' ,
--   -- 以下全部以拼音首字母连起来命名
--   zqzl enum('normal' , 'exception') default 'normal' comment '左前纵梁' ,
--   rqzl enum('normal' , 'exception') default 'normal' comment '右前纵梁' ,
--   zhzl enum('normal' , 'exception') default 'normal' comment '左后纵梁' ,
--   rhzl enum('normal' , 'exception') default 'normal' comment '右后纵梁' ,
--   zqjzqxgbw enum('normal' , 'exception') default 'normal' comment '左前减震器悬挂部位' ,
--   rqjzqxgbw enum('normal' , 'exception') default 'normal' comment '右前减震器悬挂部位' ,cm
--   zhjzqxgbw enum('normal' , 'exception') default 'normal' comment '左后减震器悬挂部位' ,
--   rhjzqxgbw enum('normal' , 'exception') default 'normal' comment '右后减震器悬挂部位' ,
--   csdb enum('normal' , 'exception') default 'normal' comment '车身底板' ,
--   hbxdb enum('normal' , 'exception') default 'normal' comment '后备箱底板' ,
--   firewall enum('normal' , 'exception') default 'normal' comment '防火墙' ,
--   cszydcx enum('normal' , 'exception') default 'normal' comment '车身左右对称性' ,
--   fdjxsjxjzp enum('normal' , 'exception') default 'normal' comment '发动机线束及橡胶制品' ,
--   hbxbjjbtc enum('normal' , 'exception') default 'normal' comment '后备箱边角及备胎槽' ,
--   zyhgn enum('normal' , 'exception') default 'normal' comment '座椅滑轨内' ,
--   hpzyzddb enum('normal' , 'exception') default 'normal' comment '后排座椅坐垫底部' ,
--   aqddb enum('normal' , 'exception') default 'normal' comment '安全带底部' ,
--   yxlbdb enum('normal' , 'exception') default 'normal' comment '音响喇叭底部' ,
--   qcdjdt enum('normal' , 'exception') default 'normal' comment '全车地胶地毯' ,
--   yhgdz enum('normal' , 'exception') default 'normal' comment '烟灰缸底座' ,
--   fdjfhb enum('normal' , 'exception') default 'normal' comment '发动机防护板' ,
--   clfgjjjsc enum('normal' , 'exception') default 'normal' comment '车辆覆盖件及驾驶舱' ,
--   create_time datetime default current_timestamp ,
--   primary key id (id)
-- ) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-事故排查';


-- 检测退则-驾驶系统
-- drop table if exists `xq_report_for_boot_device`;
-- create table if not exists `xq_report_for_boot_device` (
--   id int unsigned not null auto_increment ,
--   car_id int unsigned default 0 comment 'xq_car.id' ,
--   group_id int unsigned default 0 comment 'xq_report_for_boot_device' ,
--   create_time datetime default current_timestamp ,
--   primary key id (id)
-- ) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-驾驶系统';
--
-- drop table if exists `xq_report_for_boot_device_item`;
-- create table if not exists `xq_report_for_boot_device_item` (
--   id int unsigned not null auto_increment ,
--   report_for_boot_device_id int unsigned default 0 comment 'xq_report_for_boot_device.id' ,
--   create_time datetime default current_timestamp ,
--   primary key id (id)
-- ) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-驾驶系统';
--

drop table if exists `xq_detection_module`;
create table if not exists `xq_detection_module` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '模块名称' ,
  image varchar(255) default '' comment '模块检测项映射图片' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-检测模块';

drop table if exists `xq_detection_group`;
create table if not exists `xq_detection_group` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '分组名称' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-检测项分组';

drop table if exists `xq_detection_pos`;
create table if not exists `xq_detection_pos` (
  id int unsigned not null auto_increment ,
  detection_module_id int unsigned default 0 comment 'xq_detection_module.id' ,
  detection_group_id int unsigned default 0 comment 'xq_detection_group.id' ,
  name char(255) default '' comment '检测位置' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-检测位置（部位）';

drop table if exists `xq_detection_item`;
create table if not exists `xq_detection_item` (
  id int unsigned not null autoincrement ,
  detection_pos_id int unsigned default 0 comment 'xq_detection_pos.id' ,
  name char(255) default '' comment '检测项' ,
  `option` varchar(500) default '[{key: "normal",value: "正常"},{key: "exception": value: "异常"}]' comment '检测项的可选项,json 字符串' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '检测报告-检测项';

-- todo 热门品牌
-- todo 车辆收藏
-- todo 用户购买记录

-- 系统必备数据
insert into xq_detection_module (id , name) values
(1 , '事故排查') ,
(2 , '外观内饰检测') ,
(3 , '启动设备检测') ,
(4 , '驾驶系统检测');

insert into xq_detection_group (id , name) values
(1 ,'启动') ,
(2 , '起步') ,
(3 , '加速') ,
(4 , '匀速驾驶') ,
(5 , '减速及制动');

insert into xq_car_configuration_group (id , name) values
(1, '安全配置') ,
(2 , '外部配置') ,
(3 , '内部配置');

insert into xq_car_configuration (name , car_configuration_group_id) values
-- 安全配置
('乘客安全气囊' , 1) ,
('前后排侧气囊' , 1) ,
('前后排头部气囊' , 1) ,
('胎压监测' , 1) ,
('防抱死系统(ABS)' , 1) ,
('车辆启动自检' , 1) ,
('电子制动力分配（ebd）' , 1) ,
('制动辅助' , 1) ,
('碰撞预警系统' , 1) ,
('防盗报警系统' , 1) ,

-- 外部配置
('电动天窗' , 2) ,
('自动头灯' , 2) ,
('日间行车灯' , 2) ,
('前/后电动车窗' , 2) ,
('自动调节后视镜' , 2) ,
('后视镜加热' , 2) ,
('倒车影像' , 2) ,
('定速巡航' , 2) ,
('铝合金轮毂' , 2) ,
('停车辅助' , 2) ,

-- 内部配置
('真皮座椅' , 3) ,
('座椅加热' , 3) ,
('电动调节座椅' , 3) ,
('多功能方向盘' , 3) ,
('空气过滤系统' , 3) ,
('免提电话' , 3) ,
('卫星电话' , 3) ,
('蓝牙链接' , 3) ,
('导航系统' , 3) ,
('实时路况信息' , 3);
