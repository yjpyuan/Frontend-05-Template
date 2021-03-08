# mian.js
- init
```js
for(let i of [1,2,3]){
  console.log(i);
}

function createElement(type,attributes,...children){
  let element=document.createElement(type);
  for(let name in attributes){
    element.setAttribute(name,attributes[name]);
  }
  for(let child of children){
    element.appendChild(child);
  }
  return element;
}

let a= <div id="a">
    <span></span>
    <span></span>
    <span></span>
  </div>

  document.body.appendChild(a);
```
- 添加字符节点
```diff
  for(let child of children){
-    element.appendChild(child);
+ if(typeof child ==="string"){
+      child=document.createTextNode(child);
+    }
  }
```
