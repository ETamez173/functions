// Best in Show - Exercise

const bestInShow = (dogBreed) => {
    if (dogBreed === "schnauzer") {
     //   console.log(dogBreed)
        return `My favorite dog breed is ${dogBreed}!`

} else if (dogBreed === "meow") {
     //   console.log(dogBreed)
        return `I like cats!`
}
}

//
const myFavorite = bestInShow

// passing meow into bestInShow function
//
console.log(bestInShow("meow"))

// passing meow into myFavorite which is equal to the bestInShow function
//console.log(myFavorite("meow"))

// logging myFavorite shows that myFavorite without a parameter being passed just gets the function as the value
// console.log(myFavorite)

// Log the string of "When it comes to pets," plus the returned value of the function.
//
// console.log(`When it comes to pets, ${myFavorite("meow")}!`)
// console.log(`When it comes to pets, ${bestInShow("schnauzer")}!`)


//  Questions to Ask
// Does the function require input to do its job?                               YES "meow" or "schnauzer"
// Does the function need to return a value?                                    YES a string with the dogBreed
// Am I referencing the return value with a variable?                           YES myFavorite is where I store the returned value
// What should I do with the return value?                                      create a string to log "When it"
// What happens if I don't provide an argument at all?                          you get undefined
// What happens when I remove the parameter from the definition of the function? error saying something is not defined

