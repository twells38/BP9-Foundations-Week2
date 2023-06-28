// cleate a variable to track jons health

let jonSnowHealth = 100
let jonSnowHealthString = String(jonSnowHealth);
//let jonSnowHealthString = toString(jonSnowHealth)
//let jonSnowHealthString = jonSnowHealth + ''
//console.log(type0f(jonSnowHealthString));

// String Methods.
// let creat string that declare the winner, and the winner should  be Jamie.

let theWinnerIs = 'Jamie is the winner';
let newWinnerIs = theWinnerIs.replace('Jamie', 'Jon');
console.log(newWinnerIs);
if (newWinnerIs.includes('Jon')) {
    console.log('Jon successfully replaced')
}

//lets conert string to kebab-case 
let newWinnerLower = newWinnerIs.toLowerCase();
let newWinnerSplit = newWinnerLower.split(' ');//['jon','is','win']
let newWinnerKebab = newWinnerSplit.join('-');
console.log(newWinnerKebab)

// for (let i = 0; i < newWinnerSplit.length; i++){
    
// }

//Functions
function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log('Jon is still alive')
    } else {
        console.log('RIP  Jon Snow')
    }
}
isJonAlive()

// create a function that can be used everytime Jon is attacked

function surpriseAttack(attack) {
    jonSnowHealth -= attack;
    console.log(`Jon has ${jonSnowHealth} remaining`)
    isJonAlive()
}
surpriseAttack(20)
surpriseAttack(100)

//create a function that will allows  two people to greet each other

function greeting(person1, person2) {
    console.log(`${person1} says hello to ${person2}`)
}
//when you call a function you pass arguments/ actual values.
greeting('Jon Snow', 'Ned Stark')

// lets create a function that represents a diceRoll and returnn a value to the call location.
function diceRoll() {
    let possibleRoll = [1, 2, 3, 4, 5, 6]
    //randomise an index so that we cans send a random value from the possible
    //Math.random returns a number between 0 -.99(not including 1)
    let randomNumber = Math.floor(Math.random()* possibleRoll.length ) //return 0-.99
    return possibleRoll[randomNumber];

}
console.log(diceRoll())
console.log(diceRoll())

//create a function
function diceMultiple() {
    let firstRoll = diceRoll()
    let secondRoll = diceRoll()
    console.log(firstRoll)
    console.log(secondRoll)
    return firstRoll * secondRoll
}
console.log(diceMultiple())