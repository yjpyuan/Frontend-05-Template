# 1. HTML解析 | HTML parse模块的文件拆分
## 第一步 文件拆分
- 为了方便文件管理，我们把parser单独拆分到文件中
```js
// client.js
const parser=require('./parser.js');
```
- parser接收HTML文本作为参数，返回一棵DOM树
```js
void async function () {
  //...
 let dom=parser.parseHTML(response.body);
```
# 2. HTML解析 | 用FSM实现HTML的分析
```js
// match 的一个使用,字符串拆分
  get response(){
    // 'HTTP/1.1 200 OK '
    this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\S\s]+)/);
    return {
      statusCode:RegExp.$1,//200
      statusText:RegExp.$2,//OK
      headers:this.headers,
      body:this.bodyParser.content.join('')
    }
  }
```
## 第二步 用FSM实现HTML的分析

- 我们用FSM来实现HTML的分析
- 在HTML标准中，已经规定了HTML的状态
- Toy-Borwser只挑选其中一部分状态，完成一个简易版本
# 3. HTML解析 | 解析标签

## 第三步总结 解析标签
- 开始标签 
- 结束标签 
- 自封闭标签 
- 暂时忽略属性

# 4. HTML解析 | 创建元素

## 第四步总结 创建元素
- 在状态机中，除了状态迁移，我们还会要加入业务逻辑
- 我们在标签结束状态提交标签token

# 5. HTML解析 | 处理属性

## 第五步总结 处理属性
- 属性值分为单引号、双引号、无引号三种写法，因此需要较多状态处理
- 处理属性的方式跟标签类似
- 属性结束时，我们把属性加到标签Token上

# 6. HTML解析 | 用token构建DOM树

有些地方更新 有些地方没明确说，但是不改的话就不能正常运行，
花了些时间，不过最后还是改好了

状态机上是元素的地方需要暂时处理下，先返回到emit上为text return
```js
    emit({
      type: 'text',
      content: c
    });
    return;
```
##  第六步 用token构建DOM树
- 从标签构建DOM树的基本技巧是使用栈
- 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
- 自封闭节点可视为入栈后立即出栈
- 任何元素的父元素是它入栈前的栈顶

# 7. HTML解析 | 将文本节点加到DOM树
主要就是补全token.type == 'text'的逻辑，让它不返回，与处理单标签方式差不多
```js
else if (token.type == 'text') {
  if (currentTextNode == null) {
    currentTextNode = {
      type: 'text',
        content: ''
      };
      top.children.push(currentTextNode);
    }
    currentTextNode.content += token.content;
  }
```
##  第七步 将文本节点加到DOM树

- 文本节点与自封闭标签处理类似
- 多个文本节点需要合并

# 8. CSS计算 | 收集CSS规则
css computing的过程是发生在dom树构建过程中
## 环境准备
安装css parser
```bash
npm install css
```

##  第一步 收集CSS规则

- 遇到style标签时，我们把CSS规则保存起来
- 这里我们调用CSS Parser来分析CSS规则
- 这里我们必须要仔细研究此库分析CSS规则的格式

# 9. CSS计算 | 添加调用

##  第二步 添加调用

- 当我们创建一个元素后，立即计算CSS
- 理论上，当我们分析一个元素时，所有CSS规则已经收集完毕
- 在真实浏览器中，可能遇到写在body中的style标签，需要重新计算css的情况(略)

# 10. CSS计算 | 获取父元素序列

```js
//.slice()复制数组，reverse翻转
function computeCSS(element) {
  var elements=stack.slice().reverse();
}
```

##  第三步 获取父元素序列

- 在computeCss函数中，我们必须知道元素在所有父元素才能判断元素与规则是否匹配
- 我们从上一步骤的stack，可以获得本元素所有的父元素(parent节点)
- 因为我们首先获取的是“当前元素”，所以我们获得和计算父元素匹配的顺序是从内到外的

# 11. CSS计算 | 选择器与元素的匹配

##  第四步 选择器与元素的匹配
- 选择器也要从当前元素向外排列
- 复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列

# 12. CSS计算 | 计算选择器与元素匹配

##  第五步 计算选择器与元素匹配
```js
match(element, selector)
// 进来的时候，到img这个元素的时候element.attributes却取不到
```
- 根据选择器的类型和元素属性，计算是否与当前元素匹配
- 这里仅仅实现了三种基本选择器，实际浏览器中要处理复合选择器
- 作业（可选）：实现复合选择器，实现支持空格的Class选择器

# 13. CSS计算 | 生成computed属性

##  第六步 生成computed属性
```js
match(element, selector)
//我的match找不见 符合条件的元素，因为我的computeCSS(element)方法走不到body下面
// 这节就看了一下，然后写下笔记
```
- 一旦选择匹配，就应用选择器到元素上，形成computedStyle

# 14. CSS计算 | specificity的计算逻辑
<!-- 那个问题还在看 -->
##  第七步 specificity的计算逻辑

- CSS规则根据specificity和后来优先规则覆盖
- specificity是个四元组，越左权重越高
- 一个CSS规则的specificity根据包含的简单选择器相加而成