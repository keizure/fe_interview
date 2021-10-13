// 大数相加

function bigAdd(a, b) {
  let res = [];
  function parse(num) {
    return num.split("").reverse();
  }
  let parsedA = parse(a);
  let parsedB = parse(b);
  let add = 0;
  for (let i = 0; i < parsedA.length; i++) {
    let currentA = parseInt(parsedA[i]) || 0;
    let currentB = parseInt(parsedB[i]) || 0;
    let result = currentA + currentB + add;
    if (result >= 10) {
      add = 1;
      res.push(result - 10);
    } else {
      add = 0;
      res.push(result);
    }
  }
  if (add) res.push("1");
  return res.map(String).reverse().join("");
}

console.log(bigAdd("999999", "1"));
function test(a, b) {
  let res1 = bigAdd(String(a), String(b));
  let res2 = a + b;
  if (parseInt(res1) === res2) {
    console.log("success");
  } else {
    console.log("fail");
  }
}
test(999, 22);
