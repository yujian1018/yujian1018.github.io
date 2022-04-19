---
title: "Go Project Layout"
menuTitle: "Go Project Layout"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
背景
Go 没有对项目的 layout 有硬性规定，也没有官方版本的 best practice，所以社区内部有几种不同的实践方式，可根据自身需求自行参考。本文仅作简要总结。

参考方案
根据社区 Standard Go Project Layout 提出的方案，我们可以将一个 Go Project 划分成以下几大目录：

Go 相关目录
cmd/
一般来说，如果不是库函数，项目最终都会编译成 1 个或多个二进制可执行文件，每个可执行文件都会对应到一个 main()，而这些可执行文件的入口代码可认为都是一个 application。

cmd/ 就是用来放这些 application 代码，每个 application 都应对应到 cmd/ 的某个子目录下，比如我这个项目将生成 app1，app2 和 app3，那么目录结构就应该为：

go-project
└── cmd
    ├── app1
    ├── app2
    └── app3
应该注意的一点：不宜在 cmd/ 下放过多代码。如果你觉得你的某些代码可公开复用，应放置于 pkg/ 目录中，否则可放置于 internal/ 目录中。

一个好的工程习惯是：尽可能保持 cmd/ 下的 application 代码，即 main() 入口函数的简单，通过调用其他工程目录下的代码（比如 pkg/ 和 internal/） 来串联整个逻辑。

internal/
私有的 application 或者库代码（不希望 package 的接口被扩散到同层目录以外的空间中）。该目录下的代码受限于 Go internal package 机制的限制（见下文），只能被 internal/ 下同层代码所引用。

pkg/
用来放置库代码，可被项目内部或外部引用。

vendor/
项目依赖代码。vendor/ 下放置着依赖代码的一个副本。如果项目是库代码，则无需提交依赖代码。

Service 应用相关目录
api/
一般用来放着 OpenAPI/Swagger 的 spec、JSON 的 schema 文件或者 protocol 的定义。可参考 kubernetes/api。

Web 应用相关目录
web/
Web application 相关的组件，比如静态资源、服务端模版等。

通用目录
configs/
配置文件或者模版文件。

init/
系统初始化（如 systemd，upstart，sysv）和进程管理（如 runit，supervisord）相关工具的配置。

scripts/
构建，安装，分析等相关操作的脚本。

build/
打包（packaging）和 CI 相关文件。比如 Docker，OS（deb，rpm，pkg）相关的配置和脚本文件可放在 build/package 目录下，而 CI （travis，drone 等）相关文件可放置 build/ci 目录下。

deployments/
IaaS，PaaS 或者容器编排系统的配置和模版文件。

test/
额外的测试应用和测试数据，如 test/data。

其他一些目录
docs/
设计或者用户文档。

tools/
项目相关的一些 tool，其代码可引用 pkg/ 和 internal/ 目录下的 package。

examples/
项目（应用或者库）相关的示例代码。

third_party/
外部的第三方工具、代码或其他组件。

hack/
放置一些跟项目相关的 hack 工具。

githooks/
放置 Git hooks。

assets/
项目相关的其他资源依赖。

几个要点
1.搞清楚 Go 的 workspace 机制
Go 会将所有的代码放在一个单一的 workspace 中，其路径以 GOPATH 环境变量指定，所以你可以将你的代码放在 src 目录下，如

$GOPATH/src/github.com/your_github_username/your_project：绝对路径，推荐使用；

$GOPATH/src/your_project：相对路径，可以用，但不推荐；

2. internal/ 的设计
Go 鼓励使用者将程序分成 package 并暴露 API。但随着项目的膨胀，拆分 package 将会把一些不必要的 API 暴露在整个项目中。为解决这个问题，从 Go 1.4 开始，Go 提供了 internal package 机制。

根据 internal package 机制：只能在 internal/ 的父目录下引用 internal/ 下的 package。例如：

在 /a/b/c/internal/d/e/f 下的代码只能在 /a/b/c 下的代码使用，无法在 /a/b/g 下使用；

$GOROOT/src/pkg/net/http/internal 只能在 net/http 或者 net/http/* 下使用；

$GOPATH/src/mypkg/internal/foo 只能在 $GOPATH/src/mypkg 下使用；

3. 不要使用 src/ 目录
容易和 Go workspace 目录约束下的 src/ 起冲突；

总结
就目前而言，Go 对于工程项目的 layout 并未有官方权威的指导（区别于 Go Workspace 的 layout，Go 为此有着明确的约束，即要有 bin/、pkg/ 和 src/），但是开源社区中的大部分 Go 项目对一些目录的划分已经有了一些默契。可参考的有 Kuberntes、Promethus、etcd 等等。对于应用项目（即总是可编译出一个可执行文件的项目），一般都会有 cmd/、pkg/ 和 vendor/，其他一些目录则根据社区习惯会有所不同。对于非应用项目，比如一些库，则上述的 layout 设计并不能完全适用，且从目前社区的编码习惯来看，不少库项目的 layout 都相对比较自由（比如很多项目就直接将其所有代码放置于项目根目录下）。

从团队协作的角度来看，必须对 Go 工程项目的 layout 定义出一个最小通用子集并为此达成使用默契。

所以，当你开始一个 Go 项目的时候，你可以这么做：

确定你要写的项目是 application 还是 library，如果是 application，尽可能有 cmd/、pkg/ 和 vendor/ 目录；如果是 library，可参考上述规则；

如果是一个很小的项目，可以不需要所谓的目录设计，尽可能保持清晰简单即可；

参考设计不构成硬性的约束条件，一切都要以实际项目的需求来权衡设计，但最终还是要能保证清晰简单；
