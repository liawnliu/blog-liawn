# webpack 的使用

官方文档：[https://www.webpackjs.com/concepts/](https://www.webpackjs.com/concepts/)

## 什么是 webpack

webpack 是 js 应用程序的静态模块打包器(module bundler)。它会将应用程序的资源文件当成一个个模块，根据模块之间的依赖关系递归处理它们，构建一个依赖关系图(dependency graph)，最后将应用程序需要的每个模块打包成一个或多个 bundle。

## 安装使用

1. 下载并安装 Node.js，然后在命令行工具里输入`npm init`来创建`package.json`，在之前的[Npm 的使用](./Npm的使用.md)有讲过。
2. 输入`npm install --save-dev webpack@<version>`来局部安装 webpack。
3. 继续输入`npm install --save-dev webpack-cli`来局部安装 webpack 的命令工具。
4. 新建 webpack.config.js 配置文件，这个就是项目中 webpack 的关键所在。

## 入口 entry

入口 entry：webpack 构建的起点入口，会从这里递归处理它所有依赖的模块并开始打包。

1. 单入口写法：

   ```js
   const config = {
     entry: {
       main: "./src/Main.ts",
     },
   };
   // 上面的简写
   const config1 = {
     entry: "./src/Main.ts",
   };
   ```

2. 数组形式的多入口写法：

   ```js
   const config = {
     entry: ["./src/Main.ts", "./test/Test.ts"],
   };
   ```

3. 对象形式的多入口写法：

   ```js
   // 分离 应用程序(app) 和 第三方库(vendor) 入口
   const config = {
     entry: {
       app: "./src/app.js",
       vendors: "./src/vendors.js",
     },
   };
   // 多页面应用程序
   const config1 = {
     entry: {
       pageOne: "./src/pageOne/index.js",
       pageTwo: "./src/pageTwo/index.js",
       pageThree: "./src/pageThree/index.js",
     },
   };
   ```

## 出口 output

出口 output：指定 webpack 最后将打包好的文件存放在哪里，并怎么命名。

```js
const config = {
  output: {
    filename: "bundle.js", // 打包文件的命名
    path: "/home/proj/public/assets", // 存放地址
  },
};
```

多入口对应的出口处理：

```js
const config = {
  entry: {
    app: "./src/app.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name].js", // 使用占位符(substitutions)来确保每个文件具有唯一的名称
    path: __dirname + "/dist", // __dirname是当前webpack.config.js所在的路径，拼接上dist
  },
}; // 更高级的拼接是path.join，或者使用path.resolve将后面的参数处理成目标路径
```

## 模式 mode

模式 mode：为 webpack 提供模式配置的优化，有两个值`development`和`production`

设置为`development`或`production`都会创建一个全局变量`process.env.NODE_ENV`，用于区分应用程序的环境是开发环境还是生产环境。

设置为`development`，会启用`NamedChunksPlugin`和`NamedModulesPlugin`。`NamedChunksPlugin`的作用就是给每个 chunks 进行命名，方便开发人员来查找打包后的文件；`NamedModulesPlugin`也是类似的作用，会给某个打包的模块进行命名，有一个独一无二的 key 方便开发人员调试。

```js
module.exports = {
+ mode: 'development'
- plugins: [
-   new webpack.NamedModulesPlugin(),   // 对打包后的模块进行命名
-   new webpack.NamedChunksPlugin(),    // 对打包后的chunks进行命名
-   new webpack.DefinePlugin({
-     "process.env.NODE_ENV":JSON.stringify("development")
-   }), // 添加全局变量NODE_ENV
- ]
}
```

设置为`production`，会启用`FlagDependencyUsagePlugin`（标记没有用到的依赖）, `FlagIncludedChunksPlugin`（给当前 chunk 包含的 chunkid 加入 chunk 名之中）, `ModuleConcatenationPlugin`（作用域提升，打包成闭包，达到预编译的目的）, `NoEmitOnErrorsPlugin`（忽略错误信息，将其他正确的信息正确输出到 output）, `OccurrenceOrderPlugin`（按照调用次数来给 chunks 排序）, `SideEffectsFlagPlugin`（如果当前的模块没有被引用，而且 package.json 中的 sideEffects 为 false，那么打包的时候就可以将此模块剔除） 和 `UglifyJsPlugin`（混淆压缩）。

```js
module.exports = {
+  mode: 'production',
-  plugins: [
-    new UglifyJsPlugin(/* ... */),
-    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-    new webpack.optimize.ModuleConcatenationPlugin(),
-    new webpack.NoEmitOnErrorsPlugin()
-  ]
}
```

## 转换 loader

转换 loader：使用 webpack 对模块源代码进行转换，可以将所有类型的文件转换为 webpack 能够处理的有效模块。

1. css loader  
   安装 **style-loader** 和 **css-loader**，`npm install --save-dev style-loader css-loader`  
   配置：在 webpack.config.js 文件里配置 module 中的 rules，`use: ['style-loader', 'css-loader']`  
   注意：use 属性里 style-loader 要放在 css-loader 前

   ```js
    {
       test: /\.css$/, // test属性用于标识出应该被对应的loader进行转换的某个或某些文件
       use: ['style-loader', 'css-loader'] // use属性表示进行转换时应该使用的哪个loader
    }
   ```

2. less loader  
   安装 **less-loader** 和 **less**，`npm install --save-dev less-loader less`  
   配置：在 webpack.config.js 文件里配置 module 中的 rules，`use: ['style-loader', 'css-loader', 'less-loader']`

   ```js
    {
        test: /\.less$/,
        use: ['style-loder', 'css-loader', 'less-loader']
    }
   ```

3. sass loader  
   安装 **sass-loader** 和 **node-sass**，`npm install --save-dev sass-loader node-sass`  
   配置：在 webpack.config.js 文件里配置 module 中的 rules，`use: ['style-loader', 'css-loader', 'sass-loader']`  
   注意：还可以写成 use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]
