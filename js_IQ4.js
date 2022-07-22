//Que-28.What is a Temporal Dead Zone?
//The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords,
// but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes 
//a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, 
//is called the temporal dead zone.

//Let's see this behavior with an example,

function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}


//Que-29-What is the for-in loop in JavaScript? Give its syntax
//The for-in loop is a special type of a loop that iterates over the properties of an object, or the elements of an array.
//The generic syntax of the for-in loop is:
for(variable in object) {
    // Code to be executed
}

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
     
    // Loop through all the elements in the array 
    for(var i in fruits) {  
       console.log(fruits[i]);
    }


//Que-30.Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript.

//Local Scope: Local Scope occurs when you create a variable inside a function.
// By doing that, the visibility and accessibility of the variable is only allowed within that function.

//Block Scope: Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//ES6 introduced two important new JavaScript keywords: let and const.
//These two keywords provide Block Scope in JavaScript.

//Functional Scope: Each function creates a new scope.
//Variables defined inside a function are not accessible (visible) from outside the function.
//Variables declared with var, let and const are quite similar when declared inside a function.
function myFunction(){
    var carName= "KIA";
}

//Scope Chain:Scope chain: Whenever our code tries to access a variable during the function call, 
//it starts the searching from local variables.


//Que-31.What is difference between null and undefined and where to use what?
//Null:
// It is an assignment value which indicates that variable points to no object.
// Type of null is object.
// The null value is a primitive value that represents the null, empty, or non-existent reference.
// Indicates the absence of a value for a variable.
// Converted to zero (0) while performing primitive operations.

//Undefined:
// It is not an assignment value where a variable has been declared but has not yet been assigned a value.
// Type of undefined is undefined.
// The undefined value is a primitive value used when a variable has not been assigned a value.
// Indicates absence of variable itself.
// Converted to NaN while performing primitive operations.


//Que-32.what is Symbol?
//The JavaScript ES6 introduced a new primitive data type called Symbol. 
//Symbols are immutable (cannot be changed) and are unique. 
//Example:
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2); // false


//Que-33.Write code to explain map and filter in arrays.

//Map--The map() method is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.
const num = [1,2,3,4,5]
const doubled = num.map(item => item+1);
console.log(doubled);

//filter -- The filter() method takes each element in an array and it applies a conditional statement against it.
// If this conditional returns true, the element gets pushed to the output array. 
//If the condition returns false, the element does not get pushed to the output array.

const number = [1,2,3,4,5,6]
const even = number.filter(item => item % 2 === 0)
console.log(even);


//Que-34.Explain passed by value and passed by reference.
//Pass by value means you are making a copy in memory of the actual parameter's value that is passed in, 
//a copy of the contents of the actual parameter.
//Use pass by value when when you are only "using" the parameter for some computation, not changing it for the client program.

//Pass-by-reference means to pass the reference of an argument in the calling function to the corresponding formal parameter of the called function.
// The called function can modify the value of the argument by using its reference passed in.


//Que-35.Please explain Self Invoking Function and its code.
//IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,
(function () {
    // logic here
  })();

//The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. 
//i.e, If you try to access variables with IIFE then it throws an error as below,
(function () {
    var message = "IIFE";
      console.log(message);
  })();
  console.log(message); //Error: message is not defined
  
