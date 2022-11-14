module.exports = function removeDouble(arr){
    
let newArr = []
    for (let i = 0; i < arr.lemgth; i++){
        if (newArr.includes(arr[i])){
            const index = newArr.indexOf(arr[i])
            arr.splice(index, 1)
         }
         newArr.push(arr[i])
    }
}

// const stuff = ["suit", "clock", "butter", "suit"];
// removeDouble(stuff)
// console.log(stuff)
// // [ 'clock', 'butter', 'suit' ] 

// const mixed = ["hello", "hello", 23, -3, 23, "hello"]
// removeDouble(mixed)
// console.log(mixed)
// // [ -3, 23, 'hello' ]  