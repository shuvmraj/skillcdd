function sum(a, b) {
  return a + b;
}

if (require.main === module) {
  const result = sum(2, 3);
  console.log(`Sum of 2 + 3 = ${result}`);
  if (result !== 5) {
    console.error('Verification failed: expected 5, got', result);
    process.exit(1);
  }
  console.log('Build verification passed.');
}

module.exports = { sum };
