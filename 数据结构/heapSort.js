function randomIntArr(len) {
  let res = [];
  for (let i = 0; i < len; i++) {
    let randomInt = Math.floor(Math.random() * 100);
    res.push(randomInt);
  }
  return res;
}

function heapSort(arr) {
  let heapSize = arr.length;
  buildMaxHeap(arr, heapSize);
  console.log(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    --heapSize;
    maxHeap(arr, 0, heapSize);
  }
  return arr;
}
function buildMaxHeap(arr, heapSize) {
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    maxHeap(arr, i, heapSize);
  }
}
function maxHeap(arr, i, heapSize) {
  let l = i * 2 + 1;
  let r = l + 1;
  let largest = i;
  if (l < heapSize && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < heapSize && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeap(arr, largest, heapSize);
  }
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function main() {
  let randomArr = randomIntArr(11);
  let copy = [...randomArr];
  console.log("row arr:   ", randomArr);
  let sortedArr = heapSort(randomArr);
  console.log("sorted arr:", sortedArr);
  let answer = copy.sort((a, b) => a - b);
  let corrcet = answer.every((val, index) => val === sortedArr[index]);
  console.log("success:   ", corrcet);
}

main();
