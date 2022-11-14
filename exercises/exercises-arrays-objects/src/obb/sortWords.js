function sortWords (stringTable) {
    const stringObject = new Object()
    ["odd"] =[]
    ["even"] = []
    for (let i=0; i < stringTable.length; i++) {
        if (stringTable[i].length % 2 === 0){
            stringObject["even"].push(stringTable[i])
        } 
            else {
                stringObject["odd"].push(stringTable[i])
            } 
    } 
    
    return stringObject

}
// console.log(sortWords(["work", "hard", "mommy"]))