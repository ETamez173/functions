// Practice: Evens or Odds- Exercise
var numsArray = [2, 3, 6, 7, 9, 12, 14, 31, 50, 33, 48, 73, 81, 92, 10013, 0]
var num;
var numType = " "
var loadArray = numsArray

const evenOrOdd = (num) => {

    for (num of numsArray) {

        if (num % 2 == 0) {

            console.log(`${num} is Even`)
            const numType = `${num} is Even`
            // return numType = "Even"
            // return numType
        }
        else if (num % 2 == 1) {
            console.log(`${num} is Odd`)
            const numType = `${num} is Odd`
            // return numType = "Odd"
            // return numType
        }
// This code by default logs odd vs the code above that checks if num has remainder of 1 which means odd
        // else {
        //             console.log(`${num} is Odd`)
        //             // return numType = "Odd"
        // }       
    }
}
// console.log(evenOrOdd())
// console.log(evenOrOdd(loadArray))
// evenOrOdd(numsArray)
evenOrOdd()


// What happens when you pass the argument value of 0?    You get EVEN??