function subDigits(num) { 
    if (num < 0) { 
        return "Argument Error"
    }
  //  let p = 0
    const numToString = String(num)
    for (let i = 0; i < numToString.length; i++) {
        console.log("odejmuję",Number(numToString.charAt(i)) )
        num = num - Number(numToString.charAt(i));
     //return num//console.log(Number(numToString.charAt(i)))
        // num =- Number(numString.charAt(i)); //x -= y // x = x - y
    }

    return num
}
console.log(subDigits(997))

