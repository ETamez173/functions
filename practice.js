
//  Age in Dog Years - Muscle exercise
// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7
//     // console.log(ageInDogYears) 
//     return ageInDogYears
    
// }

// const dogAge = calculateAgeInDogYears(22)
// console.log(dogAge)



// Best in Show - Exercise

// const bestInShow = (dogBreed) => {

//     if (dogBreed === "schnauzer") {
//      //   console.log(dogBreed)
        
//         return `My favorite dog breed is ${dogBreed}!`
    
// } else if (dogBreed === "meow") {
//      //   console.log(dogBreed)
        
//         return `I like cats!`
    
// }     
// }
   
//
//const myFavorite = bestInShow 

// passing meow into bestInShow function
//
//console.log(bestInShow("meow"))

// passing meow into myFavorite which is equal to the bestInShow function
//console.log(myFavorite("meow"))

// logging myFavorite shows that myFavorite without a parameter being passed just gets the function as the value
// console.log(myFavorite)

// Log the string of "When it comes to pets," plus the returned value of the function.
//
//console.log(`When it comes to pets, ${myFavorite("meow")}!`)
//console.log(`When it comes to pets, ${bestInShow("schnauzer")}!`)


//  Questions to Ask
// Does the function require input to do its job?                               YES "meow" or "schnauzer"
// Does the function need to return a value?                                    YES a string with the dogBreed
// Am I referencing the return value with a variable?                           YES myFavorite is where I store the returned value
// What should I do with the return value?                                      create a string to log "When it"
// What happens if I don't provide an argument at all?                          you get undefined
// What happens when I remove the parameter from the definition of the function? error saying something is not defined



// Practice: Addition- Exercise
// 
//const add = (first, second, third) => {

//
//const add = (second, first, third) => {

// const totalAdd = first + second + third
//const totalAdd = second + third + first
//return totalAdd
//}

//const allSum = add(17,4,11)
//console.log(allSum)
// console.log(1,2,3)

// Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work?
// Remove one parameter, but not the others. Does the function still work?  No it needs all 3 of them or you get third is not defined.
// Change the order of the variables when you add them together in the function. Does that affect the output of the function? NOPE


// Self-Driving Cars - Exercise


const go = (direction, mph) => {
    if (direction === "forwards" && mph <= 75 ) {
        console.log(`The car is moving forwards at ${mph} mph.`)
    }
      else if (direction === "forwards" && mph > 75 ) {
            console.log(`The car is moving forwards at ${mph} mph. SLOW DOWN!`)
    } else if (direction === "backwards" ) {
        console.log(`The car is moving backwards at ${mph} mph.`)
    } else {
        console.log(`The car is moving in circles at ${mph} mph.`)
    }

}
go("forwards", 75.5)
