学习笔记

# 1. JS语言通识 | 泛用语言分类方法

乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，
是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：
0- 型文法（无限制文法或短语结构文法）包括所有的文法。
1- 型文法（上下文相关文法）生成上下文相关语言。
2- 型文法（上下文无关文法）生成上下文无关语言。
3- 型文法（正规文法）生成正则语言。

###### 一种语言的分类方法

# 2. JS语言通识 | 什么是产生式

产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
引号和中间字符表示终结符
可以有括号
*表示重复多次
|表示或
+表示至少一次
巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符)

## 练习：编写带括号的四则运算产生式
```html
1+2*(3/4)
1+2*3
AdditiveExpression
Expression
MultiplicativeExpression

<!-- 带括号的产生式 -->
<!-- 1 描述括号 -->
<Expression>::=<MultiplicativeExpression>|"("<AdditiveExpression>")"
<!-- 1 描述运算 -->
<ArithmeticExpression>::=<Expression>"+"<Expression>|
<Expression>"-"<Expression>|
<Expression>"*"<Expression>|
<Expression>"/"<Expression>|


<MultiplicativeExpression>::=<Number>|
  <MultiplicativeExpression>"*"<Number>|
  <MultiplicativeExpression>"/"<Number>|

<AdditiveExpression>::=<Number>|
  <MultiplicativeExpression>"*"<MultiplicativeExpression>|
  <MultiplicativeExpression>"/"<MultiplicativeExpression>|
  <AdditiveExpression>"+"<MultiplicativeExpression>|
  <AdditiveExpression>"-"<MultiplicativeExpression>|
```

# 3. JS语言通识 | 深入理解产生式

0型 无限制文法
  ?::?
1型 上下文无关文法
  ?\<A\>?::?\<B\>?
2型 上下文相关文法
  \<A\>::?
3型 正则文法
  \<A\>::=\<A\>?
  \<A\>::=?\<A\> ❌

**JS是什么文法？**

整体上是上下文无关文法，具体涉及上下文有关的时候，会特殊处理为上下文相关文法（函数定义）
示例
```js
//，上下文无关文法反例，重新定义get
{
  get a{return 1};
  get:1
}

//非正则文法的反例，乘方运算符 示例为先算运算符右侧 先算1的平方，再算2的1次方， 结果为2 
//这块应该在底层 ** 的结果是作为参数进行计算的 所以需要先算出这个，才能继续
2 ** 1 ** 2 // 2
```

# 4. JS语言通识 | 现代语言的分类

上下文相关文法的特点
比如在vb中，\<可能是XML的开始，也可能是小于号，这取决于当前的使用环境，所以这是上下文相关文法的特点

语言的分类
形式语言-用途
*  数据描述语言 html css json
*  编程语言  c js ruby
形式语言-表达方式
*  声明式语言 html css json
*  命令型语言  c js ruby 

# 5. JS语言通识 | 编程语言的性质

**图灵完备性**
>命令式--图灵机
>>goto
>>if和while

>声明式--lambda
>>递归

**动态与静态**
* 动态
>>在用户的设备上\/在线服务器上运行
>>产品实际运行时
>>Runtime

* 静态:
>>在程序员的设备上
>>产品开发时
>>Compiletime

**类型系统**
* 动态类型与静态类型系统
* 强类型与弱类型系统
这里强弱类型是值 能不能在某种场景下完成类型转换
* 复合类型
>>结构体
>>函数签名
>>>参数类型（type:list）
>>>返回值类型
* 子类型
* 泛型
>>逆变\/协变

# 6. JS语言通识 | 一般命令式编程语言的设计方式

**一般命令式编程语言**

Atom | Expression | Statement | Structure | Program
---- | ---------- | --------- | --------- | -------
Identifier <br>Literal | Atom<br>Operator<br>Punctuatr | Expression<br>Keyword<br>Punctuatr | Function<br>Class<br>Process<br>Namespace<br>... | Program<br>Module<br>Package<br>Library

语法 -> 语义 -> 运行时

* 终结符： 
最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符)

*产生式： 
在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句

* 静态和动态语言：
 https://www.cnblogs.com/raind/p/8551791.html
强类型： 无隐式转换
弱类型： 有隐式转换

*协变与逆变： 
https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html

# 7. JS类型 | Number

Atom(字面值) | Runtiome(运行时) |
----------- | --------------- |

## Types
* Number
* String
* boolean
* undefind
* Null
* Symbol
* Object
* BigInt
### BigInt
JS 提供Number.MAX_SAFE_INTEGER常量来表示 最大安全整数，Number.MIN_SAFE_INTEGER常量表示最小安全整数：
```js
const minInt = Number.MIN_SAFE_INTEGER;
console.log(minInt);         // → -9007199254740991
console.log(minInt - 5);     // → -9007199254740996
// notice how this outputs the same value as above
console.log(minInt - 4);     // → -9007199254740996
```
使用BigInt，应用程序不再需要变通方法或库来安全地表示Number.MAX_SAFE_INTEGER和Number.Min_SAFE_INTEGER之外的整数。 
现在可以在标准JS中执行对大整数的算术运算，而不会有精度损失的风险。
要创建BigInt，只需在整数的末尾追加n即可。比较:
```js
console.log(9007199254740995n);    // → 9007199254740995n
console.log(9007199254740995);     // → 9007199254740996
```
### Symbol
用于对象的属性或者方法
1.属性唯一
2.不能获取到当前对象的属性节点，如果是string，那就会提取的到

