
// Practice: Addition- Exercise
//
// const add = (first, second, third) => {

//
const add = (second, first, third) => {

const totalAdd = first + second + third
// console.log(totalAdd)
//const totalAdd = second + third + first
return totalAdd

}

// add(1,2,3)
console.log(add(17,4,11))

//const allSum = add(17,4,11)
//console.log(allSum)
// console.log(add(1,2,3))

// Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work?
// Remove one parameter, but not the others. Does the function still work?  No it needs all 3 of them or you get third is not defined.
// Change the order of the variables when you add them together in the function. Does that affect the output of the function? NOPE