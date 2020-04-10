//   Defining the Chores

const person = {
    firstName: "Donald",
    lastName: "McLelland"
}

const sweep = person => `${person.firstName} ${person.lastName} swept the kitchen`
console.log(sweep(person))

// console.log(person.firstName)
// console.log(person.lastName)

const dishes = person => `${person.firstName} ${person.lastName} washed the dishes`
console.log(dishes(person))

const feedDog = person => `${person.firstName} ${person.lastName} fed the dog`
console.log(feedDog(person))

const garbage = person => `${person.firstName} ${person.lastName} took the garbage out`
console.log(garbage(person))

const laundry = person => `${person.firstName} ${person.lastName} washed the laundry`
console.log(laundry(person))

const vacuum = person => `${person.firstName} ${person.lastName} vacuumed the carpet`
console.log(vacuum(person))

var day = "Monday"

// const dayPlanner = (chore, person, day) => {

//     // `chore(person) on ${day}`
//     return `${chore(person)} on ${day}`

// }

// console.log(dayPlanner(garbage, person, day))


const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {

    // `chore(person) on ${day}`
    return `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}`

}

console.log(dayPlanner(garbage, laundry, dishes, person, day))