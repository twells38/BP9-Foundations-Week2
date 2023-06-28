// Write your code below this line.
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

//loop
//Math.floor(Math.random())

function findLuckyNumbers(nums) {
    let arr = []
    for (let i = 0; i < nums; i++){
        let randomNum = Math.floor(Math.random() * 10) + 1
        while (arr.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * 10) + 1
        }
        arr.push(randomNum);
    }
    console.log(arr)
}
findLuckyNumbers(9);




