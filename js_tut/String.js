
//string is javaScript : "" or ''
const name="Vaagisha"
console.log(name+" is the best");//Vaagisha is the best

//String Interpolation
//placeholders are created
console.log(`Hello my is ${name}`)//Hello my is Vaagisha

const gameName=new String("I love java script")
console.log(gameName)//[String: 'I love java script']
console.log(gameName.length)
console.log(gameName.charAt[3])
console.log(gameName[3])//o
console.log(gameName.__proto__);//{}

const anstring="Saare jahan se accha Hindustan Hamara"
//Slicing
const s1=anstring.slice(0,4);//Saar
console.log(s1);

const s2=anstring.slice(-6,-2);//hama
console.log(s2);

const str="Mahi-is-the-best"
//str.trim()//removes whitespaces
//str.replace("is","are");//is replaced with are
//str.includes("mahi")returns t or f
console.log(str.split("-"));//[ 'Mahi', 'is', 'the', 'best' ]
console.log(str.split("-",3));//[ 'Mahi', 'is', 'the' ]