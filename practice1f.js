// Double Functions - Practice

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

var word;
var eachWord;

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

// This word2 is a new empty array that will collect the words that dont begin with k
var word2 = []

// This removeKwords is a function that uses a "for of" loop and the startsWith to iterate the 
// words array and .push only non k words into the new array

const removeKwords = () => {

    for (eachWord of words) {

        if (!eachWord.startsWith("k")) {
            // console.log(word)
            word2.push(eachWord);

            // var fruits = ["Banana", "Orange", "Apple", "Mango"];
            // fruits.push("Kiwi");
       }
        // else
        //     console.log("word has a K")
    }
return removeKwords

}
// removeKwords(words)
// console.log(word2);

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


var noKarray = word2
// console.log(noKarray);
const joinDaWords = (taco) => {

   var sentence = noKarray.join(" ");

  return sentence;
    
}
// console.log(joinDaWords());
// joinDaWords();


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join(" and ");



/*
    Invoke the filtering function and store its return value
 */
// var A = removeKwords(words)
var y = removeKwords(words)
// console.log(word2);




/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
//when a function returns some value, the instructions to run the 
//function becomes the return value.   removeKwords(words) becomes the return value of that function
// so var y is equal to the returned value and can be used to call the joinDaWords funtion below


// joinDaWords(y)
console.log(joinDaWords(y));
// console.log(joinDaWords(y));