"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruits);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the be biginning
fruits.unshift("π", "π₯­");
console.log(fruits);
// shift: remove an item from the biginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits);
// fruits.splice(1, 1); //1λ²λΆν° 1κ°λ§ μ§μ
fruits.splice(1, 1, "π«", "π₯"); //μ§μ΄ μλ¦¬μ μ½μ
console.log(fruits);

// combine two arrays
const fruits2 = ["π", "π"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π ")); // λ² μ΄ μμ μμΌλ©΄ -1 μΆλ ₯
console.log(fruits.includes("π«")); //μμΌλ©΄ true, μμΌλ©΄ false

// lastIndexOf
console.log(fruits);
fruits.push("π");
console.log(fruits.indexOf("π")); //μ²« λ²μ§Έ μ¬κ³Ό μμΉ μΆλ ₯
console.log(fruits.lastIndexOf("π")); //λ§μ§λ§ μ¬κ³Ό μμΉ μΆλ ₯
