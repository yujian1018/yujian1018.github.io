---
title: "4.2.1 VIM"
weight: 04020100
date: 2019-08-30T15:13:01+08:00
---
<http://yuez.me/jiang-ni-de-vim-da-zao-cheng-qing-qiao-qiang-da-de-ide/>

<http://www.cnblogs.com/ribavnu/p/3874386.html>

|   |   |  |
| --- | --- | --- | --- |
| pathogen  | 管理插件  | cd ~/  <br/> mkdir .vim <br> mkdir -p ~/.vim/autoload ~/.vim/bundle  <br> cd ~/.vim/autoload/  <br> wget <https://raw.github.com/tpope/vim-pathogen/master/autoload/pathogen.vim> <br> Git:<https://github.com/tpope/vim-pathogen> |
| ~/.vimrc | vim配置文件 | call pathogen#infect() <br>call pathogen#helptags() <br>syntax on<br>filetype plugin indent on |
|vimerl|  |cd ~/.vim/bundle<br>git clone <https://github.com/jimenezrick/vimerl.git> <br>vimrc中为vimerl配置文件增加以下配置  <br> filetype plugin indent on <br>let g:erlangManPath="/usr/local/lib/erlang/man"  |
|ctrlp.vim |ctrl p,  提供给力的模糊文件查找. 进而可以把导航树扔掉. |<https://github.com/kien/ctrlp.vim> |
|NERDTree |Vim中一款给力导航树插件 – 但我很少用它，因为我在用ctrlp. |<https://github.com/scrooloose/nerdtree> |
|NERDTree Tabs |将 NERDTree中打开过的文件添加到标签栏 |<https://github.com/jistr/vim-nerdtree-tabs> |
|vim-vividchalk |配色 |<https://github.com/tpope/vim-vividchalk> <br>需要在 $HOME/.vimrc 中增加一行命令：colo vividchalk |
