// false: 0, -0, '', null, undefined
// true: -1, 'hello', [], 'false'

let num; //undefined
if (num) {
  console.log("true!");
}
num && console.log(num);
