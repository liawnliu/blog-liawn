# 使用 mocha+chai 进行单元测试

&nbsp;&nbsp;&nbsp;&nbsp;web 前端使用[JavaScript](https://developer.mozilla.org/zh-CN/docs/front-end/Web/JavaScript)或[TypeScript](https://www.tslang.cn/)时开发，经常要对一些功能点进行测试，甚至还要提供直观的测试报告。一些测试技术用而生，例如[jest](https://jestjs.io/)和[mocha](https://mochajs.org/)等。这里我们选用[mocha](https://mochajs.org/)测试框架+[chai](https://www.chaijs.com/)断言库来进行测试，而测试报告使用[mochawesome](https://www.npmjs.com/package/mochawesome)，覆盖报告使用[nyc](https://www.npmjs.com/package/nyc)。

## mocha 前端测试框架

&nbsp;&nbsp;&nbsp;&nbsp;mocha 是一个可以在[node.js](https://nodejs.org/zh-cn/)和浏览器上运行的前端测试框架，它支持不同风格的断言库，也支持同步异步测试、测试用例分组等功能。

&nbsp;&nbsp;&nbsp;&nbsp;命令相关，一般是“mocha 文件名”，如果测试 ts 的话，需要在命令里加“ts-node/register”来编译运行。如果需要测试文件夹里的所有文件，那就用递归也就是加“-r 文件夹名”。

&nbsp;&nbsp;&nbsp;&nbsp;代码示例：

```js
import { expect } from "chai";
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});
```

### 钩子函数

```js
describe("hooks", function () {
  before(function () {
    // runs before all tests in this block
  });
  after(function () {
    // runs after all tests in this block
  });
  beforeEach(function () {
    // runs before each test in this block
  });
  afterEach(function () {
    // runs after each test in this block
  }); // test cases
});
```

### 使用 async/await

```js
beforeEach(async function () {
  await db.clear();
  await db.save([tobi, loki, jane]);
});
describe("#find()", function () {
  it("responds with matching records", async function () {
    const users = await db.find({ type: "User" });
    users.should.have.length(3);
  });
});
```

## chai 断言集合库

&nbsp;&nbsp;&nbsp;&nbsp;支持 expect、assert、should 断言语法

```javascript
var assert = require("chai").assert,
  foo = "bar",
  beverages = { tea: ["chai", "matcha", "oolong"] };
assert.typeOf(foo, "string");
assert.typeOf(foo, "string", "foo is a string");
assert.equal(foo, "bar", "foo equal `bar`");
assert.lengthOf(foo, 3, "foo`s value has a length of 3");
assert.lengthOf(beverages.tea, 3, "beverages has 3 types of tea");

var expect = require("chai").expect,
  foo = "bar",
  beverages = { tea: ["chai", "matcha", "oolong"] };
expect(foo).to.be.a("string");
expect(foo).to.equal("bar");
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property("tea").with.lengthOf(3);

var should = require("chai").should(),
  foo = "bar",
  beverages = { tea: ["chai", "matcha", "oolong"] };
foo.should.be.a("string");
foo.should.equal("bar");
foo.should.have.lengthOf(3);
beverages.should.have.property("tea").with.lengthOf(3);
```

## mochawesome 测试结果报告

&nbsp;&nbsp;&nbsp;&nbsp;mochawesome 是一个用于 mocha 测试框架的自定义报告器，可以生成 html/css 报告在浏览器上查看，也可以本地查看。  
&nbsp;&nbsp;&nbsp;&nbsp;一般在命令里添加“--reporter mochawesome”就可使用 mochawesome。当然，最好清空之前的一些测试报告，那使用“rm -rf 文件夹名”。

## nyc 测试覆盖报告

&nbsp;&nbsp;&nbsp;&nbsp;nyc 是一个测试覆盖率报告器，可以生成 html/css 报告在浏览器上查看，也可以本地查看。  
&nbsp;&nbsp;&nbsp;&nbsp;如果你用的 jest 其实就不用 nyc 了，已经自带了测试覆盖报告的类库。  
&nbsp;&nbsp;&nbsp;&nbsp;还要配置 nyc 覆盖范围，要配置 include 和 exclude 等信息。
&nbsp;&nbsp;&nbsp;&nbsp;给它确定报告生成的位置，使用“--report-dir 文件夹名”命令；要生成 html 形式的报告，使用“--reporter=lcov”命令；生成 text 形式的，使用“--reporter=text”，当然你两种都想要就两个命令都加上。

## 安装命令合集

- npm install --save-dev mocha 用于局部安装 mocha
- npm install --save-dev chai 用于局部安装 chai
- npm install --save-dev mochawesome 用于局部安装 mochawesome
- npm install --save-dev nyc 用于局部安装 nyc
- npm install --save-dev @types/mocha 编写时要用到的库
- npm install --save-dev @types/chai 编写时要用到的库

## 示例 package.json

```json
{
  "name": "datastructures_ts",
  "version": "1.0.0",
  "description": "datastructures",
  "keywords": [],
  "author": "Liu",
  "license": "ISC",
  "scripts": {
    "clean": "rm -rf ./dist ./coverage ./.nyc_output ./coverage.lcov ./mochawesome-report",
    "dev": "npm run clean && npm run generate-report",
    "test": "mocha -r ts-node/register ./test/ts/**/*.spec.ts ./test/ts/**/**/*.spec.ts --reporter mochawesome",
    "generate-report": "nyc --report-dir coverage npm run test && nyc report --reporter=text"
  },
  "nyc": {
    "include": ["src/ts/*.ts", "src/ts/**/*.ts"],
    "exclude": ["typings"],
    "extension": [".ts"],
    "reporter": ["json", "html"],
    "all": true
  },
  "devDependencies": {
    "@types/chai": "^4.2.11",
    "@types/mocha": "^5.2.7",
    "chai": "^4.1.2",
    "mocha": "^5.2.0",
    "mochawesome": "^3.1.2",
    "nyc": "^11.9.0",
    "ts-node": "^8.8.2",
    "typescript": "^3.8.3"
  },
  "dependencies": {
    "core-js": "^3.6.4"
  }
}
```
