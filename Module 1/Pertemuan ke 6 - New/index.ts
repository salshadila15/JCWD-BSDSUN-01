// Basic Syntax Object
const user = {
    name: "Ole Romeny",
    greet() {
        return "Hello";
    },
};
const profile = new Object ();
console.log(user, profile);

// Add and Delet Property dalam Object
const person: any = {
    name: "Marselino",
    age: 20,
}
// Add property
person.hobby = "Bola"
console.log(person);
// Delete property
delete person.age;
console.log(person);

// Akses value
const newPerson: any = {
    name: "Franky",
    age: 30,
};
// 1. Menggunakan dot(.)
console.log(newPerson.name);
// 2. Menggunakan NAMAPROPERTY [nama key]
console.log(newPerson["age"]);

let newOptionalChaining: any = {};
// Ditandai dengan tanda tanya (?)
console.log(newOptionalChaining.data?.name);

console.log(Object.keys(newPerson));

// Immutable
let nama = "Jhonny";
let newName = nama; // salinan
nama = "Budi";
console.log(nama, newName); // Outputnya berbeda

// Mutable
let orang = {
    name: "Franky",
    age: 40,
};
let orangBaru = orang;
orangBaru.name = "Budi";
console.log(orangBaru, orangBaru); // Outputnya sama

for (const person in newPerson){
    console.log(person); // Mendapatkan sebuah property

    console.log(newPerson[person]); // Mendapatkan sebuah value
}

// Destructuring
let a, b;
[a, b] = [2, 1];

console.log(a,b);

const { age, name: nameNewPerson } = newPerson;
console.log(age, nameNewPerson);

// Spread Operator -> ditandai dengan (...) titik 3 kali
const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const mergeDataOneAndTwo = [...dataOne, ...dataTwo];
console.log(mergeDataOneAndTwo);

const objectOne = { name: "Andi" };
const objectTwo = { email: "andi@mail.com" };
const mergeObject = { ...objectOne, ...objectTwo };
console.log(mergeObject);

// Object Built-In Method
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// Assign
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

interface ICar {
    brand: string;
    model: string;
    price: number;
};

type TCarModel = "Seri A" | "Seri B";
type TTransactionStatus = "Pending" | "Cancel" | "Failed";

// &&, ||, >=, <=

type TCar = {
    brand: string;
    model: string;
    price: number;
    transactionStatus: TTransactionStatus;
};

const car: ICar = {
    brand: "BYD",
    model: "BYD Denza 09",
    price: 950000000,
};

const newCar: TCar = {
    brand: "Mazda",
    model: "Mazda TypeX",
    price: 0,
    transactionStatus: "Pending"
};
