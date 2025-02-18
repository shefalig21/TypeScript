// var a=10;
// console.warn(a);

// let a=10;
// console.warn(a);

// let a:number=10;
// console.warn(a);

// let a:string=10;
// console.warn(a);

// let a:string="brosky";
// console.warn(a);

// let a:number=20;
// console.warn(a);

// let a1:number=0.05;
// console.warn(a1);

// // let x:boolean="hello";
// // console.warn(x);

// let x1:boolean=true;
// console.warn(x1);

// export {}
// class App{
//     test(){
//         console.warn("Hello brosky");
//     }
// }

// let a1=new App();
// a1.test();


//Data Types in typescript:
//1. Number
//This type is used to represent numerical values, both integers and floating-point numbers.

let age: number = 25;
let pi: number = 3.14159;
console.log(age);
console.log(pi);
console.log("");

//2. String
//This type represents textual data. You can use single or double quotes to define strings.
let names: string = "Alice";
let greeting: string = 'Hello, world!';
console.log(names);
console.log(greeting);
console.log("");

//3. Boolean
//This type is used for true/false values.
let isCompleted: boolean = true;
let isLoggedIn: boolean = false;
console.log(isCompleted);
console.log(isLoggedIn);
console.log("");

//4. Array
//Arrays can hold multiple values of a specific type. You can define arrays in two ways: using the type followed by square brackets or using the Array<type> syntax.
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "cherry"];
console.log(numbers);
console.log(fruits);
console.log("");

//5. Tuple
//Tuples allow you to express an array with a fixed number of elements whose types are known.
let person10: [string, number];
person10 = ["Alice", 25]; // Correct
// person10 = [25, "Alice"]; // Error
console.log(person10 );
console.log("");

//6. Enum
//Enums allow you to define a set of named constants.
enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Green;

//7. Any
//The any type is a powerful way to store values that can be of any type. However, it's often best to avoid using any as it defeats the purpose of TypeScript's static typing.
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue );
console.log("");

//8. Void
//The void type is used for functions that do not return a value.
function greet10(): void {
  console.log("Hello, world!");
}
console.log(greet10());
console.log("");

//9. Null and Undefined
//These types represent the absence of a value.
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(nullValue);
console.log(undefinedValue);
console.log("");

//10. Object
//The object type represents non-primitive types.
let person11: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
console.log(person11.name);
console.log(person11.age);
console.log("");

//OR
//let personName = person.name; // "Alice"
//let personAge = person.age;   // 25
//console.log(personName); // Output: Alice
//console.log(personAge);  // Output: 25

//Varibales:
//variables can be declared using the var, let, and const keywords. Each has its own scope rules and use cases.

//1. . var Keyword
//Variables declared with var are function-scoped. They can be re-declared and updated within the same scope.

function example11() {
    var message = "Hello, TypeScript!";
    if (true) {
      var message = "Hello, World!";
      console.log(message); //Hello, World!
    }
    console.log(message); //Hello, World!
  }
  
  example11();
 
//2. let Keyword
//Variables declared with let are block-scoped, meaning they are only accessible within the nearest enclosing block.

function example() {
    let message = "Hello, TypeScript!";
    if (true) {
      let message = "Hello, World!";
      console.log(message); // Hello, World!
    }
    console.log(message); //Hello, TypeScript!
  }
  
  example();

//3. const Keyword
//Variables declared with const are also block-scoped and must be initialized at the time of declaration. They cannot be reassigned after their initial assignment.

const message = "Hello, TypeScript!";
console.log(message); // Hello, TypeScript!

// message = "Hello, World!"; // Error: Assignment to constant variable.


//var: Function-scoped.
//let: Block-scoped.
//const: Block-scoped and read-only.

//***
//Read-Only: Once a variable is declared and assigned a value using const, it cannot be reassigned to a new value. The variable becomes read-only. Note that this does not mean the value itself is immutable—if the value is an object or an array, its properties or elements can still be modified.

//Mutable Objects with const
//If you use const with objects or arrays, you can still change the contents of the object or array, but you cannot reassign the variable to a completely new object or array.

//Example with Object:

const person12 = { name: "Alice", age: 25 };
person12.name = "Bob"; // This is allowed
console.log(person12); //{ name: "Bob", age: 25 }

// person12 = { name: "Charlie", age: 30 }; // Error: Assignment to constant variable.

