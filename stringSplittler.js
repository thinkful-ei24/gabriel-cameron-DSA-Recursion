const stringSplitter = (str, sep) => {
  if(str.indexOf(sep) === -1){
    return str;
  }
  const newStr = str.slice(0, str.indexOf(sep));
  return newStr + stringSplitter(str.slice(str.indexOf(sep)+1), sep);
};

console.log(stringSplitter('hello there Bob', ' '));