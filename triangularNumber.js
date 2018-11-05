function triangle(num) {
  if (num <= 1) {
    return 1;
  }

  return num + triangle(num - 1);
}

console.log(triangle(6));
