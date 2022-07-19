//Que-1. Difference between “ == “ and “ === “ operators.

// 1. == and === are the comparison operator that we are used in javascript.
//2.The main difference between the == and === operator in javascript is that the == operator does 
//the type conversion of the operands before comparison, whereas the === operator compares the values as well as 
//the data types of the operands.
//3.let a = 10;
//let b = '10';

//console.log(a == b);  //true
//console.log(a === b);  //false


//Que-2.What is the spread operator?

//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array
// or object into another array or object.

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...a, ...b];
// console.log(c)


//Que-3.What are the differences between var, let and const?

//1.In JavaScript, users can declare a variable using 3 keywords that are var, let, and const.
//2. var keyword is oldest keyword and let and const are introduced in es6. 
//3. var declarations are globally scoped or function scoped while let and const are block scoped. 
//4.var variables can be updated and re-declared within its scope;
// let variables can be updated but not re-declared; 
//const variables can neither be updated nor re-declared. 
//5. They are all hoisted to the top of their scope. 
//But while var variables are initialized with undefined, 
//let and const variables are not initialized. 
//6.While var and let can be declared without being initialized, const must be initialized during declaration.


//Que-4.What is execution context?

//1.The Execution Context contains the code that's currently running, and everything that aids in its execution.
//2.During the Execution Context run-time, the specific code gets parsed by a parser, 
//the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.


//Que-5.What is meant by first class functions.

// In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

// For example, in such a language, a function can be passed as an argument to other functions, can be returned by 
//another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

// function add(x, y) {  
//     return x + y;  
// }  
// let sum = add;  