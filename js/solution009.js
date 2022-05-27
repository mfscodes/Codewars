function bingo(a) {
    let bingoNums = [2,7,9,14,15];
     let result = bingoNums.every(i=> a.includes(i))
    
    if (result === true){
      return "WIN"
    } else {
      return 'LOSE'
    }
    
    }