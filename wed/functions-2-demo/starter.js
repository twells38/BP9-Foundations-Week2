////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
//we want to check if the argument(num1 & num2) are number, if so then we want to do the operationn on them.
//in order to not repeat the code inside each function we will create a higher order function that accepts these fuhnction as callbacks
const calculator = (num1, num2, cb) => { // this is high order function
  //we will check to see if these parameters(num1,num2) can be coered in numbers
  //if it is, then we will go ahead and coer them
  // if not, we will inform the user
  if (+num1 && +num2) { // check and convert to numbers
    num1 = +num1
    num2 = +num2
    return cb(num1,num2) // this is callback function
  } else {
    console.log(`please send in numbers`)
  }
}

const addResult = calculator(1,2,add)
console.log(addResult)
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
// loop over this array then apply the discount
// discount function
// higher function
// we want to aply discount y percentage(25% would be .25)
const applyPercentOfDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1-discount)
}
//we wanna be able to apply a flat rate discount($5)
const applyFlatRateOfDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

//create higher order function product:arr (collection which is array)
const applyDiscountToCollection = (arr, discount, cb) => {
  for (let i = 0; i < arr.length; i++){
    cb(arr[i], discount)
  }
}
applyDiscountToCollection(dogProducts, 0.10,applyPercentOfDiscount)
//console.log(dogProducts)
applyDiscountToCollection(catProducts, 0.5, applyFlatRateOfDiscount)
//console.log(catProducts)

const applyDiscountByCategory = (category, discount, arr, cb) => {
  //we want to iterate over the array and change the values that match the category
  for (let i = 0; i < arr.length; i++){
    //check if category matches, if it does we can do our operation
    if (arr[i].category === category) {
      cb(arr[i],discount)
    }
  }
}
// applyDiscountByCategory(1, 0.25, catProducts, applyPercentOfDiscount)
// console.log(catProducts)

// applyDiscountByCategory(2, 5, dogProducts, applyFlatRateOfDiscount)
// console.log(dogProducts)

const applyDiscountByInventory = (inventory, discount, arr, cb) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i].inventory < inventory) {
      cb(arr[i],discount)
    }
  }
}
applyDiscountByInventory(50,1,catProducts,applyFlatRateOfDiscount)
console.log(catProducts)



////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
// ingredient is array
function makeSandwich(bread) {
  //after the above implementation makeRyeSandwich becomes a function expression due to makeSandwuch returning a function.
  return function(ingredients) { //anomymous function
    let order = `You order a ${bread} sandwich with `
    for (let i = 0; i < ingredients.length; i++){
      if (i === ingredients - 1 && i !== 0) { // look at the last ingredient and it is not first ingredient 
        order += `and ${ingredients[i]} `
      } else if(ingredients.length === 1) { 
        order += `${ingredients[i]} `
      } else if(i === ingredients.length-2){
        order += `${ingredients[i]} `
      } else {
        order +=`${ingredients[i]} `
      }
    }
    return order
  }
}
const makeRyeSandwich = makeSandwich('rye') // function expression
//console.log(makeRyeSandwich)
console.log(makeRyeSandwich(['pickles','cheese','turky','meyo'])) 