# GIT使用

## 1.什么是git

Git是目前世界上最先进的分布式版本控制系统。  
工作原理 / 流程：

![](https://pic2.zhimg.com/v2-3bc9d5f2c49a713c776e69676d7d56c5_r.jpg)

Workspace：工作区  
Index / Stage：暂存区  
Repository：仓库区（或本地仓库）  
Remote：远程仓库

## 2. 初始化设置

```git
git init 
git config --global user.name "..."
git config --global user.email "..." 
```

## 3. 生成ssh key

`ssh-keygen -t rsa -C "email"`

## 4. 在git平台上传ssh key

生成ssh key之后在 c:\用户.ssh 中生成两个文件（id_rsa id_rsa.pub）

复制id_rsa.pub内容到git仓库

## 5. 基本使用

### 5.1 创建版本库

```git
git init
#在当前目录下建立一个.git文件夹，git用来追踪版本变化

git init [project-name] 
#新建一个目录，将其初始化为Git代码库

git clone [url]
#下载一个项目和它的整个代码历史
```

### 5.2 提交

```git
git add xxx.txt /  .
#添加xxx.txt修改文件 / 添加当前目录所有修改文件到暂存区（stage）

git commit 
#将暂存区内容提交到本地仓库

git status 
#查看目录文件状态

git push （-u）
#将本地仓库内容推送至远程仓库（将本地的master分支和远程的master分支关联起来）
```

### 5.3 版本回退

```git
git log （–pretty=oneline）
#查看最近仓库的版本变动

git reset --hard HEAD^
#回退到上一个版本，回退版本数跟head后^数量相关

git reset --hard HEAD~xxx
#回退到上xxx个版本
```

### 5.4 远程仓库

```git
#注册账号，创建远程仓库
git remote add origin xxx
#添加远程仓库
```

### 5.5 分支管理

```git
#查看分支：
git branch

#创建分支：
git branch name

#切换分支：
git checkout name

#创建+切换分支：
git checkout –b name

#合并某分支到当前分支：
git merge name

#删除分支：
git branch –d name
```

## 6. git pull与git fetch区别

git fetch

在拉取代码过程中，git fetch会首先检查本地仓库和远程仓库的差异，检查哪些不存在于本地仓库，然后将这些变动的提交拉取到本地。

但是，这里请注意，它是把远程提交拉取到本地仓库，而不是本地工作目录，它不会自行将这些新数据合并到当前工作目录中，我们需要继续执行git merge才会把这些变动合并到当前工作目录。![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27e408700e7d42bca90be8f4ca3b8291~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

git pull

git pull和git fetch刚好相反，它直接获取远程的最新提交，直接拉取并合并到本地工作目录，而且在合并过程中不会经过我们的审查，如果不仔细检查，这样很容易遇到冲突。![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68d68690d3a64544acac5e86bdddbb6d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如何选用？

相比之下，git fetch是一个更安全的选择，因为它从你的远程仓库拉入所有的提交，但不会对你的本地文件做任何修改。

这相当于给了个缓冲区，你有足够时间去发现远程仓库自从你上次拉取后到现在为止发生的变化。你可以在合并前检查哪些文件有变化，哪些文件可能导致冲突。

而git pull相当于运行git fetch，然后立即将你的改动合并到本地仓库，即pull=fetch+merge。这样的确少了一个步骤，但是也会带来一些风险。