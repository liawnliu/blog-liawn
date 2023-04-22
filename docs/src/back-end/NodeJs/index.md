# 学习 node 的准备工作

## node 介绍

- [Node.js](https://nodejs.org/en/)是 JavaScript 的一种运行环境，开源、跨平台、可用于众多流行工具里。
- 也就是说 Node.js 可以作为 JavaScript 在服务器上运行的一种形式，在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。
- Node.js 是一个底层的平台，社区在 Node.js 上构建了数千个库，例如：Express、NestJS、Koa、Socket.io 等。
- Npm 是 Node.js 标准的软件包管理器，解决 Node.js 部署的很多问题；可以下载别人写好的程序（包、命令行等），也可以自己写程序发布到 Npm 上。

## Node.js、Npm 的安装

- 打开[Node.js 官网](https://nodejs.org/en/)，如果很慢就使用[Node.js 中文网](http://nodejs.cn/)，选择“Recommended For Most Users（推荐给大多数用户）”，也就是稳定版本。
- 如果你想看 nodejs 以前发布的版本，可以去[以前的版本](https://nodejs.org/en/download/releases/)查看。
- npm 包管理工具是同 node.js 一并安装的，意思是 node.js 安装好后 npm 也随之安装到电脑上了。
- 打开“Git Bash”，没有装 Git 的可以看一下[Git 的使用](/front-end/常用工具/Git的使用)；或者打开 cmd，输入`node --version`可以查看安装的 node 是什么版本的，输入`npm --version`可以查看安装的 npm 是什么版本的。

## 使用 nvm 管理 node 的版本

1. 在工作当中会遇到一个项目使用 10.01 版本，另一可能是使用的 8.0.1 版本，需要切换到对应的版本，那就得使用**nvm**来**管理**本地的 node**版本**。
2. 如果是**Windows 系统**，可以在[GitHub](https://github.com/)里搜索`nvm-windows`

   - 在搜索结果列表里选择[coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
   - 进入之后找到“Download”字样，点击它进入下载页，可以选择`nvm-setup.zip`进行下载安装。可以选择稳定一点的版本。

3. 如果是**Mac 系统**，下面三条脚本任意一条都可以，当然也可以使用**brew**来安装**nvm**

   - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`。
   - `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`。
   - `curl -o- https://gitee.com/mirrors/nvm/raw/master/install.sh | bash`
   - 使用**brew**来安装**nvm**，进入[brew 官网](https://brew.sh/index_zh-cn)，复制一行代码`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`到电脑命令行里运行，就能安装好**brew**，然后运行`brew install nvm`就可以使用**brew**来安装**nvm**了

4. 如果`nvm`命令不存在，那就是 nvm 安装目录下运行`nvm.exe`，然后在命令窗口下输入`nvm on`表示开启 nvm。
5. 安装好**nvm**之后，我们命令行里使用`nvm list`查看当前所有的 node 版本，`nvm install v10.13.0`安装指定版本的 node 版，`nvm use 10.13.0`切换到指定版本。

```bash
# 查看有哪些可以下载的版本
nvm ls-remote

# 安装指定的版本
nvm install v16.14.0

# 使用特定的版本
nvm use v16.14.0

# 设置别名，对应的是 nvm unalias
nvm alias v16 v16.14.0

# 设置了之后就可以使用别名了
nvm use v16

# 设置默认的版本
nvm alias default v16.14.0
```

## node 相关问题

1. `nvm`命令不存在

- 去`nvm`安装目录下运行`nvm.exe`，然后在命令窗口下输入`nvm on`表示开启 nvm。

2. `node`命令不存在

- 在运行完`nvm install v10.13.0`后一定要运行`nvm use 10.13.0`，它会给 node 配置环境变量等。

3. `exit status 1: You do not have sufficient privilege to perform this operation.`

- 暂时不用 Git Bash，要使用管理员身份运行 cmd 命令窗口，然后输入`nvm use 10.13.0`就可以切换 nodejs 版本了。

## NodeJS 环境和浏览器环境

1. 内置对象不同
   - 浏览器环境中提供了 window 全局对象
   - NodeJS 环境中的全局对象不叫 window，而是叫 global
2. this 默认指向不同
   - 浏览器环境中全局 this 默认指向 window
   - NodeJS 环境中全局 this 默认指向空对象`{}`
3. API 不同
   - 浏览器环境中提供了操作节点的 DOM 相关的 API 和操作浏览器的 BOM 相关 API
   - NodeJs 环境中没有 HTML 节点也没有浏览器，所以 NodeJs 环境中没有 DOM/BOM 相关 API

## 服务端和客户端开发区别

- 服务稳定性：server 端可能会遭到各种恶意攻击和误操作。单个客户端可以意外挂掉，但是服务端不能。（PM2 做进程守护）
- 考虑内存和 CPU：客户端独占一个浏览器，内存和 CPU 都不是问题。server 端要承载很多请求，CPU 和内存都是稀缺资源。（stream 写日志来优化内存和 CPU，redis 写 session 来扩展内存和 CPU）
- 日志记录：前端也会参与日志记录，但只是日志的发起放，不关心后续。server 端要记录日志、存储日志、分析日志，前端不关心。
- 安全：server 端要随时准备接收各种恶意攻击，前端则很少。越权操作、数据库攻击等。（登录验证，预防 xss 攻击和 sql 注入）
- 集群和服务拆分：产品发展速度快，流量可能迅速增加。如何通过扩展机器和服务拆分来承载大流量。
