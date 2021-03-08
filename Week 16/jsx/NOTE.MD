# animation.js
## js处理动画
- 三种常用的js处理动画的方法
```js
//1.setInterval
// 缺点
/* 
  1.比较不可控 不能确定浏览器是否是按照16毫秒去实现的
  2.如果setInterval写的不好，可能会发生积压，具体取决于浏览器底层实现
 */
setInterval(() => {}, 16);

// 2.setTimeout1 
// 因为setTimeout只执行一次，所以需要 一个方法触发此事件
{
  let tick = () => {
    setTimeout(() => {}, 16);
  }
}
// 3.setTimeout2 推荐使用这种
// 因为setTimeout只执行一次，所以需要 一个方法触发此事件
// requestAnimationFrame() 返回浏览器渲染下一帧
//cancelAnimationFrame(hander); cancel掉，避免资源浪费
{
  let tick = () => {
    let hander=requestAnimationFrame(tick);
    cancelAnimationFrame(hander);
  }
}
```
## 属性动画
- 描述属性的变化，产生的动画
## 帧动画
- 一帧一帧的动画变化，一秒来一帧

# 2. 手势与动画 | 设计时间线的更新
- 当参数少于两个时，根据参数长度，添加不同的处理逻辑
```js
  add(animation,addTime) {
    if(arguments.length<2){
      addTime=Data.now();
    }
    this[ANIMATIONS].add(animation);
    this[ADD_TIME].set(animation,addTime);
  }
```
# 3. 手势与动画 | 给动画添加暂停和重启功能
- 设置暂停和继续
```js
  pause() {
    this[PAUSE_START] = Date.now();
    cancelAnimationFrame(this[TICK_HANDLER]);
  }
  //恢复
  resume() {
    this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
    this[TICK]();
  }
```
  - 在计算t的时候需要再减去暂停的时间
```js
if (this[START_TIME].get(animation) < startTime)
  t = now - startTime - this[PAUSE_TIME];
else
  t = now - this[START_TIME].get(animation) - this[PAUSE_TIME];
```
# 4. 手势与动画 | 完善动画的其他功能
- 消耗的时间需要再减去animation.delay
```js
if (this[START_TIME].get(animation) < startTime){
  t = now - startTime - this[PAUSE_TIME] - animation.delay;}
  else{
  t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay;
}
```
- 如果时间不大于0，说明动画没走，不能走时间线
```js
  if (t > 0)
    animation.receive(t);
```
- 设置`timingFunction`和`template`的默认属性
```js
    timingFunction = timingFunction || (v => v);
    template = template || (v => v);
```
- ease.js
好像反过去了，运动轨迹
- 重启
```js
  //重启
  reset() {
    this.pause();
    let startTime=Date.now();
    this[PAUSE_TIME]=0;
    this[ANIMATIONS]=new Set();
    this[START_TIME]=new Map();
    this[PAUSE_START]=0;
    this[TICK_HANDLER]=null;
  }
```
# 5. 手势与动画 | 对时间线进行状态管理
- 添加状态管理
  - 这样的好处在于可以重复触发事件的时候，能保持在一个正确的状态内，不容易出错
# 6. 手势与动画 | 手势的基本知识
- 手势的 start move end
- 鼠标的 down move up
# 7. 手势与动画 | 实现鼠标操作


















***init 16 周内容 继续在jsx文件夹内完成 ***
***init 16 周内容 继续在jsx文件夹内完成 ***
***init 16 周内容 继续在jsx文件夹内完成 ***












# 1. 轮播组件 | 手势动画应用
