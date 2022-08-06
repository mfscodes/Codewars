//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
  }