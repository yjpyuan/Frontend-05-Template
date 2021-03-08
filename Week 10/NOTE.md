
# 1. 排版 | 根据浏览器属性进行排版

- 主次排版方式 可以省略很多的判断逻辑(if-else)

|name| Main Axis | Cross axis|
|----| --------- | ----------|
|flex-direction:row | width x left right| height y top bottom|
| flex-direction:column | height y top bottom |width x left right|

主要是完成对CSS属性（flexDirection wrap 的具体属性width height top bottom）的抽象(main cross上相关的属性)

# 2. 排版 | 收集元素进行

- 分行
  - 根据主轴尺寸，把元素分进行（hang）
  - 若设置了no-wrap,则强行分配到第一行

# 3. 排版 | 计算主轴

- 计算主轴方向
  - 找出所有flex元素
  - 把主轴方向的剩余尺寸按比例分配给这些元素
  - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素（web标准处理方案）

# 4. 排版 | 计算交叉轴

- 计算交叉轴方向
  - 根据每一行中最大元素尺寸计算行高
  - 根据行高flex-align和item-align，确定元素具体位置

```js
console.log(JSON.stringify(dom,null,"   "));
```
报了个错误 没转换之前是可以输出dom,可能处理的有问题
```bash
    --> starting at object with constructor 'Object'
    |     property 'children' -> object with constructor 'Array'
    |     index 1 -> object with constructor 'Object'
    --- property 'parent' closes the circle
    at JSON.stringify (<anonymous>)
    at /Users/mac/Desktop/github/Frontend-05-Template/Week 10/1-spiltFile/client.js:200:20
```

# 5. 渲染 | 绘制单个元素

```bash
npm install images
```

图片出来了 但是是全黑的 还是有点问题

## 第一步
- 绘制需要一个图形环境
- 采用images
- 绘制在一个viewport上进行
- 与绘制相关的属性：background-color border background-image

# 6. 渲染 | 绘制DOM树

添加递归调用 感觉和浏览器打开的 还不太一样啊 出来的结果