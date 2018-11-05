function binary(num) {
  if (num === 0) {
    return '';
  }

  const remainder = num % 2;

  return remainder + binary((num - remainder) / 2);
}

console.log(binary(3));
console.log(binary(25));
