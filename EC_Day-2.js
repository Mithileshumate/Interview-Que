/*
Que-1.What is different Data-types in javascript?
Ans-- There are Two types of Data-type in javascript.
i. Primitive Datatype
ii.Non-Primitive Datatype

i.Primitive Datatype-- >
Number,Null,Boolean,String,Symbol,Big-int,Undefined

ii.Non-Primitive Datatype-- >
Everything in javascript are object.
a.Object 
b.Arrays


Que-2.How many ways to declared the variable?
Ans-- In three ways we can declared the variable.
i.variable(var)
ii.Let
iii.Constant(const)

Que-3.Difference between var, let & const.
Ans-- i.var is an global scope & function scope.
ii.var can be redeclared again.
iii.var can be modified.

i.Let is an block scope
ii.Let can't be redeclared.
iii.Let can't be modified.

i.const can be block scope
ii.const can be redeclared
iii.const can't be modified later

Que-4.What is hoisting?
Ans-- > Hoisting is a javascript mechanism where variables & function declaration are moved to the top 
of there scope before the code excution.

Note- Only declaration are hoisted not the initialization.

a=10;
console.log(a);
var a;

Que-5.What is Temeporal Dead Zone?
Ans--> It is the area of a block where a variable is inaccessible untill the moment computer 
initilize it with a value.

TDZ occurs when we declare a variable of Let and const keyword.

Que-6.What are the different type of operators in javascript?
Ans--> i.Arithematic operator
ii.Comparison operator
iii.logical operator
iv.Relational operator
v.Conditional operator
vi.Bitwise operator


Que-7.Difference between “ == “ and “ === “ operators.
Ans-->1. == and === are the comparison operator that we are used in javascript.
2.The main difference between the == and === operator in javascript is that the == operator does 
the type conversion of the operands before comparison, whereas the === operator compares the values as well as 
the data types of the operands.
3.let a = 10;
let b = '10';
console.log(a == b);  //true
console.log(a === b);  //false

*/