//Example with Array:

const numbers12 = [1, 2, 3];
numbers12.push(4); // This is allowed
console.log(numbers12); // Output: [1, 2, 3, 4]

// numbers12 = [5, 6, 7]; // Error: Assignment to constant variable.
//In summary, const ensures that the variable binding itself is constant, meaning the variable cannot be reassigned. 
//However, the contents of the variable can still be modified if it holds a reference to an object or an array.



//** Tuples in typescript:
//A tuple in TypeScript is a special type of array with fixed length and specific types for each element. 
//Unlike normal arrays, where all elements have the same type, tuples allow different data types for different positions.

//Why Use Tuples?
//Type Safety: Ensures a specific order and type of elements.
//Better Readability: Clearly defines the structure of the data.
//Useful in APIs: Often used to return multiple values of different types.


//ex:

let user4:[string,number]=["alice",44];
console.log(user4[0]);
console.log("");  
console.log(user4[1]);
console.log("");

//ex:
let user5:[string,number,boolean];
user5=['bob',30,true];
console.log(user5);  //valid
//user5=['bob',true,45];   //not valid(bcoz order and types must match)
console.log("");

//ex:
let employee: [number, string] = [101, "John"];
//accessing values
console.log(employee[0]);
console.log("");
console.log(employee[1]); 
console.log("");
//updating values
employee[1] = "Doe"; 
console.log(employee); 
console.log("");

//ex:
//Tuple with push() and pop()
//TypeScript allows pushing elements into tuples, but it doesn’t check length constraints.

let myTuple: [string, number] = ["Alice", 25];
myTuple.push(30); 
console.log(myTuple);
console.log("");
//Warning: TypeScript doesn’t strictly prevent adding extra elements after initialization.

//ex: tuple with concat():
let tuple1: [number, string] = [1, "hello"];
let tuple2: [boolean, string] = [true, "world"];
//let result = tuple1.concat(tuple2);
//console.log(result);         //TypeScript loses the tuple behavior after concatenation
//instaed,we can do:
let result:[number,string,boolean,string]=[...tuple1,...tuple2];
console.log(result);
console.log("");

//ex:tuple with rest parameters
 let scores:[string,...number[]];
 scores=["aliceee",65,12,88,11];
 console.log(scores);
 console.log("");

 //ex:Destructuring a Tuple
//Extract values from a tuple using destructuring
// let User1:[string,number]=['Shefaliii',22];

// let [name,age]=User1;
// console.log(name);
// console.log("");
// console.log(age);
// console.log("");

//ex: Using Tuples in Functions
//(a) Returning Multiple Values

function getUser5(): [string, number] {
    return ["Alice", 25];
  }
  
  let user9 = getUser5();
  console.log(user9[0]);
  console.log("");
  console.log(user9[1]); 
  console.log("");
  

//(b )Tuple as Function Parameter
function displayUser1(user8:[string,number])
{
    console.log(`Name: ${user8[0]}, Age:${user8[1]}`)
}

displayUser1(["bobby",11]);
console.log("");

//** Functions:
//A function in TypeScript is a block of reusable code that performs a specific task. Functions allow you to organize code, avoid repetition, and improve maintainability.

//ex: Basic Function:

function greet(name:string):string{
    return `Hello, ${name}!!`;
}

console.log(greet("Shefaliii"));
console.log("");

//ex: function with optional parameter:
// ( Use ? to make a parameter optional. )
// optional parameters allow us to define function parameters that may or may not be provided when calling the function. These parameters are denoted by a ? after the parameter name.

function greet1(name:string, age?:number):string{
    return age?`Hello, ${name}.You are ${age} years old.`:`Hello, ${name}.`;

}

console.log(greet1("Shefaliiiiii"));
console.log("");
console.log((greet1("Shefuu",23)));
console.log("");

//ex:  Function with Default Parameters
//If no argument is provided, the default value is used.

function greet2(name:string="Guest"):string{
    return `Heello, ${name}!`;
}

console.log(greet2());
console.log("");
console.log(greet2("Sheffff"));
console.log("");

//ex: function with multiple parameter
function add(a:number, b:number):number{
    return a+b;
}

console.log(add(5,3));
console.log("");

//ex: Arrow Functions (Shorter Syntax)
const multiply=(a:number, b:number):number=>a*b;
console.log(multiply(3,4));
console.log("");

