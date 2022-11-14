module.exports = function averageMinMax(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0]; 
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
      sum = sum + arr[i];
  }
  console.log("Min: " + min + " Max " + max + " Average: " + sum/arr.length)
}



//averageMinMax([-42, 0, 42])   // Min: -42 Max: 42 Average: 0
//averageMinMax([30, 20, 100])  // Min: 20 Max: 100 Average: 50
// averageMinMax([-23, -4, -12]) // Min: -23 Max: -4 Average: -13