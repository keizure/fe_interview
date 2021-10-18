function randomIntArr(len) {
  let res = [];
  for (let i = 0; i < len; i++) {
    let randomInt = Math.floor(Math.random() * 100);
    res.push(randomInt);
  }
  return res;
  // return [45, 43, 95, 12, 21, 83, 18, 57, 10];
}

function quickSort(arr, start = 0, end) {
  end = typeof end === "number" ? end : arr.length - 1;
  let left = [];
  let right = [];
  console.log(start, end);
  if (start > end) return;
  if (start !== end) {
    let mid = Math.ceil((start + end) / 2);
    for (let index = start; index <= end; index++) {
      let midNum = arr[mid];
      if (index === mid) continue;
      if (arr[index] < midNum) {
        left.push(arr[index]);
      } else {
        right.push(arr[index]);
      }
    }
    midArr = arr[mid] === undefined ? [] : [arr[mid]];
    console.log(left, right);
    updateArr = left.concat(midArr, right);
    console.log("update arr", updateArr, mid, arr[mid]);
    arr.splice(start, updateArr.length, ...updateArr);
    console.log("current arr", arr);
    quickSort(arr, start, left.length > 1 ? start + left.length : start);
    quickSort(arr, start + left.length + 1, end);
  }
  return arr;
}

function main() {
  let randomArr = randomIntArr(21);
  let copy = [...randomArr];
  console.log("row arr:   ", randomArr);
  let sortedArr = quickSort(randomArr);
  console.log("sorted arr:", sortedArr);
  let answer = copy.sort((a, b) => a - b);
  let corrcet = answer.every((val, index) => val === sortedArr[index]);
  console.log("success:   ", corrcet);
}

main();
