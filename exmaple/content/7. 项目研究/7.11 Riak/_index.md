---
title: "7.11 Riak"
weight: 07110000
date: 2019-08-30T15:13:01+08:00
---


官网 www.basho.com
git <https://github.com/basho/riak>
语言 Erlang
特性 开源

Riak是以 Erlang 编写的一个高度可扩展的分布式数据存储，Riak的实现是基于Amazon的Dynamo论文，Riak的设计目标之一就是高可用。Riak支持多节点构建的系统，每次读写请求不需要集群内所有节点参与也能胜任。提供一个灵活的 map/reduce 引擎，一个友好的 HTTP/JSON 查询接口。

Riak 非常易于部署和扩展。可以无缝地向群集添加额外的节点。link walking 之类的特性以及对 Map/Reduce 的支持允许实现更加复杂的查询。除了 HTTP API 外，Riak 还提供了一个原生 Erlang API 以及对 Protocol Buffer 的支持。

目前有三种方式可以访问 Riak：HTTP API（RESTful 界面）、Protocol Buffers 和一个原生 Erlang 界面。提供多个界面使您能够选择如何集成应用程序。如果您使用 Erlang 编写应用程序，那么应当使用原生的 Erlang 界面，这样就可以将二者紧密地集成在一起。其他一些因素也会影响界面的选择，比如性能。例如，使用 Protocol Buffers 界面的客户端的性能要比使用 HTTP API 的客户端性能更高一些；从性能方面讲，数据通信量变小，解析所有这些 HTTP 标头的开销相对更高。然而，使用 HTTP API 的优点是，如今的大部分开发人员（特别是 Web 开发人员）非常熟悉 RESTful 界面，再加上大多数编程语言都有内置的原语，支持通过 HTTP 请求资源，例如，打开一个 URL，因此不需要额外的软件。在本文中，我们将重点介绍 HTTP API。

所有示例都将使用 curl 通过 HTTP 界面与 Riak 交互。这样做是为了更好地理解底层的 API。许多语言都提供了大量客户端库，在开发使用 Riak 作为数据存储的应用程序时，应当考虑使用这些客户端库。客户端库提供了与 Riak 连接的 API，可以轻松地与应用程序集成；您不必亲自编写代码来处理在使用 curl 时出现的响应。

API 支持常见的 HTTP 方法：GET、PUT、POST、DELETE，它们将分别用于检索、更新、创建和删除对象。

1.install riak
curl -O <http://s3.amazonaws.com/downloads.basho.com/riak/2.0/2.2.3/riak-2.2.3.tar.gz>
tar zxvf riak-2.2.3.tar.gz
cd riak-2.2.3
make locked-deps
make rel

2.install Erlang
sudo apt-get update
sudo apt-get install build-essential autoconf libncurses5-dev openssl libssl-dev fop xsltproc unixodbc-dev git
