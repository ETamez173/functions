
// var coinFlip = Math.random() * 2  // Number between 0 and 2
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

// 2 times .666666 is 1.3333 so setting the true to be 1.3333 or over is the same as testing the two lower ranges and setting them to false.

var multiplier
var fishCatch
const svenOdds = (multiplier) => {

    if ((fishCatch = Math.random() * multiplier) > 1.33333) 
    {
        console.log("Sven hooked a Tuna!")
        return true
    }

    else {
        console.log("Sven came up empty handed!")
        return false
    }

}
// const tunaOdds = .666 * coinFlip
svenOdds(2);