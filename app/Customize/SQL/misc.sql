
drop table if exists `xq_platform`;
create table if not exists `xq_platform` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '平台名称' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '平台';

drop table if exists `xq_show_image`;
create table if not exists `xq_show_image` (
  id int unsigned not null auto_increment ,
  platform_id int unsigned default 0 comment 'xq_platform.id' ,
  position char(255) default '' comment '展示位置，将根据此位置将图片应用于页面不同位置' ,
  name char(255) default '' comment '图片名称' ,
  size int unsigned default 0 comment '图片大小' ,
  mime char(255) default '' comment '媒体类型' ,
  link varchar(255) default '' comment '链接' ,
  path varchar(500) default '' comment '路径' ,
  weight smallint default 0 comment '权重' ,
  create_time datetime default current_timestamp ,
  primary key id (id)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '展示图片';


-- 文章分类
drop table if exists `xq_article_type`;
create table if not exists `xq_article_type` (
  id int unsigned not null auto_increment ,
  name char(255) default '' comment '分类名称' ,
  p_id int unsigned default 0 comment 'xq_article_type.id，上级分类id' ,
  weight smallint default 0 comment '权重' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏：n-否 y-是' ,
  create_time datetime default current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '文章分类表';

-- 文章表
drop table if exists `xq_article`;
create table if not exists `xq_article` (
  id int unsigned not null auto_increment ,
  title varchar(500) default '' comment '标题' ,
  source varchar(500) default '' comment '来源' ,
  article_type_id int unsigned default 0 comment 'xq_article_type.id，文章分类id' ,
  thumb varchar(500) default '' comment '封面' ,
  weight smallint default 0 comment '权重' ,
  is_third enum('y' , 'n') default 'n' comment '是否第三方抓取：y-是 n-否' ,
  unique_id char(255) default '' comment '第三方 记录id' ,
  hidden enum('y' , 'n') default 'n' comment '是否隐藏：n-否 y-是' ,
  is_link enum('y' , 'n') default 'n' comment '是否是外链：y-是 n-否' ,
  link varchar(1000) default '' comment '外链地址' ,
  create_time datetime default current_timestamp ,
  update_time datetime default current_timestamp on update current_timestamp ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '文章表';

-- 文章内容表
drop table if exists `xq_article_content`;
create table if not exists `xq_article_content` (
  id int unsigned not null auto_increment ,
  article_id int unsigned default 0 comment 'xq_article.id' ,
  content mediumtext  comment '文章内容' ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '文章内容表';

drop table if exists `xq_search_log`;
create table if not exists `xq_search_log` (
  id int unsigned not null auto_increment ,
  type char(255) default '' comment 'brand-品牌 series-车系 keyword-关键词' ,
  value char(255) default '' comment '搜索值' ,
  `count` int unsigned default 0 comment '搜索次数' ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '车辆搜索记录-仅记录品牌/车系';

insert into xq_platform (id , name) values
(1 , 'pc') ,
(2 , 'mobile') ,
(3 , 'android') ,
(4 , 'ios') ,
(5 , 'web') ,
(6 , 'app');

insert into `xq_show_image` (platform_id , position , name , mime , path) values
(1 , 'home' , '' , '' , '/01.jpg') ,
(1 , 'home' , '' , '' , '/02.jpg') ,
(1 , 'home' , '' , '' , '/03.jpg') ,
(1 , 'home' , '' , '' , '/04.jpg') ,
(1 , 'home' , '' , '' , '/05.jpg') ,
(1 , 'home' , '' , '' , '/06.jpg');

insert into `xq_article_type` (id , name , p_id) values
(1 , '媒体声音' , 0);


drop table if exists `xq_translation`;
create table if not exists `xq_translation` (
  id int unsigned not null auto_increment ,
  `source_language` char(255) default 'cn' comment '源语言' ,
  `target_language` char(255) default 'cn' comment '目标语言' ,
  original mediumtext comment '原文' ,
  `translation` mediumtext comment '译文' ,
  create_time datetime default current_timestamp comment '创建时间' ,
  primary key `id` (`id`)
) engine = innodb character set = utf8mb4 collate = utf8mb4_bin comment '翻译表';