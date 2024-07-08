/*
Funnction average receives an array of numbers and returns the average of those numbers.

*/

function average(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}



export default average;