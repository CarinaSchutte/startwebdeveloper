/* 
    Embrace IT - Junior Web Development course
    v1.0_2018Q1

    
    Assignment 5
    -------------

 */

// convenience object for storing answers
const assignment = {
    answers: [],
    addAnswer: function(x) {
        this.answers = [...this.answers, x]
    }
}

/* 
    A)
    Write a function called 'abs' that takes one parameter, and 
    returns the absolute value for any numerical input.
    It's okay for your function to return NaN if input is not numerical.
 */

// TODO
// assignment.addAnswer(abs)

/* 
    B)
    Write a function called toThird which returns any numerical input
    raised to the third power.
    Add a parameter to indicate whether negative values should be returned
    as absolute value. Use the function you defined in 5.1 in your answer.
    It's okay for your function to return NaN if input is not numerical.
 */

// TODO
// assignment.addAnswer(toThird)

/* 
    C)
    Write a function called cubed which takes a single argument as its size
    (size of an edge) and returns the volume of the cube.
    It's okay for your function to return NaN if input is not numerical,
    but do make sure that the function always returns a positive number.
 */

// TODO
// assignment.addAnswer(cubed)

/* 
    D) BONUS QUESTION
    Remember our function maxThree?
    Write a function called maxAbsCubed that takes three inputs, compares their absolute values, and returns the value of the largest input, cubed.
    hint: you may want to write or call upon so-called 'helper' functions to help achieve this goal.
*/

// TODO
// assignment.addAnswer(maxAbsCubed)

// DO NOT TOUCH (lest thou anger the squirrel)
console.log(assignment.answers)
const embraceFeedback = assignment.answers