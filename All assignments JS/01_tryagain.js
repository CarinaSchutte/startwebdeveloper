/* 
    Embrace IT - Junior Web Development course
    v1.0_2018Q1

    
    Assignment 1
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
    1.1
    evaluate the following statements
    assume the statements are executed once and in sequential in order
 */

// 0.
// (8 + 2)
assignment.addAnswer(10)

// 1.
// ((10 - 2) * (3 - 2) / 2)
assignment.addAnswer(4)

// 2.
// (7 == "7")
assignment.addAnswer(true)

// 3.
// (7 !== "7")
assignment.addAnswer(true) 

// (false??!!)

// 4.
// (6 * 7 === (100 / 2) / 2 + 17)
// (42 === (50)/2 + 17)
// (42 === 50 /2 + 17)
// (42 === 42)
assignment.addAnswer(true)

var a = 10
var b = 7
a -= b
b *= a

// 5.
// (a)
// a = a-b
10-7
assignment.addAnswer(3)

// 6.
// (b)
b= b*a
assignment.addAnswer(21)

var x = 3
var y = 5
var z = 7

// 7.
// ((x < y && x <= z && y > x && y < z) || y > z)
// ((3 < 5 and 3 <= 7 and 5>3 and 5<7) or 5>7)
// ((true and true and true and true) or false)
assignment.addAnswer(true)

// 8.
// (x != y && !(z > x))
// (3 not equal 5 and not (7>3)) 
assignment.addAnswer(false)


/* 
    1.2
    Write statements to return the correct answers
 */

var a = 10
var b = 7
var c = a % b
var ans

// 9.
// ans is equal to the value of a divided by 5
ans = (a / 5)
assignment.addAnswer(2)

// 10.
// ans is equal to the value of b times the previous value of ans
ans = (b * ans)
console.log(ans)
assignment.addAnswer(14)

// 11.
// ans tests if the value of the previous ans added to b is equal to the value of b times c
ans = ((ans + b) == (b * c))
console.log(ans)
//(21 = 7 * 1)
assignment.addAnswer(ans)


/* 
    1.3

    Little Jenny starts off with 6 rabbits. Because rabbits are rabbits, they double in population every month.
    How many rabbits are there after two months?

    Hint: don't know where to start? Remember high school math where they would tell you to 'start writing down what the question tells you'? The same works fine for programming, e.g. rabbits = 6, multiplier = ... . Once you have your variables listed (in proper Javascript syntax) you can start working with them.

    NB. each question should result in about 5 - 10 lines of code - maybe less, and definitely not more!
 */

var rabbits

// 12.
assignment.addAnswer(rabbits)

/* 
    Desperate to do something about the exploding population of bunnies, little Jenny tries exploding bunnies.
    She manages to kill half the bunnies before going away on a three month holiday (killing bunnies is hard work).
    How many rabbits are there when she gets back?
 */



// 13.
assignment.addAnswer(rabbits)

/* 
    Jenny has heard that natural predators are better than TNT. She introduces some foxes into the ecosystem.
    The foxes reduce rabbit population by 25 each month, however the remaining bunnies still procreate.
    How many rabbits are there after 3 more months?
 */

// ...

// 14.
assignment.addAnswer(rabbits)

// DO NOT TOUCH (lest thou anger the squirrel)
console.log(assignment.answers)
const embraceFeedback = assignment.answers





