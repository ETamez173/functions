//  Practice: Same Chores, Different Days


//You can only omit the "return" keyword and the curly brackets if the function
//  is a single statement. Because of this, it might be a good habit to always keep them:

// No need for return in this function format
// const twice = number => number * 2 

// Example function template below
// const x = (x, y) => x * y;

// This use of the return works in this function format
// const twice = (number) => { return number * 2 } 

// when you use this function format below you need to return the results or you
// get undefined 
var twice = function(number)  {
   return (number * 2)
}

// Example function template below
var x = function(x, y) {
 return x * y;
}

const twiceTwo = twice(2)
console.log(twiceTwo)

const twiceSix = twice(6)
console.log(twiceSix)  // 12

const twiceThirteen = twice(13)
console.log(twiceThirteen)  // 26


// // ES5
// var x = function(x, y) {
//     return x * y;
//   }
  
//   // ES6
//   const x = (x, y) => x * y;
// const timesFive = number => number * 5
// Or use the longer format below 
const timesFive = (number) => 
    { return number * 5}

    console.log(timesFive(2)) // 10
    console.log(timesFive(5)) // 25


// const twice = number => number * 2 
const square = number => number * number
    
// short version with return
// const square = (number) => { return number * number}

// full function syntax below
// var square = function(number)  {
//     return number * number
//  }

 console.log(square(4))  // 16
 console.log(square(13))  // 169

 const cubed = number => number * number * number
//  console.log(cubed(3))  // 27
//  console.log(cubed(7)) // 343


 const bigify = (number, operationFunction) => {
     const result = operationFunction(number)
     return result
 }

 const number = 7

 const by2 = bigify(number, twice)   //14
 console.log(by2)

 const by5 = bigify(number, timesFive)  //35
 console.log(by5)

 const byItself = bigify(number, square)  // 49
 console.log(byItself)

 const itsCubed = bigify(number, cubed)  // 343
 console.log(itsCubed)

 