//ex: Function with Rest Parameters
//Use ... to accept multiple arguments as an array.

function sum(...numbers:number[]):number{
    return numbers.reduce((total,num)=>total+num,0);

}
console.log(sum(1,2,3,4));
console.log("");

//ex: Function with an Interface (Type Safety)
interface Per{
    name:string;
    age:number;
}

function introduce(pers:Per):string{
    return `I'm {pers.name} and I'm ${pers.age} years old`;
}

console.log(introduce({name:"Rahul",age:30}));
console.log("");

//ex:  Function Overloading
//Allows multiple function signatures.

function getInfo1(id:number):string;
function getInfo1(name:string):string;
function getInfo1(value:number|string):string{
    if(typeof value==="number")
    {
        return `Fetching details for ID: ${value}`;
    }
    else{
        return `Fetching details for Name:${value}`;
    }
}

console.log(getInfo1(101));   // Output: Fetching details for ID: 101
console.log("");
console.log(getInfo1("Rahulll"));   // Output: Fetching details for Name: Rahulll
console.log("");

//*** Objects in typescript

//In TypeScript, we can create objects using various approaches:

// Using Object Literals
// Using Classes
// Using Interfaces
// Using Constructor Functions

//1. using object literals:
//An object literal is a simple way to create an object with properties and methods.
//Object literals allow us to dynamically update, delete, and add properties.

//ex: basic example:

let person={
    name:"Alice",
    age:25,
    greet:function(){
        return `Hello, my name is ${this.name};`
    },
}

//adding new property
//person.city="New York";
//updating new property
person.age=26;

console.log(person.greet());
console.log("");
//delete a property
// delete person.age;
console.log(person);
console.log("");

//It will give error if wasn't initially defined(means agar joh type voh by default utha rha hain usse alag value lo)
//person.city=100;       //error bcoz by default city is string and we are assigning number which is not possible
console.log(person);
console.log("");

//So,we should use index signatures(that is define type)

let person2: { name: string; age: number; [key: string]: any } = {
    name: 'cassy',
    age: 30,
};

person2.country = "USA"; //No error due to [key: string]: any
console.log(person2);
console.log("");


//2. Using classes:

class Car{
    model:string;
    year:number;
    color?:string;  //optional property

    constructor(model:string,year:number)
    {
        this.model=model;
        this.year=year;
    }
}

let myCar=new Car("Toyota",2005);
console.log(myCar);
//updating an exisiting property
myCar.year=2012;
// Adding a new property (only if it's predefined in the class)
myCar.color='red'
// Deleting a property (Not allowed directly, but we can set it to undefined)
myCar.color=undefined;

console.log("");
console.log(myCar);
console.log("");


// 3. using Interfaces:
//Interfaces define a strict object structure, so you cannot add or delete properties dynamically unless you use an index signature.

//ex: basic example
interface userTyped{
    name:string,
    age:number,
    address:string,
}

let users:userTyped={
    name:'shefali',
    age:21,
    address:"USA"

}

console.warn(users);
console.log("");

//another example: basic example2

interface Animal1{
    name:string;
    sound:string;
    makeSound():string,
}
// Creating an object that follows the Animal interface
let cat:Animal1={
    name:"Betty",
    sound:"Meoww",
    makeSound(){
        return `${this.name} says ${this.sound}`
    },
}

console.log(cat.makeSound());
console.log("");

//ex: perfoming opeartions on object
// interface Animal{
//     name:string;
//     sound:string;
//     [key:string]:any;   //allows adding new property
// }

// let dog:Animal={
//     name:"Buddy",
//     sound:"Woof",
// };

// //adding new property
// dog.age=5;
// //updating an exisiting property
// dog.sound="Bark";
// //deleting a property
// delete dog.sound;

// console.log(dog);
// console.log("");

//4. Constructor Function:
//A constructor function is another way to create objects dynamically.
//Constructor functions allow adding, updating, and deleting properties dynamically.

//ex: basic example

function Student(name:string,age:number)
{
    this.name=name;
    this.age=age;
    this.getInfo=function()
    {
        return `${this.name} is ${this.age} years old`

    };
}
// Using `new` to create an object
let student1=new (Student as any)("John",20);
console.log(student1.getInfo());
console.log("");

//ex: performing operations on it

function Stud(name:string,age:number)
{
    this.name=name;
    this.age=age;
}

