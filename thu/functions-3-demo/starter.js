////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i] // str = 'bilbo Baggins'
        const splitStr = str.split(' ') // ['bilbo','BaGGins']
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) { // nested for loop using  indice
            let word = splitStr[x] // word = bilbo

            word = word.toLowerCase()

            if (x !== 0) { // 1st word in camelcase is all lower,, so at this point, if x === 0 then we are looking at the first word of our camelCase coversion.
                word = word.charAt(0).toUpperCase() + word.slice(1) //'Baggins'
                //word = 'B'+word.slice(1)
                //word = 'B' + 'aggins'
                //word = 'Baggins'
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE
//4:

const copyArrAndChange = (arr, callback) => {
    let result = []
    for (let i = 0; i < arr.length; i++){
        let newValue = callback(arr[i])
        result.push(newValue)
    }
    return result;
}
//with the outer fn, we can apply callback that will work with the data type 

//callback
const copyStrToSnackCase = str => {
    str = str.toLowerCase()
    const splitStr = str.split(' ')
    const snakeCaseStr = splitStr.join('_')
    return snakeCaseStr
}
console.log(copyArrAndChange(lotr, copyStrToSnackCase))

//6: challenge: make a callbake function that takes in a number and results that numer multiply by 4
const callback2 = num => num*4
let nums = [1,2,3,4]
console.log(copyArrAndChange(nums, callback2))
console.log((nums.map(callback2)))
console.log(nums.map(num => num *4))


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

//const mappedColors // = colors.map()

const mappedColors = colors.map(color => color = 'pink')
console.log(mappedColors)



/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
    console.log(`Hello, ${names}`)
}
// const formalGreeting = formalNames.map(firstName => `Hello, ${firstName}`)
// console.log(formalGreeting)

// Call formalGreeting passing in the formalNames array
formalNames.map(formalGreeting);



//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']



const placesThatStartWithA = places.filter(place => place[0] ==='A' )
console.log(placesThatStartWithA)


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const identifier = (arr) => {
    let filteredJob = arr.filter(el => { // [{programmer: 'steve'}]
        if ('programmer' in el) {// if(keyword in object)--> 'in' operator searchs 'keys' of an object
            return el // if('valueName' of object)-->
        }
    })
    return filteredJob[0]
}

// const identifier2 = arr => {
//     let filteredJob = arr.filter(el => {
//         return el.programmer
//     })
     
// }

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
}

// CODE HERE


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining = expenses.reduce((acc, curr) => {
    return acc - curr.amount // accc= budget = 2000, curr = {title:'rent, amount: 1000}, curr.amount = 1000
                            // 2nd iteration: acc = 1000, curr.amount = 250, acc starts at 750 on next iteration
                            // 3nd iteration: acc = 750, curr.amount = 300, acc starts at 450 on next iteration
}, budget) // budget is initial value
console.log(`The remaining : ${remaining}`)