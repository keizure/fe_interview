var addStrings = function (num1, num2) {
  let add = 0;
  let result = [];
  num1 = num1.split("");
  num2 = num2.split("");
  for (
    let index = 0;
    index < (num1.length > num2.length ? num1.length : num2.length);
    index++
  ) {
    let num1sn = num1[num1.length - 1 - index] || 0;
    let num2sn = num2[num2.length - 1 - index] || 0;
    num1sn = parseInt(num1sn);
    num2sn = parseInt(num2sn);
    console.log(num1sn, num2sn, add);
    console.log(num1sn + num2sn + add);
    if (num1sn + num2sn + add > 10) {
      result.push(num1sn + num2sn + add - 10);
      add = 1;
      console.log("?");
    } else {
      result.push(num1sn + num2sn + add);
      add = 0;
    }
    console.log(result);
  }
  if (add) {
    result.push(add);
  }
  return result.reverse().join("");
};
let result = addStrings("9133", "0");
console.log(result);
