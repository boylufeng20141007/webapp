# 创建数据库
CREATE DATABASE IF NOT EXISTS wap DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
# 查看mysql端口命令
show variables like 'port';
# 创建一个测试表
create table if not EXISTS test(
id int(11) not null auto_increment,
primary key (id)
);