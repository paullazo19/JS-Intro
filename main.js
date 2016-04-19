/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: `givenName` is a variable name but does not equal anything


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: `givenName` is set to "Tim"


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: `givenName` is set to "JD"


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: `greeting` is set "Hello, how are you?"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: `math` is set to 40 because high equals 50 and low equals 10. 50 minus 10 equals 40.

math = high - "5";
// Q: What is `math` set to?
// A: `math` is set to 45 because high equals 50 and "5" equals 5. 50 minus 5 equals 45.


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var timAge = today - born;
var ageSentence = "Tim is ";
ageSentence += timAge;
ageSentence += " years old";



// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = "Paul";
var instructorName = "Jason";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
