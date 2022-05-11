//Typescript types:
//Primitives: numbers, strings, boolenas
//More complex types: arrays, objects
//Function types, parameters

//PRIMITIVES: numbers, strings and booleans

let age: number; //in lower case!
age = 12;

let username: string;

username= 'Teodora'

let isSoftwareEngineer: boolean;

isSoftwareEngineer= true;

// MORE COMPLEX TYPES: arrays and objects

let hobbies: string[]; //let hobbies be array of strings

hobbies = ['Sports', 'Cooking', 'Music'];

//Typescript will let you do the below, because if you don't set a type, 
//it assigns a default type of any. Type of any will allow you to assign any type to a value. 

let person;

person = {
    name: 'Max',
    age: 32
}

// In the below, we are defining the types of an object: 
//a member is a type of object and each feature of this object is given a certain type. 
let member: {
    name: string;
    age: number;
};

member = {
    name: 'Max',
    age: 32
}

//Defining an array of objects: 
//Here we define people as type of array of objects, and give the features of those objects certain types. 

let people: {
    name: string;
    age: number;
}[];

people = [
    {
        name: 'Amanda',
        age: 38
    },
    {
        name: 'Lilian',
        age: 23
    }
]


//Type inference 

//If you give a variable a value of certain type, 
//then Typescript will expect that variable to always have a value of this type. 

//Use this type inference, don't clutter your code by specifying types if you don't need to! 

let course = 'React - The Complete Guide'; 

course = 'completed';



//UNION TYPES - when you want to allow more than one type for a variable


let udemycourse: string | number = 'React- the Complete Guide'; 

udemycourse = 12341; 

udemycourse = 'Learn Typescript'

// TYPE ALIASES - a way to define types once and be able to reuse them: 

//Create the alias Student which defines Student as type of objects, 
//and defines the types of its features
type Student = {
    name: string;
    age: number;
}


//Here we define students to be of type of array of the alias Student
let students: Student[];

students = [
    {
        name: 'Ina',
        age: 34
    },
    {
        name: 'Craig',
        age: 32
    }
]

// FUNCTIONS AND TYPES


// function add(a: number, b: number): number {
//     return a + b;
// }

//you can also not specify the type of the value it will return, because typescript infers it: 
function add(a: number, b: number) {
    return a + b;
}

//VOID TYPE

//Typescript has the void type for when a fucntion does not need to return a specific value. 

function print(value: any) {
    console.log(value);
}

//GENERICS

//This generic type (usually assigned as 'T') defines that 
//the fucntion can take a value of any type, 
//but that value has to match the type of the values in the array.

function insertAtBeginning <T> (array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

//here typescript accepts it because -1 is a number like the values in demoArray
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'r');