## 垃圾回收
---
> [V8 垃圾回收 知乎](https://zhuanlan.zhihu.com/p/146749402)

V8实现了准确式GC，采用了分代式垃圾回收机制，内存堆分为新生代、老生代
### 新生代算法
变量一般存活时间短，使用 Scavenge GC 算法
### 老生代算法
老生代中的变量一般存活时间较长且数量多，标记清除、标记压缩算法

## 浏览器渲染流程
> [chrome浏览器渲染原理](https://segmentfault.com/a/1190000038468748?utm_source=sf-similar-article)  
> [页面生命周期](https://zh.javascript.info/onload-ondomcontentloaded)
### TL;DR
- 1. DOM Tree, CSSOM Tree 解析
  2. DOM Tree, CSSOM Tree 组合成 Render Tree（一些列矩形，具有字体、颜色、尺寸等视觉元素）
  3. layout (重排 Reflow) 将render tree 的节点布局在屏幕上的正确位置
  4. painting (重绘 Repaint) 
- 解析HTML时，碰到js会立即停止HTML解析（CSS不会使HTML停止）执行js再返回控制权，同时也会阻塞CSS解析，整个解析进程都会等待js执行完之后才能够继续
- 外部css文件和图片的获取是异步的，不会影响HTML的加载

### CSS加载与解析
- css加载不会阻塞DOM树的**解析**
- css加载会阻塞DOM树的**渲染**
- *css加载会阻塞后面js语句的执行 (由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以css会阻塞后面js的执行。)*

### DOMContentLoaded，onLoad
- DOMContentLoaded 在DOM树解析完后就触发，不需要等待**样式**  
- onLoad 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：**图片，样式**等。
- beforeunload/unload —— 当用户正在离开页面时