# TypeScript 简介

## TypeScript 是什么

2012 年微软推出的开源、跨平台的编程语言——[TypeScript](https://www.tslang.cn/)，它是[JavaScript](/front-end/html、css、js、ts/学习JavaScript/index.md)的超集，添加了可选的静态类型和基于类的面向对象编程。
](./1.
因为 JavaScript 过于灵活，虽然前期开发速度快，但后期难以维护，特别是在大型项目中。所以就推出了 TypeScript，使用它的静态类型系统可以在前期规划好变量、方法、类等所需要的类型，并且在后期维护中也会节省很多人力物力，把更多的精力放在业务逻辑上。

TypeScript 扩展了 JavaScript 的语法，只需要做一些小的调整，任何 JavaScript 的程序都可以直接放入 TypeScript 项目中，然后通过编译器将 TypeScript 编译成 JavaScript 就可以使用了。

## 安装使用

- 先保证自己的环境上有[node 和 npm](/front-end/常用工具/Npm的使用.md)，在前面讲过了。
- 打开命令行工具，输入`npm install -g typescript`全局安装 TypeScript
- 然后在本地写一个 xxx.ts，再使用`tsc xxx.ts`来编译这个 ts 文件，会生成一个同名但是是`.js`结尾的 js 文件。
- 执行 node xxx.js，在 node 上运行它了。
- 可以安装`ts-node`然后直接使用`ts-node xxx.ts`来运行 ts 文件。

## 内容

- [typescript 基础](./1.typescript基础.md#typescript基础)
  - [静态类型的理解](./1.typescript基础.md#静态类型的理解)
  - [基础和复杂类型](./1.typescript基础.md#基础和复杂类型)
  - [类型注解和类型推断](./1.typescript基础.md#类型注解和类型推断)
  - [函数](./1.typescript基础.md#函数)
  - [数组和元组](./1.typescript基础.md#数组和元组)
  - [接口](./1.typescript基础.md#接口)
    - [接口约束对象](./1.typescript基础.md#接口约束对象)](./2.
    - [接口的实现与继承](./1.typescript基础.md#接口的实现与继承)
    - [接口约束函数](./1.typescript基础.md#接口约束函数)
    - [接口约束数组](./1.typescript基础.md#接口约束数组)
  - [类](./1.typescript基础.md#类)
  - [联合类型和类型保护](./1.typescript基础.md#联合类型和类型保护)
  - [枚举类型](./1.typescript基础.md#枚举类型)
  - [tsconfig.json](./1.typescript基础.md#tsconfigjson)
- [typescript 进阶](./2.typescript进阶.md#typescript进阶)
  - [泛型](./2.typescript进阶.md#泛型)
    - [泛型接口](./2.typescript进阶.md#泛型接口)
    - [泛型类](./2.typescript进阶.md#泛型类)
    - [泛型函数](./2.typescript进阶.md#泛型函数)
    - [泛型约束](./2.typescript进阶.md#泛型约束)
    - [泛型中的 keyof](./2.typescript进阶.md#泛型中的keyof)
  - [命名空间](./2.typescript进阶.md#命名空间)
    - [命名空间声明](./2.typescript进阶.md#命名空间声明)
    - [命名空间使用](./2.typescript进阶.md#命名空间使用)
    - [命名空间里再定义命名空间](./2.typescript进阶.md#命名空间里再定义命名空间)
  - [import](./2.typescript进阶.md#import)
    - [配合 require.js 使用](./2.typescript进阶.md#配合requirejs使用)
    - [使用 webpack 打包](./2.typescript进阶.md#使用webpack打包)
  - [编写\*.d.ts 文件](./2.typescript进阶.md#编写dts文件)
    - [声明全局函数](./2.typescript进阶.md#声明全局函数)
    - [搭配使用 interface](./2.typescript进阶.md#搭配使用interface)
    - [声明对象和类](./2.typescript进阶.md#声明对象和类)
    - [es6 模块的声明文件](./2.typescript进阶.md#es6模块的声明文件)
  - [装饰器](./2.typescript进阶.md#装饰器)
    - [对类装饰](./2.typescript进阶.md#对类装饰)
    - [对方法装饰](./2.typescript进阶.md#对方法装饰)
    - [对访问器装饰](./2.typescript进阶.md#对访问器装饰)
    - [对属性装饰](./2.typescript进阶.md#对属性装饰)
    - [对参数装饰](./2.typescript进阶.md#对参数装饰)
    - [装饰器的小例子](./2.typescript进阶.md#装饰器的小例子)
