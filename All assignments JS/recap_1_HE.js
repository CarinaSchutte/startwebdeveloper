
/* 
    Embrace IT - Junior Web Development course
    v1.0_2018Q1

    
    Recap 1
    -------------
    Unfortunately no helper squirrels are available for this assignment

    this is the 'hacker' edition
    it tests your knowledge of all the concepts we have seen so far, and additionally tests your skill in taking a more complex problem and breaking it down into manageable parts.

    suggested approach:
    - do the scaffolding first! i.e. write out the function definitions and think about how they should relate to create the complete program
    - think carefully about input and output for each function
    - implement a function and test it separately, before connecting it to other parts of the program. The idea is to test one thing at a time instead of the program as a whole. This makes it much easier to locate and squash bugs.
*/

/* 
    Programmer Pat wants to live a healthy life. But he is worried that if he buys fruit at the store he will let it go bad in the bowl.
    To counter this, Pat is convinced he needs a program that simulates exactly which pieces of fruit go bad after a number of days have passed.

    Save the programmer, save the world!
*/

// a list of fruits and their associated days to expiration
// a fruit has expired AFTER the days passed, so a 'ripe avocado' has expired on the third day.
// feel free to expand or improve the list :)
const fruits = [
    ['ripe avocado', 2],
    ['banana', 3],
    ['pear', 4],
    ['pineapple', 4],
    ['orange', 5],
    ['watermelon', 6]
]

/* 
    hints:
    - you will need something to randomly pick a piece of fruit, and randomly generate a fruit bowl of some selected size
    - Math.floor(Math.random() * (max - min)) + min calculates a random value between a lower and upper bound.
    - it seems nice to only put the _name_ of the fruit into the bowl, not the number of days to expiration associated with it. This means you will need something to look up the number of days to expiration from the fruits list, based on a fruit name.
    - Pat requested a function that returns a list of all the fruits that have gone bad after a number of days. A piece of fruit has gone bad AFTER its expiration day has passed. e.g. a 'ripe avocado' has expired on the third day (days to expiration being 2).
    - as a bonus service to Pat, it may be nice to write something that does the opposite: return a list of fruits that are still good. Can you use the list of fruits that have gone bad as a way to derive the list of fruits that are still good? (you may want to look up the Array.includes() function)
*/

// TODO
