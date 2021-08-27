"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
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
fruits.push("🍓", "🍑");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the be biginning
fruits.unshift("🍊", "🥭");
console.log(fruits);
// shift: remove an item from the biginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
// fruits.splice(1, 1); //1번부터 1개만 지움
fruits.splice(1, 1, "🫐", "🥝"); //지운 자리에 삽입
console.log(fruits);

// combine two arrays
const fruits2 = ["🍒", "🍏"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf("🍑"));
console.log(fruits.indexOf("🍠")); // 베열 안에 없으면 -1 출력
console.log(fruits.includes("🫐")); //있으면 true, 없으면 false

// lastIndexOf
console.log(fruits);
fruits.push("🍎");
console.log(fruits.indexOf("🍎")); //첫 번째 사과 위치 출력
console.log(fruits.lastIndexOf("🍎")); //마지막 사과 위치 출력
