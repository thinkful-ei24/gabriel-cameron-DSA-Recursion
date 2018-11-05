const reverseString = (str) => {
  if(str === ''){
    return '';
  }
  const newChar = str[str.length-1];
  return newChar + reverseString(str.slice(0, str.length-1));
};

console.log(reverseString('hello'));