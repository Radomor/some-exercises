function displayFullName(fullName) {
const fullNameArray = fullName.split(' ');
return 'My name is ' + fullNameArray[fullNameArray.length -1] + ", " + fullNameArray.join(" ")

}

console.log(displayFullName("Anna Maria Jopek"));