/* 
    Embrace IT - Junior Web Development course
    v1.0_2018Q1

    
    Assignment 4
    -------------
    Useful functions    
 */

// convenience object for storing answers
var assignment = {
    answers: [],
    addAnswer: function(x) {
        this.answers = [...this.answers, x]
    }
}

/* 
    A)
    Write a function isStringCoercableToNumber that takes any input s and returns true if the input can be converted to a number, or false if it cannot.
    hint: using Number() on an invalid string leads to NaN - which evaluates as false!

    sample solution is 4 lines of code (but it can be done in one)
*/
function isStringCoercableToNumber (s) {
    // variable to return
    var result
    if (Number(s)) {
        // console.log('true')
        result = true
    }
    else {
        // console.log('false')
        result = false
    }
    return result
}


function isStringCoercableToNumber (s) {
    // variable to return
    if (Number(s)) {
        // console.log('true')
        return true
    }
    return false
}

//     var s = Number(s)
//     if (s) {
//         console.log('a number!')
//     }
//     else {
//         console.log('not a number!')
//     return s
// }
s = isStringCoercableToNumber (5) 
    console.log(s)
// var x
// x = Number(4) // NaN

// if (x) {
//     console.log('a number!')
// }
// else {
//     console.log('not a number!')
// }



    // function rectangleArea(width, height) {
    //     return width * height
    // }
    
    // var ans = rectangleArea(30, 12)
    // console.log(ans)



//     var s = true
//     if (s == number){
//     }
//     else (s === "string"){
//         result = false
//     }
// }

assignment.addAnswer(isStringCoercableToNumber)

/* 
    B)
    Write a function getNumberOrDefault which accepts two arguments x and d.
    Return x if x is a number or can be coerced to a number, otherwise return d.
    hint: you can call isStringCoercableToNumber from within your function!

    sample solution is 3 lines of code (or one, using a ternary operator)
*/
// function getNumberOrDefault (x, d) {
//     if (x) Number = a
//         return x
//     } 
//     else {
//         return d
//     } 
// }
// var x = 3
// getNumberOrDefault (x, d)
// assignment.addAnswer(getNumberOrDefault)

/* 
    C)
    Ever wondered how many cups of coffee you will drink, or how many lines of cocaine you will need to have a lifetime supply?
    Write a function called lifetimeSupply that takes inputs avgPerDay, age, and maxAge.
    Return the lifetime supply based on the average number used per day, your age and expected maximum age, and the fact that a year always consists of 365 days (ignoring leap years).
*/
function lifetimeSupply (avgPerDay, age, maxAge) {
    var perYear = avgPerDay * 365
    var years = maxAge - age
    var result = perYear * years
    return result

}
var x = lifetimeSupply (3, 50, 55)
console.log(x)
assignment.addAnswer(lifetimeSupply)

/* 
    D)
    A year is a leap year if 
    - it is evenly divisible by four
    - it is NOT divisible by 100
    - UNLESS it is divisibly by 400

    The following years are leap years:
    1600, 2000, 2016, 2020, 2400
    This is because they are evenly divisible by 4, or both by 100 and 400.

    The following years are NOT leap years:
    1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600
    This is because they are evenly divisible by 4 and by 100 but not by 400.

    hint: you can test if a number is evenly divisible if its remainder to a division is 0: if x % y == 0 then x is evenly divisible by y.

    sample solution is 4 lines of code (but it can be done in one :p)
*/

// function isLeapYear (n) {
//     return isLeapYear
//     if (n) { 
//         n = ((n / 4) && (n ! /= 100 || n / 400))
//     }
// }
// assignment.addAnswer(isLeapYear)

// DO NOT TOUCH (lest thou anger the squirrel)
console.log(assignment.answers)
const embraceFeedback = assignment.answers