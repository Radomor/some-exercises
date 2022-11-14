function translate(dictionary, inputStr) {
    const inputArr = inputStr.split(" ");
    const outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if ( dictionary.hasOwnProperty(inputArr[i]) === true ) {
            outputArr.push(dictionary[inputArr[i]]);
        } else {
            return "Error: missing value"
        }   
    }
    const outputStr = outputArr.join(" ");
    return outputStr;
}                                                         

// translate({
//     "the": "le",
//     "cute": "mignon",
//     "your": "ton",
//     "dog": "chien",
//     "is": "est"}, "the dog is cute")

//     translate({
//         "the": "le",
//         "cute": "mignon",
//         "your": "ton",
//         "dog": "chien",
//         "is": "est"}, "the dog is fluffy"
//     ) // 'Error: missing value'