let stu2=new (Stud as any)("Betty",22);    //as any tells TypeScript to ignore type checking for Stud.

//adding new property
stu2.grade="A";
//updating new property
stu2.age=19;
//delete a property
delete stu2.grade;
console.log(stu2);
console.log("");

//** Union types in typescript:
//Union( OR ): In TypeScript, a union type allows a variable to hold values of multiple types. It is defined using the | (pipe) operator.
//(Union types are used when a value can be more than a single type.)

//Why Use Union Types?
//Flexibility: Allows variables to accept multiple types.
//Type Safety: Ensures that only the specified types are used.
//API Responses – When an API might return different types of data.
//Event Handling – When handling events with different data formats.
//Flexible Object Structures – When an object can have multiple possible shapes

//1. using union type in variable:
// let user1:string='shefali';
// user1=22;        //not allowed(error)
// console.log(user1);
// console.log("");

//we can do:
let user2:string|number="shafu";
user2=25;    //allowed
console.log(user2);
console.log("");

//if want the varible to have 3 type of data:string,number and boolean
let user3:string|number|boolean='hahhahha';
user3=11;
user3=true;
console.log(user3);
console.log("");

//2. using union types in fucntion parameters

function display(id:string|number)
{
    console.log("ID:",id);
}
display(101);   //allowed
display("A123");  //allowed
display("ShafU46");  //allowed
// display(true);      not allowed
console.log("");

//3. using union types in function return types:
function getData(input:boolean):string|number{
    return input? "Hello":11;
}
console.log(getData(true));
console.log(getData(false));
console.log("");

//4. using union types in objects:
//type User and type Admin are custom types (also known as type aliases) that define the structure of an object.

type User={
    id:number;
    name:string;
}

type Admin={
    id:number;
    role:string,
}

let pers: User | Admin;

pers={id:1,name:"Aly"};
console.log(pers);
console.log("");

pers={id:2,role:"admin"};
console.log(pers);
console.log("");


//or can use it in function:

function printPerson(person: User | Admin) {
    console.log("ID:", person.id);
  
    if ("name" in person) {
      console.log("User Name:", person.name);
    }
  
    if ("role" in person) {
      console.log("Admin Role:", person.role);
    }
  }
  
  printPerson({ id: 1, name: "Alice" });  
  console.log("");
  printPerson({ id: 2, role: "Admin" }); 
  console.log("");

//5. using union types in array:
let mixedArray: (string|number)[]=['shafy',33,"heyy","xyz34",81];
console.log(mixedArray);
console.log("");


//** Interface:
//(TypeScript interfaces define the structure of objects by specifying property types and method signatures, ensuring consistent shapes and enhancing code clarity.)
//An interface in TypeScript is a structure that defines the shape of an object, specifying which properties and methods an object should have. It provides type-checking without enforcing implementation, making it useful for defining contracts in code.

//Why Use Interfaces?
//Type Safety: Ensures objects adhere to a specific structure, reducing runtime errors.
//Code Readability: Provides clear expectations for object shapes.

//ex: implementing interface with object:

interface Person {   // interface
    name: string;
    age: number;
    //greet(): string;   //method
}

let users7: Person = {    //object
    name: "Sanyam",
    age: 21,
    greet: () => {
        return "Hello, my name is Sanyam";
    }
};

console.log(users7);
console.log("");
console.log(users7.greet());
console.log("");


//** Class:
//A class in TypeScript is a blueprint for creating objects. It defines properties and methods that an object should have, enabling object-oriented programming (OOP) concepts like encapsulation, inheritance, and polymorphism.

//Why Use Classes?
//Encapsulation: Organize code into reusable units.
//Reusability: Create multiple objects from the same blueprint.
//Inheritance: Share behavior between different objects (using extends).
//Polymorphism: Override methods for different implementations.
//Type Safety: Ensures objects follow a specific structure.

//When to Use Classes?
//When you need to create multiple objects with the same structure and behavior.
//When working with object-oriented patterns such as inheritance.
//When organizing complex business logic in a structured way.
//When defining models for API responses, database entities, etc.

//ex: declaring a basic class:

class Person{
    //(in vue angular class name is same as file name)
    name:string;
    age:number

constructor(name:string,age:number)   //constructor
{
    this.name=name;
    this.age=age;
}

greet(): void{
    console.log(`Heello, my nameis ${this.name} and I am ${this.age} years old`) 
}

}

