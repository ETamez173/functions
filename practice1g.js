
var coinFlip = Math.random() * 2  // Number between 0 and 2
// console.log(coinFlip);

// var fishCatch
// const svenOdds = () => {

//     if (((fishCatch = Math.random() * 2) * .666) > 1) {
//         console.log("Sven hooked a Tuna!")
//         return true
//     }

//     else {
//         console.log("Sven came up empty handed!")
//         return false
//     }

// }
// const tunaOdds = .666 * coinFlip
// svenOdds();

// var fishCatch
// const svenOdds = () => {

//     if ((fishCatch = Math.random() * 2) > 1.33333) 
//     {
//         console.log("Sven hooked a Tuna!")
//         return true
//     }

//     else {
//         console.log("Sven came up empty handed!")
//         return false
//     }

// }
// // const tunaOdds = .666 * coinFlip
// svenOdds();

// 0 to .6666 is false - its the same as 33% chance of NOT catching a fish
// .6667 to 1.3333 is false  - its the same as 33% chance of NOT catching a fish
// 1.33334 to 2 is true  - its the same as 33% chance of catching a fish

// 2 times .666666 is 1.3333 so setting the true to be 1.3333 or over 
// is the same as testing the two lower ranges and setting them to false.

var multiplier
var fishCatch
const svenOdds = (multiplier) => {

    if ((fishCatch = Math.random() * multiplier) > .6667) 
    {
        console.log("Sven hooked a Tuna! :)")
        // console.log(`${fishCatch} was just enough Sven!`)
        // return true
        return `${fishCatch} was just enough Sven! Get out the butter and spices!`
    }

    else {
        console.log("Sven came up empty handed! :(")
        // console.log(`${fishCatch} just not enough Sven!`)
        // return false
        return `${fishCatch} just not enough old Sven!`
    }

}

// svenOdds(1);

console.log(svenOdds(1))

//Is your function a pure function? Why or why not?  YES the function returns TRUE or FALSE
// What happens if you multiply random() by 0?  Sven never gets a fish his odds are ZERO







// var fishCatch
// const svenOdds = () => {
// // Using the number 2 here makes the the range of 0 to 2 equal to 0 to 1.33 is failed fishing
// // and over 1.33 is caught a fish
//     if ((fishCatch = Math.random() * 2) > 1.33333) 
//     {
//         console.log("Sven hooked a Tuna!")
//         return true
//     }

//     else {
//         console.log("Sven came up empty handed!")
//         return false
//     }

// }
// // const tunaOdds = .666 * coinFlip
// svenOdds();



// var fishCatch
// const svenOdds = () => {
// // Using the number 1 here makes the the range of 0 to 1. Getting 0 to .6667 is failed fishing
// // and over .6667 is caught a fish
//     if ((fishCatch = Math.random() * 1) > .6667) 
//     {
//         console.log("Sven hooked a Tuna!")
//         return true
//     }

//     else {
//         console.log("Sven came up empty handed!")
//         return false
//     }

// }
// // const tunaOdds = .666 * coinFlip
// svenOdds();