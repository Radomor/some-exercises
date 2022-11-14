function countOccurences(string) {
    const stringToArr = string.split(" ");
    const resulObj = {};
    for (let i = 0; i < stringToArr.length; i++) {
        let count = 0;
        for (j = 0; j < stringToArr.length; j++) {
            if (stringToArr[j] === stringToArr[i]) {
                count++;
            }
        }
        if (resulObj.hasOwnProperty(count) === false ) {
            resulObj[count] = []
            resulObj[count].push(stringToArr[i]);
        } else if (resulObj[count].indexOf(stringToArr[i]) === -1) {
            resulObj[count].push(stringToArr[i]);
        }
    }
    return resulObj;
}

 console.log(countOccurences("hello is it you hello hello"))
 console.log(countOccurences("hey mama hey mama"))