---
title: "3.1 UE"
weight: 03010000
date: 2019-08-30T15:13:01+08:00
chapter: true
---

## 安装

```bash
git clone https://github.com/EpicGames
cd
./Setup.sh
./GenerateProjectFiles.sh %生成data和index
make

make SlateViewer %编译了一个SlateViewer
make UE4Editor UE4Game UnrealPak CrashReportClient ShaderCompileWorker UnrealLightmass %编译Editor
cd Engine/Binaries/Linux && ./UE4Editor
```