4. postcss loader 自动加上浏览器前缀  
   安装 postcss-loader 和 autoprefixer，npm install --save-dev postcss-loader autoprefixer  
   配置：在 webpack.config.js 文件里配置 module 中的 rules

   ```js
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', {
            loader: "postcss-loader",   // 添加浏览器前缀，压缩 CSS
            options: {
                plugins: [
                    require("autoprefixer")
                    ({
                        browsers: [
                            'ie >= 8', // ie版本大于等于ie8
                            'Firefox >= 20', // 火狐浏览器大于20版本
                            'Safari >= 5', // safari大于5版本
                            'Android >= 4', // 安卓版本大于4
                            'Ios >= 6', // ios版本大于ios6
                            'last 4 version' // 浏览器最新的四个版本
                        ]
                    })
                ]
            }
        }]
    }
   ```

5. file loader 文件处理
   安装 **file-loader**，`npm install --save-dev file-loader`
   选项配置：
   name:为你的文件配置自定义文件名模板(默认[hash].[ext])
   context:配置自定义文件的上下文，默认为 webpack.config.js 所在的位置
   publicPath:为你的文件配置自定义 public 发布目录
   outputPath:为你的文件配置自定义 output 输出目录
   [ext]:资源扩展名
   [name]:资源的基本名称
   [path]:资源相对于 context 的路径
   [hash]:内容的哈希值

   ```js
    {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[path]xxx.jpg', // path是该图片实际的位置（相对于上下文）
                context: '../', // 指定上下文
                publicPath: 'https://www.abc.com/img', // 用于cdn
                outputPath: './img', // 直接打包生成在bin/img目录下了而不是bin/[path]了
                name: '[hash]xxx.jpg' // hash值
            }
        }]
    }, {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [{
            loader: 'file-loader',
            options: {
                outputPath: './font'
            }
        }]
    }
   ```

6. babel loader es6 转 es5
   安装 **babel-loader**(负责 es6 语法转换)、**babel-core**(babel 核心包)、**babel-preset-env**(告诉 babel 使用哪种转码规则进行
   文件处理)，`npm install babel-loader @babel/core @babel/preset-env --save-dev`

   ```js
    {
        test: /\.js$/,
        exclude: /node_modules/, // 或者include: path.resolve(__dirname, "src/js"),指定位置提高构建效率
        use: [{
            loader: 'babel_loader',
            options: {
                preset: ['@babel/preset-env']
            }
        }]
    }
   ```

7. ts loader
   安装 **typescript**、**ts-loader**，`npm install --save-dev typescript ts-loader`。

   ```js
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
   ```

   其实 ts 的使用还要配置 tsconfig.json，其中 target 设置为“es5”意思是编译到 es5，还有 sourceMap 改为 true，再配合 webpack 的`devtool: 'inline-source-map'`就可以在开发环境上调试了。

8. csv xml loader
   安装 **csv-loader**、**xml-loader**，`npm install --save-dev csv-loader xml-loader`

   ```js
    {
        test: /\.(csv|tsv)$/,
        use: [
            'csv-loader'
        ]
    },{
        test: /\.xml$/,
        use: [
           'xml-loader'
        ]
    }
   ```

## webpack-dev-server

webpack-dev-server 用来配置本地服务器的，使用它可以为 webpack 打包生成的资源文件提供 web 服务，还有自动刷新和热替换(HMR)。

安装 webpack-dev-server 使用的是`npm install --save-dev webpack-dev-server`。

在 webpack.config.js 写上 devServer 配置

