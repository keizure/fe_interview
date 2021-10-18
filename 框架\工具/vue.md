## 依赖收集
## nextTick
`nextTick` 可以让我们在dom更新循环结束后执行回调，从而获得更新后的`DOM`

在vue2.4之前使用microtasks，但某些情况下会比事件冒泡更快。所以在新版本中默认microtask，特殊情况下使用macrotask，如v-on

## watch, computed
### 区别

computed
- 默认会缓存计算结果，在重复调用中，只要依赖数据不变，直接取缓存中的计算结果
- 不支持异步

watch
- 支持异步
- 不支持缓存

### computed 缓存原理
> [了解Vue中computed的缓存实现原理](https://segmentfault.com/a/1190000039781877)  

初始化computed属性时，会新建一个watcher，并设置该watcher上的dirty属性为true，在获取watcher.value后会设置dirty为false，达成缓存的目的。在依赖更新后，会设置watcher的dirty属性为true，下次获取computed属性时就可以更新新值了。

## vue 跨组件传递信息的方式
1. 通过props和事件在父子组件之间传递
2. provide/inject API
3. event bus
4. vuex
5. $attrs, $listeners
6. $parent, $children