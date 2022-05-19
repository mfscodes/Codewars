function sum (numbers) {
    "use strict";
    if (sum===([])){
        return 0
      
      } else{
        return numbers.reduce(((acc, ele) => acc + ele), 0)
      }
    
};
sum([5,6,7])