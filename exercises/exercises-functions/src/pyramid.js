function Pyramid(n) {
    for (var i = 0; i < n; i++) {
      var str = '';
      for (var j = 1; j < n-i; j++) {
      var  str = str + ' ';
      }
      for (var k = n; k <= (2*i+1); k++) {
        str = str + '#';
      }
      console.log(str);
    }
  }
  Pyramid(9)
  