const p1=new Person("Jass",34);
p1.greet();
console.log("");

//The Person class has two properties: name and age.
//The constructor initializes these properties when creating an object.
//The greet() method prints a message.

//The greet() method is defined outside the constructor because:
//The constructor is only used for initializing object properties.
//Methods (like greet()) define behaviors for the object and should be separate from property initialization.
//Keeping methods outside the constructor helps avoid redundant code when multiple objects of the same class are created.

//void is a return type that means this method does not return a value.
//Methods in TypeScript can return different types (e.g., string, number, boolean), but when a function only performs an action and does not return anything, we use void.

//ex: Class with Access Modifiers
//Access modifiers control visibility of class properties and methods.

class Car1{
    public brand:string;     // Accessible everywhere
    private engine:string;   // Accessible only within the class
    protected speed:number;  // Accessible in class and subclasses

    constructor(brand:string,engine:string,speed:number)
    {
        this.brand=brand;
        this.engine=engine;
        this.speed=speed;
    }

    public showDetails():void{
        console.log(`Brand: ${this.brand}, Engine: ${this.engine} ,speed: ${this.speed}`);
    }
}

const car=new Car1("Suzuki","V8",200);
car.showDetails();
console.log(car.brand);
//console.log(car.engine);    Error: Property 'engine' is private
//console.log(car.speed);     Error: Property 'speed' is protected
console.log("");

//ex: Class Inheritance (Extending a Class)

class Animal{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }

    makeSound():void{
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal{
    constructor(name:string)
    {
        super(name);  //calls parent constructor
    }

    makeSound():void{
        console.log("Woof! Woof!");
    }
}

const dog1=new Dog("Budyyyyyyy");
dog1.makeSound();    // Output: Woof! Woof!
console.log("");

//extends is used for inheritance (to create a child class from a parent class).
//super() calls the parent class constructor to initialize properties.
//Method overriding allows child classes to modify inherited behavior.

//ex: Implementing Interfaces in a Class
interface Shape{
    area():number;
}

class Rectangle implements Shape{
    width:number;
    height:number;

    constructor(width:number,height:number)
    {
        this.width=width;
        this.height=height;
    }

    area(): number{
        return this.width*this.height;
    }
}

const react=new Rectangle(10,5);
console.log(react.area());
console.log("");

//The Rectangle class implements the Shape interface, ensuring it has an area() method.

//ex: Using Static Properties and Methods
 class MathUtils{
    static PI: number=3.14;

    static circleArea(radius:number):number{
        return this.PI*radius*radius;
    }
 }

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.circleArea(5)); // Output: 78.5
console.log("");

//It does not need an instance to be used, thanks to the static keyword.
//Static properties and methods belong to the class itself, not instances of the class.
//They can be accessed directly using the class name (MathUtils.PI), without creating an object.
//This is useful for utility functions like mathematical operations.

//Why Use static?
//1. No Need for Object Creation:
//Saves memory and improves performance.
//2. Shared Data & Methods:
//All instances share the same static properties/methods.
//Prevents unnecessary duplication.
//3. Common in Utility Functions:
//Used in helper classes (e.g., Math, Date, String).
//Example: Math.random() in JavaScript is static.


//ex: Using Getters and Setters:

class Student1{
    private _grade:number;

    constructor(grade:number)
    {
        this._grade=grade;
    }

    get grade():number{
        return this._grade;
    }

    set grade(value:number)
    {
        if(value<0 || value>100)
        {
            console.log("Invalid grade");
        }
        else{
            this._grade=value;
        }
    }
}

const stu=new Student1(85);
console.log(stu.grade);   // Output: 85
stu.grade=93;    // Sets new grade from 
console.log(stu.grade);     // Output: 93
stu.grade=-5;  // Output: Invalid grade


//( You can still define and access private properties without the underscore. )

//The _grade property is marked private, meaning it cannot be accessed directly from outside the class.
//When student.grade is accessed, it calls get grade(), which returns _grade.
//set: Allows controlled modification of _grade.

//Why Use Getters and Setters?
//Encapsulation (Data Hiding): 
//1. Prevents direct modification of _grade.
//2. Ensures controlled access via get and set

//Getters (get) → Allow reading private properties.
//Setters (set) → Allow controlled modification with validation.

//Why use private?
//1. Prevents direct modification of the property.
//2. Ensures controlled access through getter and setter methods.

