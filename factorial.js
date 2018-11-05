const factorial = (num) => {
  if(num === 1){
    return 1;
  }
  return num * factorial(num-1);
};

console.log(factorial(5));

const iterativeFactorial = (num) => {
  let prod = 1;
  for (let i=1; i<=num; i++){
    prod *= i;
  }
  return prod;
};
console.log(iterativeFactorial(5));