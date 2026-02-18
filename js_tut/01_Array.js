// array
//Array in js can have different data types
//shallowcopy of array are createed means if there is a change in one place...another copy is also changed
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)
myArr.unshift(9)//adds 9 to the first place of the array
console.log(myArr)
myArr.shift()//shift again removes the digit added by unshift at the first position

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));//agr exist nhi krega to -1

const newArr = myArr.join()//converts all the elements of the array to the string

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//last index is not included

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//last range included and manipulates original array
console.log("C ", myArr);
console.log(myn2);