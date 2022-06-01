function oddOrEven(array) {
    let sorted = array.reduce((a,b)=> a+b,0)
   if (sorted%2 !=0){
     return "odd"
   }else{
     return "even"
   }
   }