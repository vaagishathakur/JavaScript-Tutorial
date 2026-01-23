//Lecture-03


//Investigation Study 
let score=33
console.log(typeof(score));//number
namee="123abc";
let valueInNumber=Number(namee);//ye change to hogyaa number me pr 
// jb type check ki to pta chla ki it is not even a number
console.log(typeof(valueInNumber));
console.log(valueInNumber)//NaN:Not a Number ValueInNumber ko print krvaya fir 

let a=null;
let b=Number(a);
console.log(typeof(a));//object
console.log(typeof(b));//Number
console.log(b);//0


let ab=undefined;
let bb=Number(ab);
console.log(typeof(ab));//undefined
console.log(typeof(bb));//Number
console.log(bb);//NaN 
//agr string krde to NaN agr bool me True krde to 1


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);// gives true typecasts 1 to true

let isLogged="";//if "name" then it gives true
let booleanIsLogged=Boolean(isLogged);
console.log(booleanIsLogged);// gives false 

//1: True
//2: False
// "":False
//"vaagisha":True

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);//33
console.log(typeof(stringNumber));//gives string :) 