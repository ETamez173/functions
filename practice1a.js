
//  Age in Dog Years - Muscle exercise
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    // console.log(ageInDogYears)
    return ageInDogYears

}
//when a function returns some value, the instructions to run the 
//function becomes the return value.  calculateAgeInDogYears(56) = 8

// calculateAgeInDogYears(56)


// const dogAge = 8 is what javascript sees since 
// calculateAgeInDogYears(56) evaluates to 8

const dogAge = calculateAgeInDogYears(56)

console.log(dogAge)
