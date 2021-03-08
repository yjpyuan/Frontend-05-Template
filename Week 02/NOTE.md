学习笔记

给event添加监听是不是对应的key值为3，可以使用e.which===3或者别的来实现绑定keycode
```js
  document.addEventListener('mousedown',e=>{
    mousedown=true;
    clear=(e.which===3)
  })
```
```js
通过Promise设置一个停顿
  function sleep(t) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, t)
    })
  }
```
选取元素的子元素可以使用div.children[0]队列来找
比如设置元素的格式
```js
 sleep(30)
      container.children[y*100+x].style.backgroundColor='green';
```
使用当前元素等于最后一个元素（O(1)），代替splice(),这个O(n)操作
然后返回当前的min值
```js
 this.data[minIndex] = this.data[this.data.length - 1];
      this.data.pop()
      return min;
```
使用Array(x).fill(0)创建一个默认值为0的x个的数组
使用localStorage存储一个map对象，
通过JSON.parse()转换成对象使用
```js
let map = localStorage['map'] ? JSON.parse(localStorage['map']) : Array(10000).fill(0);
```

js表示平方，比如平方就是**2 立方就是**3
```js
return (point[0] - end[0]) ** 2 + (point[1] - end[1]) ** 2
```
