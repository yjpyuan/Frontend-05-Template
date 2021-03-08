学习笔记

## Proxy(obj,config:{})
第一个参数：obj
第二个参数：对象可以设置 set,get,constructor,prototype
```js
let po = new Proxy(object, {
      set(obj, prop, val) {
        console.log(obj.prop, val)
      }
    })
```
vue3 就用 proxy 重写了双向数据绑定

### 遍历Map的一个应用
```js
    let callbocks = new Map()
    let usedReactivties = []
    //...
      console.log(usedReactivties)
      for (let reactivity of usedReactivties) {
        if (!callbocks.has(reactivity[0])) {
          callbocks.set(reactivity[0], new Map());
        }
        if (!callbocks.get(reactivity[0]).has(reactivity[1])) {
          callbocks.get(reactivity[0]).set(reactivity[1], [])
        }
        callbocks.get(reactivity[0]).get(reactivity[1]).push(callbock)
      }
```
### 5. proxy与双向绑定 | 优化reactive
处理 po.a.b的调用显示问题

### 7. 使用Range实现DOM精确操作 | 基本拖拽


## 三个事件的触发时机
#### mousedown
当鼠标指针移动到元素上方，并按下鼠标按键（左、右键均可）时，会发生 mousedown 事件。
与 click 事件不同，mousedown 事件仅需要按键被按下，而不需要松开即可发生。

#### mouseup
当在元素上松开鼠标按键（左、右键均可）时，会发生 mouseup 事件。
与 click 事件不同，mouseup 事件仅需要松开按钮。当鼠标指针位于元素上方时，放松鼠标按钮就会触发该事件。

#### click
当鼠标指针停留在元素上方，然后按下并松开鼠标左键时，就会发生一次 click 事件。
注意：触发click事件的条件是按下并松开鼠标左键！，按下并松开鼠标右键并不会触发click事件。

#### 三个事件的触发顺序
若在同一个元素上按下并松开鼠标左键，会依次触发mousedown、mouseup、click，前一个事件执行完毕才会执行下一个事件
若在同一个元素上按下并松开鼠标右键，会依次触发mousedown、mouseup，前一个事件执行完毕才会执行下一个事件，不会触发click事件

## 8. 使用Range实现DOM精确操作 | 正常流里的拖拽
cssOM


### 取消选中事件
```js
document.addEventListener('selectstart', event => event.preventDefault())
```

### 获取range位置的方法
```js
let ranges = [];
    let container = document.getElementById('container')
    for (let i = 0; i < container.childNodes[0].textContent.length; i++) {
      let range = document.createRange();
      //设置range的插入起始点和终点
      range.setStart(container.childNodes[0], i)
      range.setEnd(container.childNodes[0], i)

      console.log(range.getBoundingClientRect())
      ranges.push(range)
    }
```
#### getBoundingClientRect() 的用法
getBoundingClientRect()方法用来获取页面中某个元素的左、上、右、下分别相对浏览器视窗的位置，
返回的是一个矩形对象，包括四个属性，分别是left 、top、right、bottom。
分别表示元素各边与页面上边和左边的距离。
