// 原型链
Object.prototype.a = function () {
  alert(1);
};

Function.prototype.b = function () {
  alert(2);
};
function A() {}
let a = new A();
a.a();
a.b();

// 科里化
function add(a, b) {
  return a + b;
}
function curry(fn) {
  let length = fn.length;
  let params = [];
  function _curry(arg) {
    params.push(arg);
    if (params.length === length) {
      return fn(...params);
    }
    return _curry;
  }
  return _curry;
}
curry(add)(1)(2);

function ap() {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
}
ap().then((res) => console.log(123));

Promise.reject(ap());
