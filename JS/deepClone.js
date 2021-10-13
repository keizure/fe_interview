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
