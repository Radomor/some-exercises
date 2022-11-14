function rmCensored  (obj) {
 
 for (let key in obj) {
    if (obj[key].match(/\*/g) || key.match(/\*/g)) {
     delete obj[key];
    }
  }
}
//     //return obj;
  
 

   



// const swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"};
// rmCensored(swearWords)
// console.log(swearWords) // { 'sweet jesus': 'doux jesus' }

const veggies = {"potato": "starch", 
"spin*ch": "green", 
"collard": "green", 
"tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies) // { potato: 'starch', collard: 'green' } 
