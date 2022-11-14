function hasValue (obj, value){
   console.log(Object.values(obj).includes(value))

}
    
//hasValue({"hello": "bonjour", "my": "mon"}, "my")
//hasValue({"hello": "bonjour", "my": "mon"}, "tasty")   // false