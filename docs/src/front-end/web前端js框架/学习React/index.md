# 学习 react 的准备工作

## 介绍

[React](https://react.docschina.org/)由来：

1. 起初由 Facebook 的软件工程师 Jordan Walke 创建。
2. 于 2011 年部署于 Facebook 的 newsfeed。
3. 随后在 2012 年部署于 Instagram。
4. 2013 年 5 月宣布开源

React 是一款将数据渲染成 HTML 页面的 JavaScript 开源库。它使用**函数式编程**进行**组件化**式的开发，组件间遵循**单向数据流**。

组件化：将页面分割成许多独立的组件（可自由组合），这些组件有自己的功能逻辑，组件也可以复用在很多地方，以达到功能相同风格一致的目的。组件是独立的但彼此之间还是存在一定的关联，可以通过数据流来达到联动的目的。

单向数据流：两种理解，一是组件间的数据只能是上层流动到下层，如要传递回上层得**另外**通过回调函数等方式；二是数据存储与 UI 之间只能是数据决定 UI 展示，如要让 UI 的变化影响数据的话得**另外**使用`setState`等方式。

函数式编程：因为组件自由组合的缘故，基本用不到组件继承，组件间组合的代码书写还有复用这与函数式编程的方式没什么区别。

## 环境准备

1. 保证本地有[node.js](/front-end/常用工具/Npm的使用.md)还有[git](/front-end/常用工具/Git的使用.md)。
2. 使用的编辑器是[vscode](/front-end/常用工具/VSCode的使用.md)，打包工具是[webpack](/front-end/常用工具/webpack的使用.md)。
3. 使用的语言是 js（还有 jsx），当然也可以用[typescript](/front-end/html、css、js、ts/学习TypeScript/index.md)。
4. 脚手架工具是[create-react-app](https://github.com/facebook/create-react-app)。
   - 可以先卸载老旧的 create-react-app，`npm uninstall create-react-app -g`；
   - 然后全局安装 create-react-app，`npm install create-react-app -g`；
   - 在一个空目录或者你的前端 workspace 下运行运行`npx create-react-app my-app`，其中`my-app`是项目名。如果是 ts 项目，就输入`npx create-react-app my-app --template typescript`
   - 4.0.0 版本的 create-react-app 脚手架有些问题，需要修改 node_modules 里的 webpack 配置，具体去[react 相关问题](./react相关问题.md)里查看。
5. 删除暂时不需要的文件（按自己的需要留）：
   - 删除入口文件 index.tsx 中的 reportWebVitals（性能分析）和 index.css 的使用，对应删除 reportWebVitals.ts 文件和 index.css 文件；
   - 清空 App.tsx 中的所有内容，删除 logo.svg 文件和 App.css 文件；
   - 删除测试相关的文件 setupTests.ts 和 App.test.tsx（自动化测试）。
6. 如果你不想用脚手架，可以用`<script>`方式引进来

   ```html
   <!-- react核心库。https://react.docschina.org/docs/add-react-to-a-website.html -->
   <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
   <!-- react操作dom的库 -->
   <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
   <!-- 编译jsx、es5以上的语法。https://www.babeljs.cn/setup#installation -->
   <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
   <!-- 如果要使用jsx那就要将text/javascript换成text/babel -->
   <script type="text/babel">
     // 你的jsx代码
   </script>
   ```

7. 安装**React 开发调试工具**，打开[chrome 网上应用店](https://chrome.google.com/webstore/category/extensions)，在搜索栏里搜索“React.js devtools”，确认一下提供方是 Facebook，安装它之后，点开这个扩展程序，将“允许访问文件网址”打开。

8. 推荐 VSCode 中的“ES7 React/Redux/React-Native/JS snippets”插件

## 简单了解一下项目结构

1. 项目**常见目录和文件**：
   - `node_modules`存储的是项目需要的 npm 局部包，通过`npm install`下载的局部包都在这个文件夹下。
   - `public`存储的是项目的静态资源文件。
   - `src`存储的是项目的源代码。
   - 如果经过`npm run bulid`命令打包项目后会生成一个`bulid`文件夹，存储着浏览器可执行的代码（es5 等）。
   - 如果经过`npm run eject`命令进行配置文件弹出的话会生成`config`文件夹。
   - `package.json`和`package-lock.json`是 npm 包的清单和配置信息。
   - `tsconfig.json`是 ts 编译配置文件。
2. **根节点**：

   - **public/index.html**中的`<div id="root"></div>`就是根节点，react 元素会被动态挂载到这个 div 根节点上。
   - js 的入口就是**src/index.tsx**，其中有个`ReactDOM.render(<App />, document.getElementById('root'))`，这就是连接 html 和 js 的根节点代码。

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
       <!-- 用于开启理想视口，用于做移动端网页适配 -->
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <!-- 用于配置浏览器页签+地址栏的颜色（仅支持安卓手机浏览器） -->
       <meta name="theme-color" content="#000000" />
       <meta name="description" content="learn-react" />
       <!-- 用于指定网页添加到手机主屏幕后的图标（苹果系统） -->
       <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
       <!-- 应用加壳（web变手机应用）的配置文件 -->
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
       <title>React App</title>
     </head>
     <body>
       <noscript>You need to enable JavaScript to run this app.</noscript>
       <!-- 根容器 -->
       <div id="root"></div>
     </body>
   </html>
   ```

3. **package.json**文件：

   - **dependencies**依赖中有两个比较重要的源文件模块`react`和`react-dom`，这是 react 的核心所在。然后还有一个`react-scripts`，可以把它理解成一个傻瓜版的 webpack，负责编译打包加载文件等功能。
   - **scripts**下有四个命令：
     - `start`是启动一个本地服务器，将项目在这个本地服务器上进行托管，在浏览器上打开对应的地址就可以浏览 react 项目的网页了。
     - `build`用于编译打包项目的，因为项目目前都是使用 es6 或者 ts 语法的，需要经过编译生成 es5 代码让浏览器使用。
     - `test`用于做单元测试等测试程序的。
     - `eject`帮助我们弹出项目的配置文件（前提先提交到 git），但是会对项目造成不可逆的结构性改变，不是特殊需求还是不要进行这一步。

4. 周边库：`nanoid`生成唯一 id，使用`npm i nanoid`进行局部安装；

## 简单了解一下 ts 编译相关

1. tsconfig.json 中**compilerOptions**的常见项：
   - **noImplicitAny**：在表达式和声明上有隐含的 any 类型时报错。如果需要进行 ts 和 js 的混合编写的话，这个值可以设置为`false`，去掉报错信息。
   - **target**：编译后的目标文件的 es 版本，一般是`es5`（主流浏览器），如果是 react-native 可以使用`es6`。
   - **lib**：编译期间所需要的库文件，为了告诉编译器可以使用哪些功能。例如`document.getElementById('root')`就需要使用 dom 这个库。
   - **allowJs**：允许混合编译 js 文件，一般设置为`true`。
   - **esModuleInterop**：允许我们使用 CommonJS 的方式来导入导出文件，一般设置为`true`。不开启的话得使用`import * as React from 'react'`这种比较麻烦的写法。
   - **module**：配置我们的代码使用哪个模块系统。有 node.js 的`CommonJS`系统，es6 标准的`esnext`或`es6`系统，requirejs 的`AMD`系统。常使用`esnext`，使用`CommonJS`也是可以的。
   - **moduleResolution**：决定我们编译器的工作方式，也决定各个文件调用、import 的工作流程。一般是`node`，还有一个值`classic`在 19 年被废弃了。
   - **isolatedModules**：编译器会将每个文件作为单独的模块来使用，一般设置为`true`。
   - **noEmit**：当发生编译错误时，编译器不会生成对应的 js 代码，一般设置为`true`。
   - **jsx**：允许编译器支持编译 react 代码，设置的值为`react`，表示生成 js。另外还可以取值`preserve`是保留 jsx 形式，取值`react-native`内容还是 jsx 形式但拓展名是 js 了；还有两个`react-jsx`和`react-jsxdev`是新的转换，可以看[介绍全新的 JSX 转换](https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)。
2. tsconfig.json 中的**其他项**：
   - **include**：需要编译的文件，使用文件的相对路径或绝对路径。`**`表示任意子目录，`*`表示任意文件名，`?`表示可忽略的。
   - **exclude**：将会从编译中排除的文件，使用方法和 include 一样，经常用于排除 include 里不需要的文件，也还会排除`node_modules`、测试文件和编译输出目录。如果省略此选项，将会使用`outDir`作为指定目录
   - **files**：始终会被编译的文件，不会受到 exclude 的影响。
3. ts 编译器的读取 tsconfig.json：
   - 在`node_modules\react-scripts\config\webpack.config.js`文件里有一行代码`const useTypeScript = fs.existsSync(paths.appTsConfig);`，其中这个`appTsConfig`指向了项目根目录下的`tsconfig.json`。
   - 仍然是那个文件，在里面搜索`require.resolve('babel-loader')`，这个就是项目的编译器，会把`/\.(js|mjs|jsx|ts|tsx)$/`这些文件编译成 es5 代码，编译时通过 tsconfig.json 再具体去做编译工作。
