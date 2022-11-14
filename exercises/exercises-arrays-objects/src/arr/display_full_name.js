module.exports = function displayFullName(name) {
const nameToArr = name.split(" ")
const surName = nameToArr.pop()
const firstName = nameToArr.join(" ")
console.log(`My name is ${surName}, ${firstName} ${surName}`)
}

