console.log("Hello, welcome to Module 1, Meeting 2!");

// Create a function convertDate
// Create a function convertDate
function convertDate(date: Date): string {
    return date.toISOString().split('T')[0];
}
console.log(convertDate(new Date()));


function greet(name: string): string {
    return `Hello, ${name}!`;
}

