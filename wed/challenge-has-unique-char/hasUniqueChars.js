// Write your code below
// Given a word, return true if that word contains only unique characters. Return false otherwise.
// For example:
// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:
// hasUniqueChars("Bob")
// // returns true
// function hasUniqueChars(str) {
//     for (let i = 0; i < str.length-1; i++){
//         for (let j = i+1 ; j < str.length; j++){
//             if (str[i] === str[j]) {
//                 return false
//             } 
            
//         }
       
//     }
//     return true 
// }
// let result = hasUniqueChars('Monday')
// console.log(result)

let str = 'Monday'
let chars = {}

function hasUniqueChars(str) {
    for (char of str) { //loop through the value in the object
        if (char in chars === false) { // if characters is not in the object
            chars[char] = true; // put the character in the object
        } else {
            return `Not all unique characters.` //
        }
    }
    console.log(chars)
    return `All unique characters`
}
console.log(hasUniqueChars(str))