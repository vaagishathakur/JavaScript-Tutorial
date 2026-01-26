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

//+++++++++++Operations+++++++++++++++

let value =3
let negValue=-3
console.log(negValue);
//operations 
/*
console.log(2+2);//plus
console.log(2-2);//minus
console.log(2*2);//multiplication
console.log(2**2);//power
console.log(2/3);//division
console.log(2%8);//remainder
*/

let str1="hello"
let str2=" Vaagisha"
let str3=str1+str2
console.log(str3);

console.log("1"+2);//returns 12
console.log(1+"2");//returns 12
console.log("1"+2+3)//returns 123 this is a messy video
//But........
console.log(1+2+"3");//returns 33 (1+2)and then  string concatenation

//if string is first then string conversion takes place
//if 2 integes are first then integer operations takes place  


console.log(true);//returns true
//but
console.log(+true);//now it returns 1(increment)  
// console.log(true+); error
console.log(+"");//returns 0 dirty conversion


//comparisons converts null to a number (0) .
// that is why null>=0 is true and null>0 is false

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true


console.log(undefined>0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false
//avoid these types of conversions write clean codes


// ==, === ,>= ,>these conversion operators in Javascript works differenntly.

//=== is for strict checking
console.log(2=="2")//true
console.log(2==="2")//false