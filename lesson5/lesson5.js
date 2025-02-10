// Number
let n = 123;
n = 12.345;

//Biglnt

console.log(9007199254740991 +1);
console.log(9007199254740991 +2);

const bigInt = 1234567890123456789012345678901234567890n;

// String

let str = "Hello";
let str2 = 'Single quotes are Ok too';
let phrase = `can embed another ${str}`;

let name = "John";

alert(`hello, ${name}!`);

// Embed an expression
alert(`The result, ${1 + 2}`);



//Boolean
let isGreater = 4 > 1;
alert(isGreater);


// Null 
let age = null;


// Undefined
let surname;
alert(surname);

let years = 2;

years = undefined;
alert(years);

//Objects et symboles

// Typeof Operator
typeof undefined //"undefined"
typeof 0 // "number"
typeof 10n // "bigInt"
typeof true // "Boolean"
typeof "foo" // "string"
typeof Symbol("id") //"string"

typeof Math // "Object"
typeof null // "object"
typeof alert // "function"