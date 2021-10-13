function observe(obj) {
  if (!obj || typeof obj !== "object") return;
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

function defineReactive(obj, key, val) {
  observe(val);
  let dp = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log("getter !");
      if (Dep.target) {
        dp.addSub(Dep.target);
        // 将watcher添加到订阅
      }
      return val;
    },
    set(newval) {
      console.log("setter !");
      val = newval;
      dp.notify();
    },
  });
}

class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    // sub 是 Watcher 实例
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
// 全局属性，target为依赖收集时的目标值
Dep.target = null;

function updateDOM(val) {
  // document.querySelector("#s").innerHTML = val;
  console.log("call back", val);
}

class Watcher {
  constructor(obj, key, cb) {
    Dep.target = this;
    // 将target指向自己
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    // 触发getter添加依赖
    Dep.target = null;
    // 释放target
  }
  update() {
    this.value = this.obj[this.key];
    this.cb(this.value);
  }
}

var data = { name: "yck" };
observe(data);
// 模拟解析到 `{{name}}` 触发的操作
new Watcher(data, "name", updateDOM);
// update Dom innerText
data.name = "yyy";
