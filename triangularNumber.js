function triangle(num) {
  if (num <= 1) {
    return 1;
  }

  return num + triangle(num - 1);
}

console.log(triangle(6));

function iterativeTriangle(num) {
  let total = 0;

  for (let i = 0; i <= num; i++) {
    total = total + i;
  }

  return total;
}

console.log(iterativeTriangle(6));
