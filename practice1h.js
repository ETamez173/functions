// Practice: Fast Food (Multiple Parameters)

var finishedOrder =[]

// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

const orderMeal = (sandwich, dessert, drink, side, other1, other2 ) => {

    // const orderMeal = (sandwich, dessert ) => {

// const orderMeal = (sandwich, dessert, drink ) => {

if ("sandwich" != "") { finishedOrder.push(sandwich) }
    
if ("dessert" != "") { finishedOrder.push(dessert) }
    
if ("drink" != "") { finishedOrder.push(drink) }
    
if ("side" != "") { finishedOrder.push(side) }
   
if ("other1" != "") { finishedOrder.push(other1) }

// if ("other2" != "") { finishedOrder.push(other2) }
}

// const takeOutBag = orderMeal("Ultimate Slammer")
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae")
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper")
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper")
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges", "Tacos")
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges", "Tacos", "Beans")
// const takeOutBag = orderMeal("Ultimate Slammer", "", "Mr. Pepper", "Potato wedges", "Tacos", "Beans")
// const takeOutBag = orderMeal("Ultimate Slammer", "Mr. Pepper", "Potato wedges", "Tacos", "Beans")
console.log(finishedOrder)





// What happens if you define more parameters than arguments?  the output says that the missing argument is undefined
//   
// What happens if you change the order of your parameters?  nothing they come out in the changed order

// What happens if you change the order of your argument values when you invoke the function?  nothing they come out in the changed order

// What happens if you remove one of your parameters?   you get an error  >>>  drink is not defined