```js
devServer: {
    contentBase: path.join(__dirname, "bin"), // 设置服务器访问的基本目录
    host: 'localhost', // 服务器的ip地址
    port: 8080, // 端口号
    open: true, // webpack运行服务器时自动打开页面
    hot: true // 热更新开关
}
```

在 package.json 的 scripts 里添加配置

```json
"scripts": {
    "webpack-dev-server": "webpack-dev-server --mode development"
}
```

在开启热更新后（只能开发环境使用），还要在插件中添加 **NamedModulesPlugin** 和 **HotModuleReplacementPlugin** 插件，以便更容易查看要修补(patch)的依赖。

```js
plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()];
```

## 树摇 tree shaking

树摇 tree shaking：代码中有一些未被引用的模块，webpack 可以在打包过程中将其剔除，就像将树上枯萎的叶子摇落下来。使用它的原因就是生产打包后的代码包体会减小，对于项目的优化比较重要。

在 **package.json** 里设置`sideEffects: false`会告知 webpack 可以放心安全地删除未用到的 export 导出，但是项目确实有一些这样未使用的模块但又不想删除它，那就是可以将 sideEffects 设置为一个数组：

```json
"sideEffects": [
    "./src/some-side-effectful-file.js"
]
```

当然，在 **webpack.config.js** 里也能设置可以存在的未使用模块，在打包后不会被删除：

```js
module.rules: [
  {
    include: path.resolve("node_modules", "lodash"),
    sideEffects: false
  }
]
```

## 生产环境构建

生产环境不同于开发环境，它需要的 bundle 要小、source map 要轻量还有更优化的资源，那么建议单独为生产环境配置一个 config，或者说将项目的 webpack 配置分为“通用”、“开发”和“生产”三种，然后使用 **webpack-merge** 工具将其合并。

安装 **webpack-merge**，`npm install --save-dev webpack-merge`，然后创建`webpack.common.js`、`webpack.dev.js`和`webpack.prod.js`三个文件。**最后还要修改 package.json，而且 require 进来的插件也要安装一下。**

**package.json**：

```json
"scripts": {
    "serve": "webpack-dev-server --open --config webpack.dev.js --mode development",
    "build:dev": "webpack --open --config webpack.dev.js --mode development",
    "build:pro": "webpack --config webpack.prod.js --mode production",
},
```

**webpack.common.js**：

```js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.js" }, // 入口
  output: {
    filename: "[name].bundle.js", // 出口的文件名，[name]就是入口中使用的名字
    path: path.resolve(__dirname, "dist"), // 处理输出位置
  },
  module: {
    rules: [
      {
        // 使用tsloader
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin({
      // 打包生成dist前会自动删除dist下的文件，使用npm脚本“rm -rf ./dist”也可以
      cleanOnceBeforeBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      // 用于生成入口html（存于dist），然后会自动引入打包好的bundle.js
      title: "Production",
      template: "./index.html", // 模板，webpack生成html时用到的模板，比如模板里要挂载vue。
    }),
  ],
};
```

**webpack.dev.js**：

```js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map", // 开发环境所使用的SourceMap
  devServer: {
    // webpack-dev-server
    contentBase: path.resolve(__dirname, "dist"), // 设置服务器访问的基本目录
    host: "localhost", // 服务器的ip地址
    port: 8080, // 端口号
    open: true, // webpack运行服务器时自动打开页面
  },
});
```

**webpack.prod.js**：

```js
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map", // 用于生产的SourceMap
  plugins: [
    // 代码混淆压缩，当然你也可以考虑使用BabelMinifyWebpackPlugin或ClosureCompilerPlugin
    new UglifyJSPlugin({
      sourceMap: true, // 用于生产的SourceMap
    }),
    // 为项目设置环境变量，指定环境为生产环境，打包出的bundle会小很多。
    // 也可以在package.json里加上--env.NODE_ENV=production，但是得把env传到webpack.prod.js里来，将对象改为函数
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
```

## 代码分离和缓存

**代码分离**：因为入口 chunks 之间可能包含重复的模块，并会被加载到不同的 bundle 里，那么就得对重复的模块从原有的文件中分离出来。

```js
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: "common", // 指定公共 bundle 的名称。
  }),
];
```

当然，代码分离还有 **import()语法** 和 **require.ensure** 方案；可以使用 **webpack-visualizer** 工具来检查哪些模块占用空间哪些可能是重复使用的。

**缓存**：在项目版本更新时，不是所有的资源都要更新的，旧的没有改变的要使用缓存。

**CommonsChunkPlugin** 其实还有一个功能：在每次修改后的构建结果中，将 webpack 的 **样板** 和 **manifest** 提取出来。**样板(boilerplate)** 指 webpack 运行时的引导代码；**manifest**：当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点，这些数据集合称为 manifest。

