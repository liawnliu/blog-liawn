# 小爬虫项目简介

## 前述

只是爬取网页的静态数据，使用的是[superagent](https://github.com/visionmedia/superagent)配合[cheerio](https://github.com/cheeriojs/cheerio#readme)。爬取动态数据可以使用[puppeteer](https://github.com/puppeteer/puppeteer#readme)，本项目并没有使用它。

## 使用技术

[express](http://expressjs.com/)：node 后端的一个最基础的框架，在本项目中用于实现爬取数据、存储数据、给前端提供接口。

[react](https://react.docschina.org/)：前端的一个流行框架，在本项目中用于实现登陆、展示爬虫数据。

[ts](https://www.tslang.cn/)：前端语言，js 的超集，在本项目中使用它做静态类型检查，规避很多低级错误。

## 项目地址

前端：[https://gitee.com/liawnliu/crawler_react](https://gitee.com/liawnliu/crawler_react)

后端：[https://gitee.com/liawnliu/crawler_express](https://gitee.com/liawnliu/crawler_express)

## 后端项目启动

- 先下载项目到本地`git clone https://gitee.com/liawnliu/crawler_express.git`；
- 然后用 npm 初始化项目`npm install`，可能会出现 node 版本不对的问题，切到 node 版本为 14.5.0；
- 查看 src/index.ts 里的 express 监听的端口有效，前端启动项目时会代理到这里的；
- 使用`npm run dev`编译并启动项目。

## 前端项目启动

- 先下载项目到本地`git clone https://gitee.com/liawnliu/crawler_react.git`；
- 然后用 npm 初始化项目`npm install`，可能会出现 node 版本不对的问题，切到 node 版本为 14.5.0；
- 因为 creat-react-app 这个脚手架版本的问题，可以进入前端项目的 docs 查看解决方案；
- 确认好后端项目先启动，在 package.json 中有`"proxy": "http://localhost:7001"`，确保后端使用的端口是 7001（保持一致）；
- 准备完毕后就可以使用`npm run start`启动项目了。
