function toFreud(string) {
    if(string === ""){
      return string;
    }
    string = string.split(' ');
    for(var i = 0; i < string.length; i++){
      string[i] = 'sex';
    }
    string = string.join(' ');
    return string;
  }