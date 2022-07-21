//Que-17.What are promises and why do we need them?
//A promise is an object that may produce a single value some time in the future with either a resolved value or 
//a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.
//Syntax of Promises-
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
//Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.


//Que-18.What is the purpose of async/await keywords?
//They keyword async is used to make a function asynchronous.
// The await keyword will ask the execution to wait until the defined task gets executed. 
//It allows the use of await Keyword inside the functions with async keyword. 
//Using await in any other way will cause a syntax error.

async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    console.log(result); // "done!"
  }
  f();


//Que-19.What is hoisting?
//Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.
// Remember that JavaScript only hoists declarations, not initialisation.

x = 5;
console.log(x);
var x;


//Que-20.What is the DOM?
//DOM stands for Document Object Model.
//The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.
// It defines the logical structure of documents and the way a document is accessed and manipulated.
// It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


//Que-21.Difference between undefined vs not defined vs NaN?
//Undefined:
// It is not an assignment value where a variable has been declared but has not yet been assigned a value.
// Type of undefined is undefined.
// The undefined value is a primitive value used when a variable has not been assigned a value.
// Indicates absence of variable itself.
// Converted to NaN while performing primitive operations.
//Not defined:
//A not defined is a variable that is not declared at a given point of time with declaration keyword like var, let, or const.
//NaN:
//The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.Not a Number, is a member of a numeric data type that can be interpreted as a value that is undefined
//Example:
isNaN("Hello"); //true isNaN("100"); //false


//Que-22.How many operators do we have in JS ?
//An operator is used for manipulating a certain value or operand. Operators are used to perform specific mathematical and logical computations on operands.
//Here are different types of operators in JavaScript that are used for performing different operations. 
//Some of the JavaScript Operators include:
// Arithmetic Operators
// Comparison Operators
// Bitwise Operators
// Logical Operators
// Assignment Operators


//Que-23.What are pure functions?
//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
// It does not depend on any state or data change during a program’s execution.
// Rather, it only depends on its input arguments.


//Que-24.What is callback hell?
//Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. 
//The callback hell looks like below,
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
            
            });
        });
    });
});


//Que-25.What is promise chaining?
//Promise chaining occurs when the callback function returns a promise.
// It allows you to chain on another then call which will run when the second promise is fulfilled. 
//Catch can still be called to handle any errors that might occur along the way.
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;
}).then(function(result) { // (***)
    console.log(result); // 2
    return result * 2;
 }).then(function(result) {
    console.log(result); // 4
    return result * 2;
 });


//Que-26.What are arrow functions?
//An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. 
//These functions are best suited for non-method functions, and they cannot be used as constructors. 
//Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript. 
//Another significant advantage it offers is the fact that it does not bind its own this.
// In other words, the context inside arrow functions is lexically or statically defined.
hello = () => {
    console.log("Hello World!") ;
  }


//Que-27.Give an example of async/await.
// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();