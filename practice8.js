// javascript for selecting out unique numbers and
// for solving problems of duplicates in text objects and arrays


var numbers = [1, 1, 2, 3, 4, 4];
// function should return [1, 2, 3, 4]

function onlyUniqueNumbers(array) {
    return array.filter(function (v, i, arr) {
        // compare index with first element index
        return i == arr.indexOf(v);
    })
}
console.log(onlyUniqueNumbers(numbers));




// You can always use Array.includes.
// var numbers = [2, 2, 3, 3, 4, 5];
// function SillyFunctionName(array) {
//     "use strict";

//     var uniqueArray = [];

//     for (var i = 0; i < array.length; i++) {
//         if (uniqueArray.includes(array[i])) {
//             break;
//         } else {
//             uniqueArray.push(array[i]);
//         }
//     }

//     return uniqueArray;
// }


// console.log(SillyFunctionName(numbers));