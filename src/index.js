const { compare } = require("semver");

exports.min = function min (array) {
   if (array == undefined || array.length === 0) return 0;
    
   let x = array.sort((a, b) => a - b);
    return x[0]
}

exports.max = function max (array) {
    if (array == undefined || array.length === 0) return 0;
    let largest = Math.max(...array)
    return largest
  
}

exports.avg = function avg (array) {
    if (array == undefined || array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++){
      sum += array[i]
  }
   let avgA = sum / array.length; 
   return avgA;
}
