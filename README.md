本博客[blog-liawn](https://github.com/liawnliu/blog-liawn.git)是依赖[vitepress](https://vitepress.dev/)搭建的。

本博客是从原来博客的[blog-vuepress](https://github.com/liawnliu/blog-vuepress.git)迁移而来的，原来博客使用的是[vuepress@v1](https://v1.vuepress.vuejs.org/zh/)搭建的。

本博客做了GitPages+Cloudflare+域名这样的处理，具体处理教程自行百度吧，我的[博客入口](https://www.liawnliu.com)

本博客依赖的vitepress从1.0.0-alpha.73升级到1.3.4的说明：

关于代码和环境，基本对我们自己代码是没什么影响的。但值得注意的是Node版本得至少是18这个大版本，本地启动时报错基本就是Node版本不对；`config.ts`变为了`config.mts`，deploy.yml参考vitepress官网最新的就行，其他没什么变化。

关于部署，可以先本地构建，本地构建能通过再考虑部署到其他地方。我是部署到github-pages。项目里的deploy.yml基本是从[vitepress-部署](https://vitepress.dev/zh/guide/deploy)这一章借鉴的，主要改了“branches”和“Build with VitePress”。意思是构建的分支要改成你自己指定的分支，并且要在GitHub有关github-pages页面里检查是否对部署分支做了限制，否则会部署失败；“Build with VitePress”是从`npm run docs:build`改成了`npm run build`。

关于本地其他机器访问正启动机器，如果你的本地其他机器浏览器用了SwitchyOmega的自动d理模式的话，可能会出现报错，处理方式是把本地浏览地址放行，实在弄不会就不要使用自动模式。本地其他机器屏幕很大的话，目前VitePress默认主题不会太自适应屏幕宽度，有精力的可以自己改一改，我只做了滚动条的样式调整。
