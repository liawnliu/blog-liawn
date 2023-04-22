# 使用 vuepress 写 blog

## 为什么使用 vuepress

注明：本人于2023年4月22日将vuepress构建的博客迁移到用[vitepress](https://vitepress.dev/)构建的博客了。之前开发插件以及遇到的问题，基本上vitepress自带的主题都解决了。

[VuePress](https://v2.vuepress.vuejs.org/zh/)是 Vue 前端框架团队推出的一款静态网站生成器，它的优势就在于它是 Vue 官方背书。即使是[Docsify](https://docsify.js.org)它也是使用的 Vue 技术，所以我们何不直接使用 VuePress 呢。还有 Docsify 是运行时驱动，而 VuePress 提前生成静态内容，在 SEO 上会好一些。

## vuepress 的安装

- **npm 的使用**：首先得会使用 npm，查看之前写的[“Npm 的使用”](Npm的使用.md)。
- **vuepress 官网**：可以跟着[VuePress](https://v2.vuepress.vuejs.org/zh/)官网来学习使用。
- **初始化项目**：准备一个新项目的空文件夹（也可以对现有项目的 docs 进行改造，记得先**备份**docs 里的内容），在空文件夹下使用`npm init`（`yarn init`）来初始化 blog 项目（需要上传代码可以使用`git init`）。
- **安装 vuepress**：在新项目下（或者现有项目 docs 的根目录下），运行`npm install -D vuepress`（`yarn add -D vuepress`）局部安装**vuepress**，再编辑`package.json`的`scripts`如下。

  ```json
  {
    // 添加npm运行脚本
    "scripts": {
      "dev": "vuepress dev docs",
      "build": "vuepress build docs"
    }
  }
  ```

- **预览项目**：运行`npm run dev`，打开`http://localhost:8080/`，如果发现 404 问题，可以在项目的`docs`下新建一个`README.md`，`docs`就是存放博客的地方，它的`README.md`会成为根路由的渲染页面。
- **新增.gitignore**：在这个`.gitignore`文件里添加`node_modules`、`.git`、`.vscode`、`.temp`、`.cache`等。
- **迁移博客**：在初始化时提过如果是迁移就新建分支，并清空所有内容。原因是`docs`文件夹里如果存有之前的博客内容，那么 vuepress 可能会**编译报错**，就需要先将这些博客内容**暂时剪切到外面**，等下一小节**配置**的时候再移进来慢慢修改。

## 大致目录结构

```txt
ProjectName（例如blog，也可以是xxx-react，只要保证docs是真正的文档入口目录即可）
  ├── docs
  │   ├── .vuepress (可选的，用于存放全局的配置、组件、静态资源等)
  │   │   ├── components (可选的，该目录中的 Vue 组件将会被自动注册为全局组件)
  │   │   ├── theme (可选的，用于存放本地主题)
  │   │   │   └── Layout.vue
  │   │   ├── public (可选的，静态资源目录)
  │   │   ├── styles (可选的，用于存放样式相关的文件)
  │   │   │   ├── index.styl (将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级)
  │   │   │   └── palette.styl (用于重写默认颜色常量，或者设置新的 stylus 颜色常量)
  │   │   ├── templates (可选的，谨慎配置，存储 HTML 模板文件)
  │   │   │   ├── dev.html (用于开发环境的 HTML 模板文件)
  │   │   │   └── ssr.html (构建时基于 Vue SSR 的 HTML 模板文件)
  │   │   ├── config.js (可选的，配置文件的入口文件，也可以是 YML 或 toml)
  │   │   └── enhanceApp.js (可选的，客户端应用的增强)
  │   ├── book-sketches （自定义博客内容，例如生活部分）
  │   │       └──_sidebar.md （book-sketches里所有md文件组成的目录）
  │   ├── front-end （自定义博客内容，例如web部分）
  │   │       └──_sidebar.md （front-end里所有md文件组成的目录）
  │   │
  │   ├── README.md
  │   ├── guide
  │   │   └── README.md
  │   └── config.md
  │
  └── package.json
```

## 设置首页

在`docs/README.md`里加入如下文字，就可以让 vuepress 将它们渲染成首页（指定`home: true`）。`heroImage`的资源需要放到`docs/.vuepress/public`里。

```txt
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## vuepress 的基本配置

页面样式和内容都非常简陋，我们需要稍微对它进行一些配置。在`docs/.vuepress`下新建一个`config.js`文件，它就是用来配置我们 blog 项目的。

可以看官网的常见配置——[vuepress 默认主题配置](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)。

本人的配置如下：

```js
const sidebar = require("./sidebar.js");

module.exports = {
  title: "Liawn's blog",
  description: "用vuepress搭建的个人博客",
  base: "/blog-vuepress/",
  port: 4002,
  head: [
    ["meta", { charset: "UTF-8" }],
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
    toc: { includeLevel: [2, 3, 4, 5, 6] },
    // this.$page.headers里的标题层级
    extractHeaders: ["h1", "h2", "h3", "h4", "h5", "h6"],
    // markdown-it插件，解决相对路径中文图片问题
    extendMarkdown: (md) => {
      // yarn add markdown-it-disable-url-encode --dev。解决`[xxx](./img/xxx)`图片相对路径问题。
      md.use(require("markdown-it-disable-url-encode"), "./");
      // https://github.com/vuejs/vuepress/issues/2377。解决`::: v-pre`手动包裹太麻烦的问题。
      md.use(require("./render-inline-code.js"));
    },
  },
  plugins: [
    // yarn add @vuepress/plugin-medium-zoom -D。解决图片放大问题。
    "@vuepress/plugin-medium-zoom",
    // yarn add vuepress-plugin-fulltext-search -D。解决全文搜索问题。
    "fulltext-search",
  ],
  // yarn add vuepress-theme-liawn -D。引入自定义主题
  theme: "vuepress-theme-liawn",
  themeConfig: {
    // 0表示让左侧侧边栏禁止提取文章里的标题。因为我们用了vuepress-theme-liawn，右侧会有文章所有标题，那么左侧就不应该再提取了
    sidebarDepth: 0,
    // 文档更新时间：每个文件git最后提交的时间。其实关闭它可以节约打包时间
    lastUpdated: true,
    // 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接
    displayAllHeaders: false,
    // 滚动页面，侧边栏标题和 URL 中的 Hash 值会实时更新。vuepress-theme-liawn的左侧侧边栏要实现该功能，所以这里关闭自有的
    activeHeaderLinks: false,
    // vuepress-plugin-smooth-scroll有bug，这里关闭它然后在.vuepress/enhanceApp.js实现它
    smoothScroll: false,
    // 侧边栏，东西太多，单独放到了sidebar.js
    sidebar,
    // 导航栏
    nav: [
      { text: "Web", link: "/front-end/" },
      { text: "生活", link: "/book-sketches/" },
    ],
    // vuepress-theme-liawn的配置项
    rightSidebar: {
      // h1的padding-top + margin-top + a的margin-top。
      // 当top小于等于targetTop时，当前header就更新到右侧侧边栏标题和 URL 中的 Hash 值
      targetTop: 73.6 - 24 + 32 + 3.74,
      // 用于解决vuepress-plugin-smooth-scroll问题，表示是否平滑滚动
      smoothScroll: true,
    },
  },
};
```

## 侧边栏

vuepress 的侧边栏要比 docsify 要麻烦很多，但可以自己配置一些参数。大致的 sidebar 配置如下

```js
module.exports = {
  "/front-end/": [
    {
      title: "web前端",
      collapsable: false, // 一直展开，不带有折叠功能
      initialOpenGroupIndex: -1, // 默认是0表示展开第一项，现设置为-1表示初始化时全部折叠
      children: [
        {
          title: "学习JavaScript",
          path: "/front-end/html、css、js、ts/学习JavaScript/",
          collapsable: true, // 具有折叠功能
          children: [
            "/front-end/html、css、js、ts/学习JavaScript/1.基础语法",
            "/front-end/html、css、js、ts/学习JavaScript/2.变量、作用域和内存问题",
          ],
        },
        {
          title: "学习CSS",
          collapsable: true,
          path: "/front-end/html、css、js、ts/学习CSS/",
          children: ["/front-end/html、css、js、ts/学习CSS/1.选择器"],
        },
        {
          title: "学习TypeScript",
          collapsable: true,
          path: "/front-end/html、css、js、ts/学习TypeScript/",
          children: ["/front-end/html、css、js、ts/学习TypeScript/1.typescript基础"],
        },
        {
          title: "学习Vue",
          collapsable: true,
          path: "/front-end/web前端js框架/学习Vue/",
          children: ["/front-end/web前端js框架/学习Vue/1.vue基础"],
        },
      ],
    },
    {
      title: "常用工具",
      collapsable: false,
      children: ["/front-end/常用工具/Npm的使用", "/front-end/常用工具/Git的使用"],
    },
    {
      title: "面试准备",
      collapsable: false,
      children: ["/front-end/面试准备/WEB前端面试"],
    },
  ],
  // 第二个侧边栏，对应导航栏的第二项
  "/book-sketches/": [
    {
      title: "电脑工具",
      collapsable: false,
      children: ["/book-sketches/电脑工具/win10下载与安装"],
    },
    {
      title: "日常生活",
      collapsable: false,
      children: ["/book-sketches/日常生活/土味情话"],
    },
  ],
};
```

如果侧边栏里的每项要加上`1.`、`2.`这样的序号（但文章里的标题又不需要`1.`、`2.`），可以在文章 md 最上方加上如下代码（yml 形式的 title，缺点就是要修改 md），当然如果文章里的标题本身就带了`1.`、`2.`就可以不用加下面的代码。

```yml
---
title: 1.环境搭建
---

```

如果不想使用 yml 来实现的话，可以使用下面另外两种方式（稍微麻烦一点，但是无需修改 md）

```js
// 第一种方式就是title+path；第二种方式就是一个数组，第一项就是path，第二项就是title
module.exports = [
  {
    title: "1.自定义标题1", // 方式一：title+path，title就是自定义标题
    path: "/xxx/",
  },
  ["/xxx/", "2.自定义标题2"], // 方式二：数组，第一项就是path，第二项就是title
  "xxx", // 方式三：要么标题本身就带有`1.`、`2.`，或者在md最上方加了yml形式的title（缺点就是要修改md）
];
```

## 编译部署

vuepress 打包非常慢，可以看[feat($core): 改进 VuePress 制作时间](https://github.com/vuejs/vuepress/pull/2163)、[feat($core): 使用 Node 的工作线程提高构建性能](https://github.com/vuejs/vuepress/pull/2189)、[Vuepress 构建太慢了？！](https://github.com/vuejs/vuepress/issues/1560)

我用的是[itsxallwater](https://github.com/itsxallwater)提供的解决方案

- 在 package.json 里添加一个新的打包命令：`"new-build": "docs/.vuepress/scripts/build.sh"`
- [具体脚本](https://github.com/zumasys/docs/tree/master/site/.vuepress/scripts)
- 将上一步的`scripts`文件夹复制到`docs/.vuepress`下
- build.sh 稍做修改（updateBuildScript.js 和 addWorkerScript.js 不变）

```bash
#!/bin/sh
cp docs/.vuepress/scripts/updateBuildScript.js node_modules/@vuepress/core/lib/node/build/index.js
cp docs/.vuepress/scripts/addWorkerScript.js node_modules/@vuepress/core/lib/node/build/worker.js
vuepress build docs
```

运行`yarn new-build`，打包需要 6 分钟左右（如果不使用以上解决方案，我试过至少需要 12h）。打包好的内容在`docs/.vuepress/dist`，在它部署到 GiteePages 或者 GithubPages 上。

![GiteePages](./img/GiteePages.png)

## 常见问题

1. 中文图片路径问题

   - 要使用`markdown-it-disable-url-encode`插件。
   - 先`yarn add markdown-it-disable-url-encode --dev`，然后在`docs/.vuepress/config.js`加入如下代码：

     ```js
     module.exports = {
       markdown: {
         // markdown-it插件，解决相对路径中文图片问题
         extendMarkdown: (md) => {
           md.use(require("markdown-it-disable-url-encode"), "./");
         },
       },
     };
     ```

   - 具体参考[Vuepress 图片资源中文路径问题](https://segmentfault.com/a/1190000022275001/)

2. markdown 中的花括号和 Vue 的插值冲突问题，可以用`v-pre`解决

   ```js
   ::: v-pre
   `{{ xxx }}`
   :::
   ```

   用`::: v-pre`包裹其实很麻烦，md 很多，那么手动在每个 md 里相关地方都得加上这个`::: v-pre`，所以需要一个插件来让所有 md 里所有与`<code>`相关的都用上`v-pre`，参考[内联代码应禁用插值 ](https://github.com/vuejs/vuepress/issues/2377)

   ```js
   // https://github.com/vuejs/vuepress/issues/2377
   const { escapeHtml } = require("markdown-it/lib/common/utils");

   function renderInlineCode(tokens, idx, options, env, renderer) {
     var token = tokens[idx];

     return "<code v-pre" + renderer.renderAttrs(token) + ">" + escapeHtml(tokens[idx].content) + "</code>";
   }

   module.exports = function (md, config) {
     md.renderer.rules.code_inline = renderInlineCode;
   };
   ```

3. `window`、`document`不能使用的问题。

- [浏览器的 API 访问限制](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)
- `document`有其他解决访问，如`this.$root.$el`或`this.$parent.$el`

4. `vuepress-plugin-smooth-scroll`有两个问题。1.页面重加载(F5)时，`vuepress-plugin-smooth-scroll`的 scrollBehavior 中的 hash 是 encode 后的，其实`node_modules\@vuepress\core\lib\client\app.js`中的 scrollBehavior 早已解决了这个问题。2.还是页面重加载(F5)时，但 URL 带了 hash，如果页面上的内容没有完全加载完，那么很有可能获取不到 hash 对应的 anchor 正确位置。解决方案，新增`.vuepress/enhanceApp.js`。enhanceApp.js 如下：

   ```js
   /* eslint-disable no-param-reassign */
   function scrollBehavior({ Vue, router, siteData }) {
     // 确保themeConfig.smoothScroll关闭了，也就是不使用vuepress-plugin-smooth-scroll
     if (siteData.themeConfig.smoothScroll) return;
     // 添加滚动平滑的样式，记得要配置themeConfig.smoothScrollPlus
     document.documentElement.style.scrollBehavior = siteData.themeConfig.smoothScrollPlus ? "smooth" : "";
     // 可以参考 node_modules\@vuepress\core\lib\client\app.js 的 createApp 中的 scrollBehavior
     // 滚动行为，有两点需要注意，一个是页面所有内容加载完才那to.path进行滚动，另一个是to.path要解码
     router.options.scrollBehavior = (to, from, savedPosition) => {
       if (savedPosition) {
         // 这个场景是点击浏览器“前进/后退”
         return savedPosition;
       }
       if (to.hash) {
         if (Vue.$vuepress.$get("disableScrollBehavior")) {
           return false;
         }
         // https://github.com/vuejs/vuepress/pull/2639
         const hash = decodeURIComponent(to.hash);
         // 该场景是点击文章中某个anchor（或者切换到另一篇文章并且带hash）
         if (document.querySelector(hash)) {
           return { selector: hash };
         }
         // 这个场景是页面F5刷新（初次加载），里面的图片等还未加载完，必须它们加载完再滚动，否则滚动不到准确位置
         return new Promise((resolve) => {
           // https://github.com/vuejs/vuepress/issues/1499#issuecomment-849148930
           // 如果换成Vue.nextTick(() => {})还是没效果
           window.onload = () => {
             resolve({ selector: hash });
           };
         });
       }
       // 这个场景是切换到另一篇文章，但不带hash（滚到顶部）
       return { x: 0, y: 0 };
     };
   }
   export default ({
     Vue, // VuePress 正在使用的 Vue 构造函数
     options, // 附加到根实例的一些选项
     router, // 当前应用的路由实例
     siteData, // 站点元数据
   }) => {
     // 关闭vuepress-plugin-smooth-scroll，并且
     // 增强node_modules\@vuepress\core\lib\client\app.js 的 createApp 中的 scrollBehavior
     scrollBehavior({ Vue, options, router, siteData });
   };
   ```

   上面的解决方案其实还有一个问题，那就 window.onload 只能解决初次加载，而如果路由切换时新页面有大量图片，上面的方案就不行了，另一种解决方案就在`Page.vue`里对`$route.path`进行监听，只要它改变了就将`imgLoaded`置为`false`，当所有图片加载完就置为`true`；`router.options.scrollBehavior`里起一个定时器（或观察者），直到`imgLoaded`变为`true`就 scroll 到具体位置。具体代码看[enhanceApp.js](https://github.com/liawnliu/vuepress-theme-liawn/blob/master/enhanceApp.js)和[Page.vue](https://github.com/liawnliu/vuepress-theme-liawn/blob/master/components/Page.vue)

5. 还有一种场景会让滚动失效。例如某个 md 文档中的链接是`[一、第一章](#一、第一章)`，点击它会跳转本篇文章的`一、第一章`，此时滚动还是正常的，而此时点击浏览器“后退按钮”想返回到上一次的 hash 时，会发现 URL 中 hash 确实变了，但实际页面并没有滚动到这个 hash 对应的标题也就是`[一、第一章](#一、第一章)`。其实右侧侧边栏就不会有这个问题，原因就是右侧侧边栏的所有链接地址都是完整的，那么前面这个问题**解决方案**：补充 md 文档中所有跳转路径，例如`[一、第一章](./2.盒模型.md#一、第一章)`，你 F12 查看这个新修改的元素，就会发现它与右侧侧边栏的实际 href 一样了，那么点击浏览器“前进/后退按钮”都能正常滚动了。