//Why Use Getter and Setter Methods in TypeScript?
//Getters and setters in TypeScript (and in programming in general) are used to provide controlled access to class properties.
//Rather than exposing a property directly, getters and setters allow you to encapsulate how a property is accessed or modified. 
//This approach enhances data integrity, flexibility, and maintainability of your code.

//1. Encapsulation and Data Hiding:
//Encapsulation is a core principle of object-oriented programming (OOP). It involves hiding the internal details of an object and only exposing certain methods or properties to interact with that object.
//Private Fields: Getters and setters help protect internal properties of a class by making them private. They allow controlled access to the private fields.

//2. Validation
//Setters allow you to validate data before it’s assigned to a property. This is particularly useful when there are specific constraints on the values a property can hold (like a valid age range or ensuring a name isn't empty).
//With setters, you can validate the input before accepting it, ensuring that only valid data gets assigned to your class properties.

//3. Read-Only or Write-Only Properties
//You can define read-only or write-only properties using only getters or setters. 
//This means you can control how a property is accessed or modified without exposing both read and write functionality.

//**  Inheritance:
//Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class. 
//In TypeScript, inheritance is used to create a hierarchy where one class (the child class) inherits the functionality of another class (the parent class)

//Why Use Inheritance?
//Code Reusability – Allows the child class to reuse methods and properties from the parent class.
//Maintainability – Reduces code duplication and makes updates easier. Changes in the parent class can automatically reflect in child classes.
//Extensibility – Child classes can extend the functionality of parent classes by adding new methods or overriding inherited methods.
//Organization – Inheritance helps to organize code into logical hierarchies that are easier to understand.

//When to Use Inheritance?
//When a child class has a specialized version of behavior that is already defined in the parent class.
//When there are common properties and methods shared across multiple classes, but some classes need to customize them.
//When you want to use polymorphism, allowing objects of different subclasses to be treated as objects of the parent class.

//ex: Basic Inheritance:
//In TypeScript, inheritance is implemented using the extends keyword. A child class inherits all public and protected members (methods and properties) of a parent class.

class Animal2{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }
    speak()
    {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog1 extends Animal2{
    breed:string;

    constructor(name:string,breed:string)
    {
        super(name);    // Call the parent class constructor
        this.breed=breed;
    }

    speak()
    {
        console.log(`${this.name} barks`);
    }
}

const dog2=new Dog1("Buddy","Golden Retriver");
dog2.speak();     // Output: Buddy barks
console.log("");

//ex: Constructor Inheritance:
//The super() function is used to call the constructor of the parent class from the child class.

class Pers2{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }
}

class Employee extends Pers2{
    position:string;

    constructor(name:string,position:string)
    {
        super(name);
        this.position=position;
    }

    getDetails()
    {
        console.log(`${this.name} is a ${this.position}`);
    }
}

const emp=new Employee("Shefuddi","Developer");
emp.getDetails();  // Output: Shefuddiis a Developer
console.log("");

//ex: access modifier in inheritance

class Vehicle{
    public brand:string;
    private model:string;
    protected year:number;

    constructor(brand:string,model:string,year:number)
    {
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
}

class Car4 extends Vehicle{
    displayInfo()
    {
        console.log(`Brand: ${this.brand},Year:${this.year}`);
        // console.log(this.model); // Error: Property 'model' is private

    }
}
const car5=new Car4("Toyota", "Corolla", 2020);
car5.displayInfo();  // Output: Brand: Toyota, Year: 2020
console.log("");

//ex: Method Overriding:
//The child class can override a method from the parent class to provide its own implementation.

class Shape{
    area():number{
        return 0;
    }
}

class Rectangle1 extends Shape{
    width:number;
    height:number;

    constructor(width:number,height:number)
    {
        super();
        this.width=width;
        this.height=height;
    }

