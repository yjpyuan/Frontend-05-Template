# 浏览器工作原理

# 1. 浏览器总论 | 浏览器工作原理总论
浏览器基础渲染流程
URL->(HTTP)=>HTML->(parse)=>DOM->(css computing)=>DOM with CSS->(layout)
=>DOM with position->(render)=>Bitmap

# 2. 状态机 | 有限状态机
## 有限状态机的特点？
- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出...
  - 所有的这些机器接收的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，他们应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每一个机器都有确定的下一个状态（Moore）
  - 每一个机器根据输入决定下一个状态（Mealy）
###### Promise的纯函数回调么

## JS中的有限状态机（Mealy）
```js
//每个函数是一个状态
function state(input){
//...
return next;//返回值为下一个状态
}

// 如何调用？
white(input){
  //get input
  state=state(input);//把状态机的返回值作为下一个状态
}
```

# 3. 状态机 | 不使用状态机处理字符串（一）

## 使用有限状态机处理字符串

- 在一个字符串中，找到字符“a”
```js
    function match(string) {
    for (let c of string) {
      if (c == 'a')
        return true;
    }
    return false;
  }

  match('i am groot');
```
# 4. 状态机 | 不使用状态机处理字符串（二）

- 在一个字符串中，找到字符“ab”
```js
  const findStr = (str) => {
    console.log(`********my find ab from ${str} *********`);
    if (typeof str !== 'string')
      return 'str or word is not a string';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        if (str[i + 1] === 'b')
          return true;
      }
    }
    return false;
  };
  console.log(findStr('acadc'));
```

# 5. 状态机 | 不使用状态机处理字符串（三）
findString.js 下的 基本就是这样的了
# 6. 状态机 | 使用状态机处理字符串（一）
# 7. 状态机 | 使用状态机处理字符串（二）

# 8. HTTP请求 | HTTP的协议解析

## ISO-OSI七层网络模型
| 网络层   | 协议  | 请求  |
| ------- | ---- | ---- |
|应用|http|require('http')|
|表示|http|require('http')|
|会话|http|require('http')|
|传输|tcp|require('net')|
|网络|internet(IP)|require('net')|
|数据链路|4g/5g/wifi|require('net')|
|物理层|4g/5g/wifi|require('net')|

## TCP/IP的一些基础知识
- 流
- 端口
- require('net')
- 包
- IP地址
- libnet/libpcap
  - libnet 构造IP包 发送
  - libpcap 从网卡抓IP包 接收
    - 使用IP底层协议抓到的包，可能不是发到本机的包

## HTTP
- Request
- Response
一个Request对应一个Response
文本型协议（都是字符串）;
POST /HTTP/1.1     Request line
HOST:127.0.0.1    headers
Content-Type:app/

field=1aaa&code=x   body

- `\r\n` 作为HTTP协议中的换行符
- 文本型协议（都是字符串）;
- body之前是一个换行

# 10. HTTP请求 | 实现一个HTTP的请求

<font color=#FF0000>从使用开始设计接口模式，这个之前也在一篇博客上看见说过这点</font> 

## 第一步HTTP请求总结

- 设计一个HTTP请求的类
Request
- Content-type 是一个必要的字段，要有默认值
- body是KV结构
- 不同的content-type影响body的格式

# 11. HTTP请求 | send函数的编写，了解response格式

## 第二步Send函数总结

- 在Request的构造器中收集必要的信息
- 设计一个send函数，把请求真实发送到服务器
- send函数应该是异步的，所以返回Promise

Request
 HTTP/1.1 200 OK                  status line
 Content-Type:text/html           headers
 Date:
 Connection:keep-alive
 Transfer-Encoding:chunked

 26                                body
 ```html
 <html><body>Hello world</body></html>
 ```

#  12. HTTP请求 | 发送请求

## 第三步发送请求
- 设计支持已有的connection或者自己新建connection
- 收到数据传送给parser
- 根据parser的状态resolve Promise
确实会报错
第一个是在client.js
```bash HTTP/1.1 400 Bad Request
Connection: close ```

原因就是只写\r 是不可以的，HTTP 协议规定，一定要使用\r\n.
可以试试这个
```js
return `${this.method} ${this.path} HTTP/1.1\r\n${Object.keys(this.headers)
  .map((key) => `${key}: ${this.headers[key]}`)
  .join("\r\n")}\r\n\r\n${this.bodyText}`; 
```
第二个在serve.js
会报错
```bash
buffer.js:538
      throw new ERR_INVALID_ARG_TYPE(
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "list[0]" argument must be one of type Buffer or Uint8Array. Received type string
```
就是这块代码有问题
```js body = Buffer.concat(body).toString();```
原因是
Buffer.concat()的api的入参类型是list: Uint8Array[]但是这块是string
改成
```js  body = (Buffer.concat([ Buffer.from(body.toString()) ])).toString();```
就行了

# 13. HTTP请求 | response解析

- [ ] 任务 使用有限状态机完成client.js里ResponseParser的状态描述

## 第4步ResponseParser总结
- Response必须分段构造，所以我们需要一个ResponseParser来‘装配’
- ResponseParser分段处理ResponseText,我们用状态机来分析文本结构

# 14. HTTP请求 | response body的解析

## 第5步BodyParser总结

- Response 的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构解决问题
- 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式

还有点问题，
- 1个就是上次的那个写的有问题，这节上改好了
- 2就是这节的那个解析如果用/r/n的话，解析的好像也有问题
- 3.就是报文上面的d 0 是干什么的,我又没添加 
如果是协议加的，那为什么我解析报文内容的时候可以解析得到？
  - 答：这块这个d表示报文内容的长度` Hello World1\n`的长度换成16进制就是d;
  - 0 应该就是表示结束了enf
```json
HTTP/1.1 200 OK
Content-type: text/html
Date: Sun, 29 Nov 2020 19:22:21 GMT
Connection: keep-alive
Transfer-Encoding: chunked

d
 Hello World

0
```

