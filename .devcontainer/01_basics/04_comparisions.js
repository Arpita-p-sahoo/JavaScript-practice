// console.log(2 > 5) // false
// console.log(2 < 5) // true
// console.log(2 == 5) // false
// console.log(2 != 5) // true


// console.log(2 > "me") // false - because "me" is converted to NaN and any comparison with NaN is false
// console.log("Arpita" < 1); // false - because "Arpita" is converted to NaN and any comparison with NaN is false

// console.log(null > 0); // false - because null is converted to 0 and 0 is not greater than 0
// console.log(null == 0); // false - because null is converted to 0 and 0 is not equal to 0
// console.log(null < 0); // false - because null is converted to 0 and 0 is not less than 0

// console.log(undefined > 0); // false - because undefined is converted to NaN and any comparison with NaN is false
// console.log(undefined == 0); // false - because undefined is converted to NaN and any comparison with NaN is false
// console.log(undefined < 0); // false - because undefined is converted to NaN and any comparison with NaN is false


//  strict check
// console.log(null === 0); // false - because null is not equal to 0
// console.log(undefined === 0); // false - because undefined is not equal to 0


// we should avoid these type of comparision in project building because it can lead to 
// unexpected results and bugs. It is better to use strict equality (===) and strict inequality (!==) operators to avoid type coercion.