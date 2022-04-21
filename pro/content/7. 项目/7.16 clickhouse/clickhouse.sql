DROP TABLE dw.config_equity;

CREATE TABLE dw.config_equity (
	id Int64,
	name String,
	detail Nullable(String),
	status Nullable(Int16),
	c_times DateTime DEFAULT now(),
	u_times datetime default now() 
)
ENGINE = ReplacingMergeTree(u_times)
PARTITION BY toYYYYMM(c_times) -- 分区键 。要按月分区，可以使用表达式 toYYYYMM(date_column) ，这里的 date_column 是一个 Date 类型的列。这里该分区名格式会是 "YYYYMM" 这样。
ORDER BY (id, c_times) -- 表的排序键。可以是一组列的元组或任意的表达式。 例如: ORDER BY (CounterID, EventDate) 。
PRIMARY KEY (id) -- 主键，如果要设成 跟排序键不相同。
SAMPLE BY id -- 用于抽样的表达式。
SETTINGS index_granularity = 8192 -- 索引粒度。即索引中相邻『标记』间的数据行数。默认值，8192 。
;


insert into dw.config_equity (id, name, detail, status )  values (1,'1','1',1), (2,'2','2',2), (3,'3','3',3)

select count(*) from dw.config_equity ce 

OPTIMIZE TABLE dw.config_equity;


CREATE TABLE dw.gps (
  id UInt64,
  c_times DateTime DEFAULT now(),
  plate_no String,
--  order_data string,
  gps_long Decimal32(6),
  gps_lat Decimal32(6),
  status UInt8,
  shipment_no String,
  depart_no String
  ) 
ENGINE = MergeTree
PARTITION BY toYYYYMM(c_times)
ORDER BY (id, c_times, shipment_no, depart_no)
SETTINGS index_granularity = 8192;


INSERT INTO dw.gps(id,plate_no,gps_long,gps_lat,status,shipment_no,depart_no)
VALUES (1,'浙H2039Q',-999.999999,100.000001,1,'K39349497719122','DBC52695508429792');

select count(*) from dw.gps

select shipment_no, count(*) from dw.gps group by shipment_no having count(*) > 1

select * from dw.gps order by id limit 0, 1000

select id, c_times, plate_no, gps_long, gps_lat, status, shipment_no, depart_no from gps limit 100


select id, c_times, plate_no, concat(toString(gps_lat), ',', toString(gps_long)) as gps, status, shipment_no, depart_no from gps limit 1000


select count(*) from ontime

-- 列出数据库列表
show databases;

-- 列出数据库中表列表
show tables;

-- 创建数据库
create database test;

-- 删除一个表
drop table if exists test.t1;

-- 创建第一个表
create /*temporary*/ table /*if not exists*/ test.m1 (
 id UInt16
,name String
) ENGINE = Memory
;
-- 插入测试数据
insert into test.m1 (id, name) values (1, 'abc'), (2, 'bbbb');

-- 查询
select * from test.m1;

-- 导入数据
INSERT INTO [db.]table [(c1, c2, c3)] select 列或者* from mysql('host:port', 'db', 'table_name', 'user', 'password')

-- kill query
SELECT query_id, query FROM system.processes;
KILL QUERY WHERE query_id = '<id>';

-- ReplacingMergeTree 去重数据表引擎

CREATE TABLE bid_user(
    uuid String,
    yob Int32,
    gender Int8 DEFAULT -1
) ENGINE = ReplacingMergeTree()
PARTITION by substring(uuid, 1, 1)
order by (yob, gender)
-- 注意, 它去重的是在相同的分区键(partiton by)中, 相同的 order by 的数据

-- 它是后台自动通过执行任务来处理的
-- 它不保证当前版本的数据是实时去重的
-- 可通过 optimize table bid_user [final]; 来建议 clickhouse 现在执行去重任务(但不保证)

