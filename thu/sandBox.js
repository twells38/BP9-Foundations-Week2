//forEach
//Loops through an array and ' for each element, executes any specitfied functionality

let nums = [1, 2, 3, 4, 5]
nums.forEach(function (num, i) {
    num += 4 // num = num + 4
    console.log(num) // num is variable name
   // num[i] = num // reassign element in the array
   // console.log(nums) // the orginal array is modified
})
// the original array is not modified

//nums.forEach((num, i) => num + 10)
nums.forEach((num, i) => nums[i] = num + 10)
console.log(nums)

//map does not modify the original array
// ti returns a coly of the original array, with any changes in;ented in the callback appied.

const mappedArr = nums.map(function (num) {
    return num += 2
    //the return is being sent t a new array created by map.
    // map return to new array
    // not modify the original array
})
console.log(`the original array: ${nums}`)
console.log(mappedArr)

const mappedArr2 = nums.map(num => { // map will invoke callback function in each num in nums array
    num +=2
})

const cb = num => {
    return num + 2
}
const mappedArr3 = nums.map(cb) // map invoke callback function
console.log((mappedArr3))

//filter creates a new array, but with some values filteres out.
//the callback fn needs to return true or false, and will most often return a conditional statement
//it that statemnt evaluates to true the element will be included in the new array
//.filter is not destructive.(The original array will stay the same)
const filteredArr = nums.filter(num => num % 2 === 0) // true /false
console.log(filteredArr)

//break down filter()
//call back-logic : outer fn will pass in each numer in an array to this callback function. call back must evaluate whether the number is even, if so return true, else return false.

const evenNumCallback = num => {
    if (num % 2 === 0) {
        return num
    }
}
const filterCopy = (arr, cb) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        let newValue = cb(arr[i])// invoke evenNumCallback(1),(2),(3)
        if (newValue) {
            newArr.push(newValue)// [] 
        }
    }
    return newArr
}
const filteredNumArr = (filterCopy(nums, evenNumCallback))
console.log(filteredNumArr)

//reduce is another callback function
// return single value
const reduceedArr = nums.reduce((acc, curr) => acc + curr) //start at value 1 // curr is 2 ( acc, curr are arguments)
//acc keeps track on total value
console.log(reduceedArr)

//const newReduced = nums.reduce((a,c)=>{a+c},10)

const newReduced = nums.reduce((a, c) => {
    return a + c
}, 10)
console.log(newReduced)

const myNum = nums.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)
console.log(myNum)