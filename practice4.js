// Practice: Fast Food (Multiple Parameters)

var finishedOrder =[]

// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

const orderMeal = (sandwich, dessert, drink, side, other1, other2 ) => {
// const orderMeal = (sandwich, dessert, drink ) => {
if ("sandwich" != "") { finishedOrder.push(sandwich) }
    
if ("dessert" != "") { finishedOrder.push(dessert) }
    
if ("drink" != "") { finishedOrder.push(drink) }
    
if ("side" != "") { finishedOrder.push(side) }
   
if ("other1" != "") { finishedOrder.push(other1) }

// if ("other2" != "") { finishedOrder.push(other2) }
}







const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
console.log(finishedOrder)