const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(a, b) {
  return a + b;
}

function print(name, age) {
  console.log(`${name} + ${age}`);
}

function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(2, 3); //divide(2, 3)
  console.log(result);
}
surprise(divide);
