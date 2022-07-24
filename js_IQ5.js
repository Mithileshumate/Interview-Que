//Que-1.Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.

const text = document.getElementsByClassName('text')[0];

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',function(){
  let h1 = document.createElement('h1');
  h1.innerText = "MERN Stack"
  text.append(h1);
})

//Que-2.Write code to get 1st H1 element from a webpage using DOM.
const first_h1 = document.getElementsByTagName('h1')[0]


//Que-3.Write code to implement timer clock using JS -- display HH:MM:SS -- 
//the time should keep updating every second.

function clock(){
  const hour = document.getElementById('hr')
  const mins = document.getElementById('min')
  const secs = document.getElementById('sec')

  var time = new Date();

  var a = time.getHours();
  var b = time.getMinutes();
  var c = time.getSeconds();
  
  hour.innerHTML=a;
  mins.innerHTML = b;
  secs.innerHTML = c;
}
setInterval(clock,1000);

//Que-4.Create an HTML page having content as Hello world and a button named Replace Text. 
//When user will click on this button page content should be changed to "Welcome to Elevation academy"

const heading = document.getElementById('heading')

const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    heading.innerText = "Welcome to Elevation academy"
})

//Que-5.Create an HTML page having content as Hello world and a button named "Hide Text."
// When user will click on this button hide the "Hello World" text.

const heading1 = document.getElementById('heading1')

const btn1 = document.getElementById('btn1')
btn1.addEventListener('click',function(){
    heading1.style.display = 'none';
})


//Que-6.Given an array of 0's and 1's find out number of 0's

var num = function (array){
    var i = 0 ;
    array.forEach(function(v){
        if(v === 0)
        i++;
    });
    return(i);
}
var zeros = num ([0,1,0,1,0,0,1,0,1]);
console.log("zeros - ", zeros);


//Que-7.Given an array find out total no. of odd and even nos.

function Numbers(arr, arrsize){
    let even = 0;
    let odd = 0;

    for(let i=0; i< arrsize ; i++)

    if(arr[i] % 2 == 0 ){
        even++;
    }
    else{
        odd++;
    }
    console.log("Even no. =" + even + "   "+ "Odd no. =" + odd)
}
const arr = [2,3,4,5,6,7,8];
const n = arr.length;
Numbers(arr,n);


//Que-8.Given a string find out number of vowels .

const vowel = S => array.from(S)
.filter(letter => 'aeiou'.includes(letter)).length;
console.log(vowel('mithilesh'));


//Que-9.Write a code to create two objects with 2 properties each, one will be string and other will be an array.
// Create a function to check if all the elements of the arrays in both the objects are same.

let obj1 = {
    name: "Prajwal",
    arr1: [1, 2, 3, 4, 5],
  };
  let obj2 = {
    name: "Prajwal",
    arr2: [1, 2, 3, 4, 5],
  };
  
  function check(obj1, obj2) {
    let n = obj1.arr1.length;
    let length = 0;
    for (let i in obj1.arr1) {
      if (obj1.arr1[i] === obj2.arr2[i]) {
        length++;
      }
    }
    if (length === n) {
      console.log("Equal");
    } else {
      console.log("Not Equal");
    }
  }
  check(obj1, obj2);

