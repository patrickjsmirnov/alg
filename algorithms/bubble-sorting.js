'use strict';

function bubbleSorting(array) {
  const n = array.length;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i - 1; j++) {

      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

let ar = [6, 2, 8, 1, 4, 6, 7, 20, 100, 3];
console.log(bubbleSorting(ar));
