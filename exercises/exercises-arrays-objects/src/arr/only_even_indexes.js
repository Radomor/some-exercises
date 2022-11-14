module.exports = function evenIndexes(string) {
  const arr = [];
  for (let i=0; i<string.length; i+=2) {
      myArr.push(string[i]);
  }
  return arr;
}


console.log(evenIndexes("lol"))
console.log(evenIndexes("You're weird"))
console.log(evenIndexes(""))