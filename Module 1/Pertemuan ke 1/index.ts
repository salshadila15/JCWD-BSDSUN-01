const age: string = "99";
const date = "2025-01-01"; // -> format 01 Januari 2025

function convertDate(date: string){}// hanya contoh penggunaan ts

convertDate(date);

const lowercase = "nama saya adalah";

console.log(lowercase.split(""))

console.log(lowercase.split('')[0].toUpperCase() + lowercase.slice(1))

const trim = " Saya Andi";
console.log(trim.trim());
console.log(trim.trim().split(' ').join(''))

const nama = "Radid";
const alamat = "Jakarta";

const kalimat = `Nama saya adalah ${nama}, alamat saya di ${alamat}`
const kalimat1: string = `     Nama saya adalah ${nama}, alamat saya di ${alamat}`
const kalimat2: string = "Nama saya adalah " + nama + ", alamat saya di " + alamat;

console.log(kalimat.trim());

// Output kalimat 1
console.log(kalimat1.trim())

// Output kalimat 2
console.log(kalimat2.toLowerCase())

const number: string = "12"

console.log(typeof parseInt(number));
console.log(typeof Number(number))
console.log(typeof +number);
console.log(typeof Infinity);
console.log(typeof NaN);

const num = 12.5;
console.log(num.toFixed()) // untuk buletin keatas

const empty = 0

console.log(!empty);

const now: Date = new Date();

console.log(now);

console.log(4 % 4)

console.log(2 === Number('2'));

const length_ = 5;
const width = 3

console.log(length_ * width);

const methodLength = 'Coba method length'

console.log(methodLength.length)
