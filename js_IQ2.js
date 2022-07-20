//Que-6.What are closures? Give an example of closure.

//A closure is the combination of a function and the lexical environment within which that function was declared.
// i.e, It is an inner function that has access to the outer or enclosing function’s variables. 
//The closure has three scope chains.
// i. Own scope where variables defined between its curly brackets 
//ii. Outer function’s variables 
//iii. Global variables.

function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


//Que-7.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind().

//call(): It is use for calling the fun , we need to give comma separated..,in case of call, each and every arguments which is required to be passed to the function will be passes individually.
// Apply() : Each and every arguments which is required to be passed to the function will be inside an array.
// bind(): it will return you new function, and this new function , we can call at anytime and anywhere.

var obj = { num: 2 };
function add(a, b){
  return this.num + a + b;
}
const resultCall  = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);
const funcBind    = add.bind(obj, 3, 5)
const resultBind  = funcBind();
console.log(resultCall, resultApply, resultBind);


//Que-8.What is creation phase and execution phase?

// When a global code is executed it goes through the below phase,
// 1.Creation Phase
// 2.Execution Phase

//Creation Phase
//Compiler runs through the entire code for 2 time before actually executing the code,
//1.It picks all function declarations and stores them in memory with their reference.
//2.It picks all variables and assign undefined to them. In the event of a conflict between variable 
//and function declaration name then that variable is ignored.

//Execution Phase
//During the execution phase, the JavaScript engine executes the code line by line,
// assigns the values to variables, and executes the function calls.

function foo() {
    console.log("function foo is called!")
  }
  foo()
  console.log(a);
  var a = 10;
  console.log(a);


//Que-9.What are objects in javascript?

// JavaScript provides you with many ways to create an object.
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects.
// Maths are always objects.
// Regular expressions are always objects.
// Arrays are always objects
// Functions are always objects
// Objects are always objects


//Que-10.What are function constructors?

//The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically.

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();


//Que-11.Explain prototypes.

// In JavaScript, every function and object has a property named prototype by default.

function Person () {
    this.name = 'John',
    this.age = 23
}
const person1 = new Person();
// checking the prototype value
console.log(Person.prototype);


//Que-12.What is prototype chain.

//In JavaScript, inherit the properties and methods from Object.prototype. This is called Prototype chaining.

const parent={
    property:"2acre land",
    villa:"in gurgaon",
};
const child ={
     job : "company",
     city : "Nagpur",
} 
   child._proto_= parent;
console.log(child._proto_.villa);


//Que-13.Give an example of inheritance using function constructor

function Employee(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
};
function Developer(name, age, gender, 
specialization) {

  // Calling Employee constructor function
  Employee.call(this, name, age, gender);

  // Adding a new parameter
  this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);


//Que-14.What are callbacks?
//A callback function is a function passed into another function as an argument. 
//This function is invoked inside the outer function to complete an action.

// function
function foo(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}
// callback function
function callMe() {
  console.log('I am callback function');
}
// passing function as an argument
foo('Peter', callMe);


//Que-15.What is the use of setTimeout.
//The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds.
//For example, let's log a message after 2 seconds using setTimeout method,
setTimeout(function () {
  console.log("Good morning");
}, 2000);


//Que-16.What is an event loop and call stack?

//The JavaScript event loop takes the first call in the callback queue and adds it to the call stack as soon as it's empty.

//JavaScript code is being run in a run-to-completion manner, meaning that if the call stack is currently executing some code, 
//the event loop is blocked and won't add any calls from the queue until the stack is empty again.




