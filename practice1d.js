// Self-Driving Cars - Exercise


const go = (direction, mph) => {
    if (direction === "forwards" && mph <= 75) {
        // console.log(`The car is moving forwards at ${mph} mph.`)
        const directionSpeed = `The car is moving forwards at ${mph} mph.`
        return directionSpeed

    }
    else if (direction === "forwards" && mph > 75) {
        //  console.log(`The car is moving forwards at ${mph} mph. SLOW DOWN!`)
        const directionSpeed = `The car is moving forwards at ${mph} mph. SLOW DOWN!`
        return directionSpeed

    } else if (direction === "backwards") {
        //  console.log(`The car is moving backwards at ${mph} mph.`)
        const directionSpeed = `The car is moving backwards at ${mph} mph.`
        return directionSpeed

    } else if (direction === "circles") {
        //  console.log(`The car is moving backwards at ${mph} mph.`)
        const directionSpeed = `The car is moving in cicles at ${mph} mph.`
        return directionSpeed
    }

}


// These function calls below call the "go function" and within the function 
// a console.log of an interpolated string is logged to the console 
go("forwards", 65)
go("forwards", 75.5)
go("backwards", 50)
go("circles", 120)

// These function calls below log the returned value of the "go function" aka directionSpeed which is 
// a value that is an interpolated string.  Note that if I don't remove the console.log within the function
// that we get two logs saying the same thing.  One inside the function and one after the function call is made outside

console.log(go("forwards", 65))
console.log(go("forwards", 75.5))
console.log(go("backwards", 50))
console.log(go("circles", 120))

