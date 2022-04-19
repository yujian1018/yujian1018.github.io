---
title: "git"
menuTitle: "git"
weight: 0
date: 2019-08-30T15:13:01+08:00
---

## 安装 ubuntu

```bash
sudo apt-get install git

#常用命令
git config

git clone url
git clone <repository::指定远程数据库的 URL> <directory::指定新目录的名称> %克隆

git pull %从服务器获取文件，使用 pull 指令进行拉取操作。省略数据库名称的话，会在名为 origin 的数据库进行 pull

git add %现在需要同步的文件
git add -A

git commit %添加到本地数据库
git commit -m "msg"

git push %同步到网络服务器,把本地服务器中的文件同步到网络服务器，push 之前需要 commit

git remote -h
修改服务端仓库
git remote rm origin
git remote add origin git@git.oschina.net:fuhu/aya.git
git remote -v 获取服务端仓库


# 分支branch 
git branch name %新建分支
git checkout name %进入该分支
git push --set-upstream origin branch_name
git push origin --delete <branchName> %删除远程分支
git branch -d <branchName> %%删除本地分支


## 标签tag 
git tag
git tag -l "v1.8.5*"
git show v1.4
git tag -a v1.0.0 -m "my version 1.0.0"
git push origin v1.0.0
git push origin --tags
git push origin --delete tag <tagname> %删除服务端 tag
git tag -d <tagname> 删除本地 tag
git reset --hard V1.1 本地代码重置到某个 tag


## branch和tag 重复
git push origin :notmaster
git push origin :refs/heads/<branch>
git remote show origin
git remote prune origin


## 合并 git merge 
git checkout master
git merge develop
git push


## 检出 checkout 
git checkout master
git checkout -b version2 v2.0.0
git checkout -b branch_name tag_name


## 撤销 reset 
git reset --hard %重置本地所有改动，保持和服务器版本一致

git reset --soft HEAD^ 撤回 commit 操作，保留代码
git reset --hard commit_id 撤回 commit 操作，重置到 commit_id 版本，改动代码也被重置
git reset --mixed HEAD^ 不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作
--soft  
 不删除工作空间改动代码，撤销 commit，不撤销 git add .
--hard
删除工作空间改动代码，撤销 commit，撤销 git add .
注意完成这个操作后，就恢复到了上一次的 commit 状态。
git commit --amend 修改注释


## 回退 revert 公共远程分支版本回退
自己的分支回滚直接用 reset
公共分支回滚用 revert
git revert HEAD //撤销最近一次提交
git revert HEAD~1 //撤销上上次的提交，注意：数字从 0 开始
git revert 0ffaacc //撤销 0ffaacc 这次提交
错的太远了直接将代码全部删掉，用正确代码替代


## 服务端部署 服务端创建一个空仓库
git --bare init game.git
# 客户端
git clone root@115.159.22.131:~/git/game.git
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL ADDRESS"
git init 初始化
git branch -a 查看分支，列出的分支中，带有*的为本地分支，其他为远程分支
git remote -v
git remote remove origin
git remote add origin root@115.159.22.131:~/git/game.git
git push origin master


## git stash
git stash: 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到 Git 栈中。

git stash %把当前改动复制一个版本后，重置本地改动到服务器最新版本
git pull origin master %1.更新最新代码（包含冲突文件）2.手动改动代码 3.提交到服务端
git stash pop %复制的版本和最新版本对比。  
 git log master -n 1 --pretty=commit:%H > git_version %生成版本号

git stash pop: 从 Git 栈中读取最近一次保存的内容，恢复工作区的相关内容。由于可能存在多个 Stash 的内容，所以用栈来管理，pop 会从最近的一个 stash 中读取内容并恢复。
git stash list: 显示 Git 栈内的所有备份，可以利用这个列表来决定从那个地方恢复。
git stash clear: 清空 Git 栈。此时使用 gitg 等图形化工具会发现，原来 stash 的哪些节点都消失了。

# cherry-pick
git cherry-pick 4c805e2
复制一个特定的提交到当前分支


## git log %log 指令来确认历史记录是否已更新
git log --oneline --graph
–author=“Alex Kras” ——只显示某个用户的提交任务
–name-only ——只显示变更文件的名称
–oneline——将提交信息压缩到一行显示
–graph ——显示所有提交的依赖树
–reverse ——按照逆序显示提交记录（最先提交的在最前面）
–after ——显示某个日期之后发生的提交
–before ——显示发生某个日期之前的提交
git -log -p filename
git log -L 1,1:some-file.txt
git log --no-merges master.. || it show --no-merges master.. 或者 git log -p --no-merges master..
git log -n 1 --pretty=format:"%h"

git reflog%用来记录你每一次执行的命令

```
