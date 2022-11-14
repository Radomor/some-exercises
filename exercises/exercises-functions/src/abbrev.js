function abbrWord(word){
  //short = word.substring(0,3)
  let txt = String(word).substring(0,3);

  //for (let i=0; i<word.length; i++) {
      //console.log(txt[i]);
    if (txt.length == 1){
  return `${txt +"  " } ${word.length}`
  }
  if (txt.length == 2){
    return `${txt +" "} ${word.length}`
  }
  else{
    return `${txt} ${word.length}`
  }
  }

    //abbrWord("abcde")
  console.log(abbrWord("aasd"))
  