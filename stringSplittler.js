const stringSplitter = (str, sep) => {
  if(str.indexOf(sep) === -1){
    return str;
  }
  const newStr = str.slice(0, str.indexOf(sep));
  return newStr + stringSplitter(str.slice(str.indexOf(sep)+1), sep);
};

console.log(stringSplitter('hello there Bob', ' '));

const iterativeSplitter = (str, sep) => {
  const splitStr = str.split('');
  for(let i=0; i<splitStr.length; i++){
    if(splitStr[i] === sep){
      splitStr[i] = '';
    }
  }
  return splitStr.join('');
};

console.log(iterativeSplitter('hello there Bob', ' '));