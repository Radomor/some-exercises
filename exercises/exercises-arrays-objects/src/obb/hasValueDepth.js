// const obj = {
//     "hello": "world",
//     "goDeeper": {
//         1961: "Barack Obama",
//         1964: "Michelle Obama",
//         1935: "Elvis Presley",
//         1984: {
//                 "author": "George Orwell",
//                 "genre": "dystopia",
//         }
//     }
// }
function hasValueDepth(obj, value){
valueArray = Object.values(obj)
for (i = 0; i < valueArray.length; i++)
    {
        if (valueArray[i] === value)
        {
        return true
        }
        else if (typeof valueArray[i] === 'object' && valueArray[i] !== null)
        {
            return hasValueDepth(valueArray[i], value)
        }

}
return false
}

// console.log( 
//     hasValueDepth(obj, "hello"),
//     hasValueDepth(obj, "Elvis Presley"),
//     hasValueDepth(obj, "author"),
//     hasValueDepth(obj, "dystopia") 
// )      
