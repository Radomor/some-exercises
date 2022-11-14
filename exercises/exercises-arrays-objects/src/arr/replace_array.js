module.exports = function replaceArray(array) {
  for (let i=0; i < array.length; i++) {
      if (array[i].charAt(0) == "h" || array[i].charAt(0) == "H"  ) {
          array.splice(i, 1, `${array[i].toUpperCase()}`)
      }
  }
  return array;
}



//console.log(replaceArray(["banana", "suit", "hammer"]))