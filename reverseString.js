const reverseString = (str) => {
  if(str === ''){
    return '';
  }
  const newChar = str[str.length-1];
  return newChar + reverseString(str.slice(0, str.length-1));
};

console.log(reverseString('hello'));

const iterativeReverse = (str) => {
  let newStr = '';
  for (let i=str.length-1; i>=0; i--){
    newStr += str[i];
  }
  return newStr;
};

console.log(iterativeReverse('hello'));