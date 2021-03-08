# 1. 单元测试工具 | Mocha（一）
## 安装
- 使用NPM全局安装：
```bash
npm install --global mocha
```
- 也可以作为项目的依赖进行安装：
```bash
npm install --save-dev mocha
```

- `add.js`需要module.exports
```js
function add(a, b) {
  return a + b
};
module.exports=add;
```
- test.js 
```js
var assert=require('assert');

var add=require('../add.js');

describe('add function testing ',function(){
  it('1+2 should be 3',function(){
    assert.equal(add(1,2),3);
  });
  it('-5+2 should be -3',function(){
    assert.equal(add(-5,2),-3);
  });
});
```
- `describe`这个方法就是将测试的信息分块显示 好看一些
- 为了配合mocha 测试的内容需要module.exports=add;
- 要想使用常规的export add 需要使用babel

# 2. 单元测试工具 | Mocha（二）
- 使用babel的解决方案
```bash
npm install --save-dev @babel/core @babel/register 
```
- 创建`.babelrc` 指定babel的配置
```bash
npm install --save-dev @babel/preset-env
```
- 如果想用export的模式 test.js中的引用也应该改成import的模式
```js
import {add} from '../add';
```
- 本地 执行 测试
```bash
./node_modules/.bin/mocha --require @babel/register
```
- 将执行命令添加到package.json里
  - package.json默认的会指向在当前的本地目录里
```js
 "scripts": {
    "test": "mocha --require @babel/register"
  },
```
- 执行
```bash
npm run test
```

# 3. 单元测试工具 | code coverage
```bash
npm install --save-dev nyc
//本地运行
npx nyc ./node_modules/.bin/mocha --require @babel/register

```
- 使用nyc babel 需要给nyc 与babel互相装一个插件
- `.nycrc`
```bash
npm install --save-dev @istanbuljs/nyc-config-babel
npm install --save-dev babel-plugin-istanbul
```