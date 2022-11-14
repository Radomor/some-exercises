
function printVowels(string) { 
    let wynik = [] 
    let vowels = "aeiou" 
    for (let i = 0; i < string.length; i++) { 
      let stringVowels = string[i] 
      if (vowels.includes(stringVowels)) { 
        wynik.push(stringVowels) 
      } 
    } 
    return wynik.join("") 
  } 
  console.log(printVowels("awwa"))