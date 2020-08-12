function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let val = arr[i];
    let j = i - 1;
      while (j>= 0 && arr[j] > val){
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1] = val;
  }
  return arr;
}
