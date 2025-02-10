function sumWithForLoop(arr:number[]):number {
  let sum:number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWithWhileLoop(arr:number[]):number {
  let i:number = 0;
  let sum:number = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumWithRecursion(arr:number[]):number {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumWithRecursion(arr.slice(1));
}

function sumWithFunctional(arr:number[]):number {
  return arr.reduce((acc, item) => acc + item, 0);
}
console.log(sumWithForLoop([1, 2, 3, 4, 5]));
console.log(sumWithWhileLoop([1, 2, 3, 4, 5]));
console.log(sumWithRecursion([1, 2, 3, 4, 5]));
console.log(sumWithFunctional([1, 2, 3, 4, 5]));
