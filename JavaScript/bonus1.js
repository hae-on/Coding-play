// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number); //2
console.log(number2); //2

number2 = 3;
console.log(number); //2
console.log(number2); //3

// object
let obj = {
  name: "ellie",
  age: 5,
};
console.log(obj.name); //ellie

let obj2 = obj;
console.log(obj2.name); //ellie

obj.name = "james";
console.log(obj.name); //james
console.log(obj2.name); //james
