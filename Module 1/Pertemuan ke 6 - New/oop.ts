// Class Declaration
class UserDeclaration {
    private name: string = "";
    private lastName: string;
    private schoolAddress: string = "";

    constructor (name: string, schoolAddress: string, lastName?: string){
        this.name =  name;
        this.lastName = lastName ?? "";
        this.schoolAddress = schoolAddress;
    }

    greeting() {
        return `Hello ${this.name}, Student PWDK ${this.schoolAddress!}`;
    }

    public get fullName(): string {
        return `${this.name} ${this.lastName}`;
    }

    public set onlyLastName(name: string){
        this.lastName = name;
    }
} 
const user1 = new UserDeclaration("Andi", "BSD", "Sukamaju");
const user2 = new UserDeclaration ("Budi", "Jakarta");
console.log(user1.greeting());
console.log(user2.greeting());
console.log(user1.fullName);

user2.onlyLastName = "Setiawan";
console.log(user2.fullName);
console.log(user2.greeting());

// Class Expression
const UserExpression = class {
    greeting() {
        console.log("Hello PWDK BSDSUN!");
    }
};

// class Date {
// getMonth() {}
// getDay () {}
// getFullYear (){}
// }

// Contoh static. Biasanya digunakan untuk connect ke database
class DB {
    static #connection = "";

    static #initializeConnection() {
        const randomNUm =  Math.ceil(Math.random() * 100);
        DB.#connection = `New database connection ${randomNUm}`;
    }

    static getConnection() {
        if(!DB.#connection) {
            DB.#initializeConnection();
        }

        return DB.#connection;
    }
}

console.log(DB.getConnection());

// Inheritance
class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    public makeSound = () => {
        console.log("Some generic animal sound!");
    };
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    public makeSound = () => {
        console.log("Woof!, Woof!");
    };
}

const myDog = new Dog("Buddy", "Golden Retriever!");
myDog.makeSound ();
console.log(myDog.breed);
console.log(myDog.name);