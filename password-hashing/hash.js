import bcrypt from "bcrypt"

const saltRounds = 10;
const pass = "1234"

const encPass = await bcrypt.hash(pass, saltRounds)
const result = await bcrypt.compare("1234", encPass)


// 1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// .
// .
// .
// 10th

console.log(pass);
console.log(encPass);
console.log(result);



/*

1. use saltRound of 8 and 10

 List of Passwords:
 1. 1234
 2. 4321
 3. FB12fb!@
 4. jkhsfkjhkjsf
 5. 5754687534

compare each and every password with its hashed version.

*/