    //Overriding the area method:
    area():number{
        return this.width*this.height;
    }
}

const rect1=new Rectangle1(10,20);
console.log(rect1.area());   //200
console.log("");

//ex: Polymorphism in Inheritance:
//Polymorphism allows you to call the same method on different types of objects and get different behaviors.

class Shape2{
    draw()
    {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape2{
    draw()
    {
        console.log("Drwaing a circle")
    }
}

class Square extends Shape2{
    draw()
    {
        console.log("Drawing a square");
    }
}

const shapes: Shape2[]=[new Circle(),new Square()];
shapes.forEach(shape=>shape.draw());
console.log("");


//Generics:
//Generics in TypeScript allow you to create reusable and flexible code by enabling functions, classes, and interfaces to work with multiple data types while maintaining type safety.

//Why Use Generics?
//Code Reusability – Write functions, classes, or interfaces that work with different types without rewriting them.
//Type Safety – Ensures the correct type is used throughout your code, preventing runtime errors.
//Flexibility – Allows you to work with various data types without losing the benefits of TypeScript’s strong typing.

//ex: Generics with function:
//Instead of using any, generics allow functions to handle different types safely.
//<T> is a generic type parameter that can be replaced with any type.
//The function returns the same type it receives.

function users15<T>(value: T):T
{
    return value;
}

console.log(users15<string>("Hellooooo"));
console.log(users15<number>(44));
console.log("");


//ex: Generics with classes:
//Generics can be used in classes to define flexible data structures.

class Box<T>{
    private content: T;

    constructor(value:T)
    {
        this.content=value;
    }

    getValue():T{
        return this.content;
    }
}

const stringBox=new Box<string>("Heyyysss");
console.log(stringBox.getValue());


const numberBox=new Box<number>(11);
console.log(numberBox.getValue());
console.log("");

//ex: Generics with interfaces:
//Generics allow interfaces to define flexible data models.

interface Pairs<T,U>   //interface
{
    first:T;
    second:U;
}

const pair:Pairs<string,number>={ first:"sheffu",second:22};
console.log(pair);
console.log("");

//ex: generics with constraints:
//Sometimes, you want to restrict the types a generic can accept.

function getLength<T extends { length: number }>(item:T):number{
    return item.length;
}
console.log(getLength("Hello"));
console.log(getLength([1,2,3,4]));
//console.log(getLength(100));     Error: number doesn't have 'length' property
console.log("");


//<T extends { length: number }> ensures that only types with a length property can be used.
//function uses generics and constraints to ensure that the function only accepts values that have a .length property.
//Type Constraint (T extends { length: number }):
//This restricts T to only types that have a length property of type number.
//This means only strings, arrays, or objects with a .length property can be passed.
//The number 100 does not have a .length property, so TypeScript throws an error.

//When to Use Generics?
//When creating reusable components (e.g., functions, classes, or interfaces).
//When working with collections (arrays, lists, trees, etc.).
//When you need type safety while allowing flexibility.
//When writing utility functions that should work with multiple types.


//enum:
//An enum (short for "enumeration") in TypeScript is a special data type that allows you to define a set of named constants. Enums improve code readability, maintainability, and type safety.

enum Direction{
    Up,
    Down,
    Left,
    Right
}

// let dir:Direction=Direction.Up;
//let dir:Direction=Direction.Left;
let dir=1;
console.log(dir);
// Auto-incrementing numbers start from 0, unless manually set.

enum Days{
    mon=15,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
}

let day:Days=Days.wed;
console.log(day);
console.log("");

//ex: Custom Numeric Values
enum Status{
    active=2,
    pending=5,
    fullfilled=10,
}

console.log(Status.pending);
console.log("");

//ex: String enums
//You can assign string values instead of numbers.
enum Colors{
    red="Red",
    blue="Blue",
    green="Green",
}
let color11:Colors=Colors.blue;
console.log(color11);
console.log("");

//ex: Heterogeneous Enums (Mixing String & Number)
//Though possible, this is not recommended as it can reduce clarity.
enum mixType{
    yes="YES",
    no=0,
}
console.log(mixType.yes);
console.log(mixType.no);
console.log("");

//ex: enum with function:

enum Role{
    Admin,
    Guest,
    User
}

function checkAccess(role:Role)
{
    if(role===Role.Admin)
    {
        console.log("Access Granted");
    }
    else{
        console.log("Access Denied");
    }
}

console.log(Role.Admin);
console.log(Role.User);
console.log("");

//ex:
enum Colors{
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
function getColorName(color: Colors): string {
    return color;
}

console.log(getColorName(Colors.Red));
console.log("");

//ex: Reverse Mapping (Only for Numeric Enums)
//TypeScript allows accessing both name → value and value → name.

enum Day{
    mon=1,
    tue,
    wed,
}
console.log(Day.mon);
console.log(Day[1]);
console.log("");

