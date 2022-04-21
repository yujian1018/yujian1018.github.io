# 安装

## docker安装

```bash
docker run -d --restart=always --privileged=true -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" --name elasticsearch1 -v /data1/project/elk/elasticsearch/config:/usr/share/elasticsearch/config/ docker.elastic.co/elasticsearch/elasticsearch:7.10.2

docker run -d --restart=always --privileged=true --link elasticsearch-1:elasticsearch -p 5601:5601 --name kibana1 docker.elastic.co/kibana/kibana:7.10.2
```
