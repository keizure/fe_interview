function randomIntArr(len) {
  let res = [];
  for (let i = 0; i < len; i++) {
    let randomInt = Math.floor(Math.random() * 100);
    res.push(randomInt);
  }
  return res;
}

function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != "number" ? 0 : left,
    right = typeof right != "number" ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // 分区操作
  var pivot = left, // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition2(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      high--;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      low++;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort2(arr, low, high) {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}

function main() {
  let randomArr = randomIntArr(11);
  let copy = [...randomArr];
  console.log("row arr:   ", randomArr);
  let sortedArr = quickSort(randomArr, 0, randomArr.length - 1);
  console.log(copy);
  console.log("sorted arr:", sortedArr);
  let answer = copy.sort((a, b) => a - b);
  let corrcet = answer.every((val, index) => val === sortedArr[index]);
  console.log("success:   ", corrcet);
}

main();
