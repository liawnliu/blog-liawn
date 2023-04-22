# react 相关问题

## create-react-app 问题

create-react-app 这个脚手架在 3.3.0 到 4.0.0 有内存占用过大和启动慢的问题解决办法：

1. 打开项目的 node_modules/react-scripts/config/webpack.config.js
2. 在`new ESLintPlugin({`下面一行加上`cache: true,`，参考[9886issue](https://github.com/facebook/create-react-app/issues/9886)
3. 在将`// TypeScript type checking`与`new ESLintPlugin({`之间的代码注释掉，也就是禁止使用`ForkTsCheckerWebpackPlugin`，参考[8096issue](https://github.com/facebook/create-react-app/issues/8096)，该 issue 也有其他改法也可以试试
