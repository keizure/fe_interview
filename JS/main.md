# 基础知识
## Typeof
---
`typeof` 对于基本类型，除了 `null` 都可以显示正确类型
``` js
typeof null // 'object'
```

## 类型转换
---
### 转布尔值
除 `undefinded`, `null`, `false`, `NaN`, `0`, `-0`, `''`,其他都转为 `true`
### 对象转基本类型
对象在转换为基本类型时，调用顺序为 `valueOf` -> `toString` -> `Symbol.toPrimitive`
``` js
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  }
}
1 + a // => 3
'1' + a // => '12'
```
## 原型
---
### new
```js
function new() {
  let obj = new Object()
  let createFunc = [].shift.call(arguments)
  // 获取构造函数
  obj.__proto__ = createFunc.pototype
  // 链接原型链
  let result = createFunc.apply(obj, arguments)
  // 通过构造函数构造新对象
  return typeof result === 'object' ? result : obj
  // 根据构造函数返回值决定new函数的返回值，必须返回对象
}

function new(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let result = fn.apply(obj, args)
  // 通过构造函数构造新对象
  return typeof result === 'object' ? result : obj
  // 根据构造函数返回值决定new函数的返回值，必须返回对象
}
```
### instanceof
内部机制是通过判断对象的原型链上是不是能找到类型的 `prototype`
```js
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}
```
## 执行上下文
---

## 深浅拷贝
---
### 深拷贝
通过JSON来解决有局限
- 忽略 undefined, symbol
- 不能序列化函数
- 不能解决循环引用(会报错)

通过 `MessageChannel` 不能够复制函数，但是能解决循环引用的问题

下面简单写一个深拷贝函数，解决了循环引用问题，但是支持的类型不够多，如 `set`
```js
function isPrimitive(val) {
  let baseType = ["string", "boolean", "number", "undefined", "symbol"];
  return baseType.some((type) => typeof val === type);
}

function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}

function deepClone(val) {
  let mem = new Map();
  // 分配一个堆栈来记录对象是否访问过,避免循环引用
  function baseClone(val) {
    let res;
    if (isPrimitive(val)) {
      return val;
    } else if (Array.isArray(val)) {
      // 先做浅拷贝
      res = [...val];
    } else if (isObject(val)) {
      res = { ...val };
    }
    Reflect.ownKeys(res).forEach((key) => {
      // 检查浅拷贝过来的值
      let currentVal = res[key];
      if (currentVal !== null && typeof currentVal === "object") {
        // 判断是否为引用类型
        if (mem.has(currentVal)) {
          res[key] = mem.get(currentVal);
        } else {
          mem.set(currentVal, res[key]);
          res[key] = baseClone(currentVal);
        }
      }
    });
    return res;
  }
  return baseClone(val);
}

var obj = {
  a: [1, 2, 3],
  d: null,
  c: undefined,
  e() {},
};
var b = { obj };
obj.b = b;
var copy = deepClone(obj);
console.log(copy);
```

## 模块化
---

## 垃圾回收
---
V8实现了准确式GC，采用了分代式垃圾回收机制，内存堆分为新生代、老生代
### 新生代算法
变量一般存活时间短，使用 Scavenge GC 算法
### 老生代算法
老生代中的变量一般存活时间较长且数量多，标记清除、标记压缩算法