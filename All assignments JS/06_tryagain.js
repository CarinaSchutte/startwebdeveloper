/* 
    Embrace IT - Junior Web Development course
    v1.0_2018Q1

    
    Assignment 6
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
    Create your own bucket list of things you want to do, learn, etc. (be creative!) The list should contain at least 3 items.

    Write a function that takes your bucket list as an argument, and prints out each item separately with the added text 'when I grow up I really want to '.
    For checking purposes, have your function log each time it prints something, then return the number of times printed.
 */

// ...
// assignment.addAnswer(printBucketList)

/* 
    B)
    Create a second array that holds only True or False values.
    Write a function bucketSelectDoneOrNot that accepts two arrays (your bucketlist and the true/false list), and an
    optional boolean parameter called isDone that defaults to False.
    
    The function returns a third array, which is created as follows:
    Loop through both arrays. For each element in your bucket list for which the corresponding
    element in the true/false array is equal to the value of isDone, add the bucket list element
    to the output array.

    e.g. if your bucketList is represented as [1, 2, 3] and the true/false array contains [true, false, false]
    your function should return [2, 3] if isDone is false, or [1] if isDone is true

    You may assume that both arrays are of equal length, and that the true/false array contains
    only true or false elements.

 */

// ...
// assignment.addAnswer(bucketSelectDoneOrNot)


/* 
    C) BONUS QUESTION
    Instead of writing your true/false array by hand, write a function that takes the length of your bucket list as input, and outputs a new array of that length with randomly generated true/false values.
 */

// ...
// assignment.addAnswer(generateDoneOrNot)


// DO NOT TOUCH (lest thou anger the squirrel)
console.log(assignment.answers)
const embraceFeedback = assignment.answers