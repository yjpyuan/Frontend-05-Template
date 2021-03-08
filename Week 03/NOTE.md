学习笔记
正则扫描输入
regexp.exec(source);
就是扫描source中有没有regexp中存在的内容，
会返回一个数组对象，返回当前是否存在这个内容，
(8) ["1024", "1024", undefined, undefined, undefined, undefined, undefined, undefined, index: 0, input: "1024 + 10 * 25", groups: undefined]

([0-9\.]+) 
这块的这个+应该是表示当前是连续匹配的如果都是连续的数组，则返回连续的数字

```js
let regexp=/([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\-)|(\+)/g

  var result=null;
    while(true){
     result=regexp.exec(source);
```
当我们需要返回一个队列的时候 可以使用yield token,
```js
```
EOF是一个计算机术语，为End Of File的缩写，
在操作系统中表示资料源无更多的资料可读取。
资料源通常称为档案或串流。通常在文本的最后存在此字符表示资料结束。



