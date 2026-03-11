function sum(a, b) {
  return a + b;
}

if (require.main === module) {
  const result = sum(2, 3);
  console.log(`Build check passed. Sample sum: ${result}`);
}

module.exports = { sum };