### Null
###### 这个我之前看过，底层的typeof是个if else if 的判断 如果当前的类型不属于number string undefind ... 将会返回object
```js
typeof Null // object
```

## Number
IEEE 754 Double Float
* Sign(1) 
符号位
* Exponent(11)
11位指数位
1位表示指数的正负
基准值为1+10个0，比这个值大为正
10位表示指数的范围 2的10次方 2048
* Fraction(55)
55位精度位
2的55次方的值
首位为1
2的54次方的值

### Number-Grammar(语法)
* DecimalLiteral(十进制)
```js
0
0.
.2
1e3 //1000 这么看的话 e就相当于0了呀  
```
* BinarylntegerLiteral(二进制)
0b111
* OctallntegerLiteral(八进制)
0o10
* HexlntegerLiteral(十六进制)
0xff
```js
0.toString() //报错
0 .toString() // 可以处理
```
# 8. JS类型 | String

## Sting
* Character  
a
* Code Point
97
* Encoding
0110 0007

### 编码方式 String- Code Point
ASCII
0-127
Unicode
000-FFF
UCS
0000-FFFF
GB
  GB2312

### String- Encoding
编码方式
UTF8
8位表示一个字符
UTF16
8位表示一个字符

### String- Homework
###### 不会
```js
function UTF8_Encodeing(string){
  //return new Buffer();
}
```
### String- Grammar
"abc"
'abc'
\`abc`
#### String- Grammar Chanllenge
A regular Expression to match string literal

###### 不会，没听懂问题是要干啥，答案也看不懂
特殊的转义符号
```js
bfnrtv    //几种特殊字符
2028 2029 //特殊换行符
\\x \\u //转义规则
```

#### String- Grammar Template
```js
`ab${x}abc${y}abc`
```
# 9. JS类型 | 其他类型
## boolean
true false 都是关键字
## Null undefind
Null 是关键字
undefind 是全局变量（就是可以被赋值）

可以使用void 0 代替undefined
因为void这个运算符 是个关键字，这不同于undefind
void 这个关键字不管后面跟什么 都会把他表达式的值变成undefined
```js
void 0 //undefind
void false //undefind
void true //undefind
```
# 10. JS对象 | 对象的基础知识
## object
* 把相同的数据存储成三份，只是这3份恰巧相同罢了
* 所以，任何一个对象都是唯一的，这与他本身的状态无关
* 所以，即使状态完全一致的两个对象，也并不相等
* 我们用状态来描述对象
* 我们状态的改变即是行为
### object-Class
类是一种常见的描述对象的方式,通过分类的方式进行区别object
### object-Prototype
选择一个对象为原型，根据原型去描述对象，
通过对原型对象的区别来描述对象

* 在设计对象的状态和行为时，我们总是遵循”行为改变状态“的原则。
那么咬就是狗的行为，改变人的状态

# 11. JS对象 | JS中的对象
* js中的对象只有两个要素，一个是proto,一个是他的属性；
* js中的属性可以用来描述状态，也可以用来描述行为（函数可以作为属性）
* 通过内存地址来表示唯一性

Symbol 实现了访问对象上的属性的权限控制

Data property 和 Accessor Property 都是对象的特性
Data property | Accessor Property |
------------- | ----------------- |
`[[value]]` | get|
writable | set |
enumerable | enumerable |
configurable | configurable | 


### Data property（数据属性）
`[[value]]` 具体的值 writable（可写） enumerable（可枚举） configurable（可配置）
* 当设置Data property的writable为false时(通过.运算符不可更改)，仍然可以通过defineProperty修改writable和其他内容
* 当设置Data property的configurable（可配置）为false时，writable enumerable configurable `[[value]]` 不可修改
### Accessor Property（访问器属性）

原型链的好处？
每个对象只需要描述自己与原型对象的区别即可

## Object API - Grammar
* {},.,[],Object.defineProperty
这组API 基于语法 去创建对象，访问属性，定义新的属性，改变属性的特征值
* Object.create,Object.setPrototpeOf,Object.getPrototypeOf
基于原型 描述对象的方法 创建 设置 获取 属性
* new,class,extends
基于分类的方式描述对象
* new,function,prototype

## Function Object
```js
typeof Function //"function"
```
* Function对象是带call方法的对象，`[[call]]`方法为内置对象
* js中 双括号表示内置属性`[[call]]`,内置对象的特点就是无法在js中访问，<br>可以在调用JS的引擎中（C或C++）是可以调用的
## Host Object
Host Object 我觉得就是可以理解为宿主对象;
也就是在console中不能看到函数体内容的对象方法;
浏览器对象为window；
那也就是说for of window 返回为`[native code]`的方法名;

但是 window is not iterable
setInterval
setTimeout
Window
CSS族
CSSAnimation
...