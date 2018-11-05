function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(5));

function iterativeFibonacci(num) {
  let prevNumOne = 1;
  let prevNumTwo = 1;
  let fiboNum;

  for (let i = 3; i <= num; i++) {
    fiboNum = prevNumOne + prevNumTwo;

    prevNumOne = prevNumTwo;
    prevNumTwo = fiboNum;
  }
  return fiboNum;
}

console.log(iterativeFibonacci(5));