```js
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest", // 指定公共 manifest 的名称。
  }),
];
```

那么被提出来的 manifest 会生成类似 manifest.719796322be98041fff2.js 的 bundle 文件，还有第三方库例如 lodash 或 react，也可以通过 **新入口 entry 配合 CommonsChunkPlugin** 来将它们提取到一个 bundle 文件里，这样就能减少从服务端资源的获取。

```js
entry: {
    main: './src/index.js',
    vendor: [
       'lodash'
    ]
},
plugins: [
    new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor' // 必须在manifest之前
    })
    new webpack.optimize.CommonsChunkPlugin({
       name: 'manifest'
    })
]
```

当我们添加新的函数时，vendor、manifest 和 main 这三个 bundle 的 hash 其实都会改变，其中 main 的 hash 的改变当然是因为它本身新增内容了，manifest 的改变也自然是因为内部新增了一个模块，而 vendor 是因为前面的 module.id 增加了一个（会基于默认的解析顺序进行增量，就像是 bundle 中函数的索引），使用 **HashedModuleIdsPlugin** 可以解决 vendor 的问题。

```js
plugins: [
  new HashedModuleIdsPlugin(), // 解决添加新的函数时vendor的hash值会变的问题，建议用于生产环境
];
```

## 处理全局变量和函数

引入第三方的库之后会提供一些全局变量给开发者使用，而 webpack 是为了让代码模块化，减少模块之间的隐式依赖。使用 **ProvidePlugin**，编译每个模块时在遇到该全局变量就会获取对应的 package 包，在其他模块中使用这个全局变量时就会引用并使用这个 package 包。

```js
plugins: [
  new webpack.ProvidePlugin({
    _: "lodash", // _和lodash就类似于$和jQuery
  }),
];
```

如果要使用第三方库的多个导出函数，将 ProvidePlugin 中的参数的字符串形式改为路径数组形式，例如[module, child, ...children?]

```js
plugins: [
  new webpack.ProvidePlugin({
    join: ["lodash", "join"], // 使用lodash中的join方法，还有的话数组里继续加
  }),
];
```

这样的 ProvidePlugin 使用法再配合树摇，就可以剔除第三方库中未被引用的导出函数。除了使用 **ProvidePlugin** 之外，还可以使用 **exports-loader** 将一个全局变量作为一个普通的模块来导出。

```js
module: {
  rules: [
    {
      test: require.resolve("globals.js"),
      use: "exports-loader?file,parse=helpers.parse", // 将file全局变量和helpers.parse全局函数导出来
    },
  ];
}
```

## 离线程序

将 web 应用做成离线程序，可以使用 **[Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/)** 的网络技术，对应在 webpack 中是使用 **workbox-webpack-plugin** 插件，`npm install workbox-webpack-plugin --save-dev`。

```js
plugins: [
  new WorkboxPlugin.GenerateSW({
    // 这些选项帮助 ServiceWorkers 快速启用
    // 不允许遗留任何“旧的” ServiceWorkers
    clientsClaim: true,
    skipWaiting: true,
  }),
];
```

打包时会生成一个 sw.js，继续为程序注册 serviceWorker

```js
import _ from "lodash";
import printMe from "./print.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // 注册serviceWorker
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
```

## 公共路径

像一些资源的使用，在开发环境中是 assets 目录下，在生产环境就可能是 CDN 这种形式，那么就需要一个公共路径变量。

```js
import webpack from "webpack";

// 如果预先定义过环境变量，就将其赋值给`ASSET_PATH`变量，否则赋值为根目录
const ASSET_PATH = process.env.ASSET_PATH || "/";

export default {
  output: {
    publicPath: ASSET_PATH,
  },

  plugins: [
    // 该插件帮助我们安心地使用环境变量
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};
```

另一个可能出现的情况是，我们需要即时设置公共路径。webpack 提供一个全局变量供你设置，它名叫 **webpack_public_path**。所以在你的项目入口(import 之后使用)，你可以简单地设置如下：

```js
__webpack_public_path__ = process.env.ASSET_PATH;
```

## 一些报错

- Error: Cannot find module 'webpack-cli/bin/config-yargs'，这个问题是 webpack 和 webpack-cli 版本不兼容，可以将 webpack-cli 版本降一个主版本安装即可。

- TypeError: CleanWebpackPlugin is not a constructor，这个问题是因为 clean-webpack-plugin 的导出改成了`export { CleanWebpackPlugin }`所以在使用时就得是这样`const { CleanWebpackPlugin } = require('clean-webpack-plugin');`

- bundle.js 文件没生成，可能是出口写错了，也可能是你正在使用 webpack-dev-server。
