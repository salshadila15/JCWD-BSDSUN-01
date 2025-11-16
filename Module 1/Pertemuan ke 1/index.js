console.log("Hello World");

//variable let
let message; 

console.log(message)
console.log(message)
message = "Hello"

console.log(message)
console.log (message)

//Var Global Variable
var globalvariable = "Global variable";
console.log(globalvariable)

//Variable 
const constantVariable = 'this const variable'
console.log(constantVariable);

//data; // -> akan error karena terkena scoop
globalvariable;

//string ditandai dengan ``, '', ""
//number ditandai dengan angka (1,2,3,5...)
//Boolean ditandai dengan -> true atau false
//Null -> kosong

//Object
const user = {
    name: "radid",
    address: "jakarta",
    age: 99,
    isWoman: true,
};

console.log(user)

// Array -> bisa memasukkan banyak jenis data
const users = [12,'12', false, true,user];
console.log(users)

console.log(typeof message)
console.log(typeof user.age)
console.log(typeof user.isWoman)
console.log(typeof user.name)
