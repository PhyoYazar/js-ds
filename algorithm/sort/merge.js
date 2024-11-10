// // Merge function from earlier
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

//// Recursive Merge Sort
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, sright);
// }

// mergeSort([10, 24, 76, 73]);

function mergeSort(val) {
  if (val.length <= 1) return val;

  const middle = Math.floor(val.length / 2);
  const left = val.slice(0, middle);
  const right = val.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  //   console.log(sortedArray.concat(left.slice(i).concat(right.slice(1))));

  return sortedArray.concat(left.slice(i).concat(right.slice(j)));
}

// mergeSort([38, 27, 43, 3, 9, 82, 10])
