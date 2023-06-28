// Objects and Classes

const person = {
    firstName: 'Sornya',
    lastName: 'Welss',
    favouriteColor: 'Pink',
}
// person.hasPets = true // adding key
// console.log(person['hasPets'])


// console.log(person.firstName);
// console.log(person['lastName']);
// const color = 'favouriteColor' // assign property to a new variable. then you can use square bracket.
// console.log(person[color])

const meal = {
    appitzer: 'Spring Rolls',
    entree: 'Fried rice',
    dessert: 'Ice cream',
    drink:'Sweet tea'
}
// console.log(`before deletion:`)
// console.log(meal)
// console.log(`After deletion:`)
// delete meal.dessert //delete a property out
// console.log(meal)
// for (plate in meal) {
//     console.log(`The key is ${plate} and the value is $meal[palte]`)
// }
// console.log(dessert)
// console.log(appitizer)
// console.log(entree)
// console.log(myFaviteTea)

// const { firstName: nickName, lastName: surName, favouriteColor: bestColor } = person

// console.log(nickName)
// console.log(surName)
// //console.log(favouriteColor)

//Classes

class Dog{
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age   
    }
    greeting() {
        console.log(`Hello, I am ${this.name} the ${this.breed} and I am ${this.age}`)
    }
}
class Puppy extends Dog{
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)
            this.trainingLevel = trainingLevel
        
    }
    piddle() {
        console.log(`${this.name} has pped on the floor`)
    }
    levelUp(num) {
        this.trainingLevel += num
    }
}
let fido = new Puppy('fido','beagle', 1, 12)
console.log(fido)
fido.greeting()
fido.piddle()
fido.levelUp(5)
console.log(fido.trainingLevel)


// let catSnake = new Dog('Catnack', 'Pitbull', 3) // instance object
// let bugsy = new Dog('Bugsy','Pug',13)

// console.log(catSnake.name)
// console.log(catSnake)
// catSnake.greeting();
// bugsy.greeting()

// for (attr in bugsy) {
//     console.log(`${bugsy[attr]}`)
// }

