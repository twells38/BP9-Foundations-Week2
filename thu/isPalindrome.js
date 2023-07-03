// Write your code below
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

// loop check first and last
// 

// function isPalindrome(str) {
//     let pointer1 = 0;
//     let pointer2 = str.length - 1
//     while (pointer1 < pointer2) {
//         if (str[pointer1] === str[pointer2]) {
//             pointer1++
//             pointer2--
//             return true
//         }else{
//             return false
//          }
//      }

// }
// console.log(isPalindrome('noon')) 
// console.log(isPalindrome('Racecar'))
// console.log(isPalindrome('Hello'))

function isPalindrome(str) {
    let reversedStr = ''
    for(let i = str.length-1; i >= 0; i--){
        reversedStr += str[i]
    }
    return reversedStr === str
}
console.log(isPalindrome('Mom'))