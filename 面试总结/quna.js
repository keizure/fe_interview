// 大数相加

function bigAdd(a, b) {
  let base = 4;
  let bigNum = 10 ** 4;
  let res = [];
  function parse(num) {
    let cache = [];
    let result = [];
    num
      .split("")
      .reverse()
      .forEach((n) => {
        cache.unshift(n);
        if (cache.length === base) {
          result.push(cache.join(""));
          cache = [];
        }
      });
    if (cache.length) {
      result.push(cache.join(""));
    }
    return result;
  }
  let parsedA = parse(a);
  let parsedB = parse(b);
  let add = 0;
  for (let i = 0; i < parsedA.length; i++) {
    let currentA = parseInt(parsedA[i]);
    let currentB = parseInt(parsedB[i]);
    if (!currentA || !currentB) {
      currentA ? res.push(currentA + add) : res.push(currentB + add);
      continue;
    }
    let result = currentA + currentB + add;
    if (result >= bigNum) {
      add = 1;
      res.push(result - bigNum);
    } else {
      add = 0;
      res.push(result);
    }
  }
  console.log(res);
  return res
    .map((num) => {
      console.log(num);
      num = String(num);
      let length = num.length;
      if (length === base) return num;
      let newnum =
        Array(base - num.length)
          .fill("0")
          .join("") + num;
      return newnum;
    })
    .reverse()
    .join("");
}

console.log(bigAdd("99999", "123121"));
