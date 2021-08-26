// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable (read / write)
// let (added in ES6)
{
  let name = "sol";
  console.log(name);
  name = "bi";
  console.log(name);
}

// var (don't ever use this!)
// var hoisting (move, declaration from bottom to top)
// has no block scope

// 3. Contant (read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysUnWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in Js
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable type
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

// number = special numberic values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use if yet)
const bigInt = 1234567890123456789012345678901234567890n;
// 뒤에 n을 붙이지 않으면 1.2345678901234568e+39, 로 출력
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); //true
// symbol 그대로 출력 시 오류, description 붙이기
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
console.log(ellie);

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); //number
