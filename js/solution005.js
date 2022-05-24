function reverseWords(sentence) {
    sentence = sentence.split(/(\s+)/)
    var result = ""
      for(var i=0;i<sentence.length;i++){
        result+=sentence[i].split("").reverse().join("")
      }
    return result
  }