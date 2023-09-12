let score = 33
//we know here that the type is number
//but when we are requesting the score from browser in thst case


console.log(typeof score);


let score2 = "33"
console.log(typeof score2);
let changeintoNumber = Number(score2)
console.log(typeof changeintoNumber);
//this conversion was valid but what if we have "33abc" this can also be converted to a number

let score3 = "33abc"

let changeintoNumber2 = Number(score3)
console.log(typeof changeintoNumber2);
console.log(changeintoNumber2);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
