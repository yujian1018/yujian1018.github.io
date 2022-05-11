---
title: "库函数"
date: 2019-08-30T10:56:29+08:00
weight: 03000000
chapter: true
pre: "<b>3. </b>"
---

ctrl+G 按c

Erlang shell没有反应，可能是正在输入一个字符串"aabbcc......
解决cmd卡死的问题。（win下面ctrl+G 回车）

```erlang
<<A:32,B:32,C:32>> = crypto:strong_rand_bytes(12) .  
<<42,136,117,238,28,89,154,241,88,189,70,139>>  

%找出消耗内存最多的进程
lists:reverse(lists:keysort(2,[{P, erlang:process_info(P, heap_size)} || P <- erlang:processes()])).

%%找到最消耗内存的ETS表
lists:reverse(lists:keysort(2,[{T, ets:info(T, memory)} || T <- ets:all()])).

```

Basic

* compiler 8.1.1 A byte code compiler for Erlang which produces highly compact code
* erts 12.3.2 Functionality necessary to run the Erlang System itself
* kernel 8.3.2 Functionality necessary to run the Erlang System itself
* sasl 4.1.2 The System Architecture Support Libraries is a set of tools for release upgrades and alarm handling etc.
* stdlib 3.17.2 The Erlang standard libraries

Database

* mnesia 4.20.4 A heavy-duty real-time distributed database
* odbc 2.13.5 An interface to relational SQL-databases built on ODBC (Open Database Connectivity).

Operation & Maintenance

* os_mon 2.7.1 A monitor which allows inspection of the underlying operating system
* snmp 5.12 Simple Network Management Protocol (SNMP) support including a MIB compiler and tools for creating SNMP agents

Interface and Communication

* asn1 5.0.18 Provides support for Abstract Syntax Notation One
* crypto 5.0.6 Cryptographical support
* diameter 2.2.5 Diameter
* eldap 1.2.10 eldap - Erlang LDAP library
* erl_interface 5.2.2 Low level interface to C
* ftp 1.1.1 FTP client
* inets 7.5.3 A set of services such as a Web server etc.
* jinterface 1.12.2 Low level interface to Java
* megaco 4.3 Megaco/H.248 is a protocol for control of elements in a physically decomposed multimedia gateway, enabling separation of call control from media conversion.
* public_key 1.12 API to public key infrastructure.
* ssh 4.13.2 Secure Shell application with sftp and ssh support
* ssl 10.7.3 ssl- Secure Socket Layer.
* tftp 1.0.3 TFTP application
* wx 2.1.4 A Graphics System used to write platform independent user interfaces
* xmerl 1.3.28 Provides support for XML 1.0

Tools

* debugger 5.2.1 A debugger for debugging and testing of Erlang programs
* dialyzer 4.4.4 The DIALYZER, a DIscrepancy AnaLYZer for ERlang programs.
* et 1.6.5 Event Tracer (ET), uses the built-in trace mechanism in Erlang and provides tools for collection and graphical viewing of trace data.
* observer 2.11.1 Observer, tools for tracing and investigation of distributed systems
* parsetools 2.3.2 A set of parsing and lexical analysis tools
* reltool 0.9 Reltool is a release management tool. It analyses a given Erlang/OTP installation and determines various dependencies between applications. The graphical frontend depicts the dependencies and enables interactive customization of a target system. The backend provides a batch interface for generation of customized target systems.
* runtime_tools 1.18 Runtime tools, tools to include in a production system
* syntax_tools 2.6 A utility used to handle abstract Erlang syntax trees, reading source files differently, pretty-printing syntax trees.
* tools 3.5.2 A set of programming tools including a coverage analyzer etc

Test

* common_test 1.22.1 A portable framework for automatic testing
* eunit 2.7 Support for unit testing.

Documentation

* edoc 1.1 A utility used to generate documentation out of tags in source files.
* erl_docgen 1.2.1 A utility used to produce the OTP documentation.
