async 

删除一个元素的class

```js
 let light = document.getElementsByTagName('div')
    for (var i = 0; i < 3; i++) {
      light[i].classList.remove('light')
      document.getElementsByClassName('red')[0].classList.add('light')
    }
```