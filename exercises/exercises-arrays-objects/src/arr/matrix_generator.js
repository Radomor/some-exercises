module.exports = function matrixGen (height, width) {
  const matrix = [];
  for (i = 1; i <= height; i++) {
      let array = [];
    for (j = 0; j < width; j++) {
        array.push(i+(j*i))
    }
    matrix.push(array);
  }
  return matrix
}


// console.log(matrixGen(1,5))
// console.log(matrixGen(5,4))
// console.log(matrixGen(3,6))
// console.log(matrixGen(0,0))