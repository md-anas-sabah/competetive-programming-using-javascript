// 1. **Simple Mapping - Capitalize Names**
// Given an array of names, use `map` to return a new array where every name is capitalized.

// Input: ['alice', 'bob']
// Output: ['Alice', 'Bob']

let names = ["alice", "bob"];
let capitalizedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1)
);
// console.log(capitalizedNames);

// -----------------------------------------------------------------------------------------------------------

// 2. **Filtering - Even Numbers**
//Given an array of numbers, use `filter` to return a new array containing only even numbers.
// Input: [1, 2, 3, 4, 5]
// Output: [2, 4]

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 == 0);
// console.log(evenNumbers);

// -------------------------------------------------------------------------------------------------------------

// 3. **Basic Reduce - Sum of Numbers**
// Given an array of numbers, use `reduce` to find their sum.

// Input: [1, 2, 3, 4]
// Output: 10

let numberToBeAdded = [1, 2, 3, 4];
let sum = numberToBeAdded.reduce((curr, acc) => curr + acc);
// console.log(sum);

//---------------------------------------------------------------------------------------------------------------

// 4. **Map + Filter - Capitalize and Filter**

//Given an array of strings, use `map` to capitalize each string and then `filter` out any that do not start with the letter 'A'.
// Input: ['apple', 'banana', 'avocado']
// Output: ['Apple', 'Avocado']

let string1 = ["apple", "banana", "avocado"];
let outputString1 = string1
  .map((str) => str[0].toUpperCase() + str.slice(1))
  .filter((str) => str[0] === "A");
// console.log(outputString1);

// ----------------------------------------------------------------------------------------------------------------

// 5. **Map + Reduce - String Lengths**
// Given an array of words, use `map` to obtain an array of word lengths, and then use `reduce` to get the average word length.
// Input: ['apple', 'banana', 'cherry']
// Output: 5.33 (because (5+6+6)/3 = 5.33)

let string2 = ["apple", "banana", "cherry"];

let outputString2 =
  string2
    .map((str) => str.length)
    .reduce((curr, acc) => {
      return curr + acc;
    }, 0) / string2.length;

// console.log(outputString2);

//  -------------------------------------------------------------------------------------------

// 6. **Filter + Reduce - Oldest Person**
//Given an array of objects representing people with a `name` and `age` property, first, filter out anyone younger than 18, and then use `reduce` to find the oldest person's name.

// Input: [
//   { name: "Alice", age: 15 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 22 },
// ];

// Output: "Charlie";

const arrayOfObj = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 22 },
];

const output = arrayOfObj
  .filter((person) => person.age > 18)
  .reduce((curr, acc) => {
    if (curr.age > acc.age) {
      return curr.name;
    } else {
      return acc.name;
    }
  });
// console.log(output);

// ------------------------------------------------------------------------------------------------------------------
// 7. **Map + Filter + Reduce - Compound Problem**

//     Given an array of products with properties `name`, `price`, and `quantity`, use:

//     - `filter` to keep products that have more than 10 items in quantity.
//     - `map` to get an array of product prices.
//     - `reduce` to get the total cost of all the products.

// Input: [
//     {name: 'Apple', price: 0.5, quantity: 15},
//     {name: 'Banana', price: 0.25, quantity: 5},
//     {name: 'Cherry', price: 1, quantity: 12}
//     ]
//     Output: 10.5 (because 0.5*15 + 1*12 = 19.5)

const quantity = [
  { name: "Apple", price: 0.5, quantity: 15 },
  { name: "Banana", price: 0.25, quantity: 5 },
  { name: "Cherry", price: 1, quantity: 12 },
];

let quantityOutput = quantity
  .filter((qn) => qn.quantity > 10)
  .map((qn) => qn.price * qn.quantity)
  .reduce((curr, acc) => curr + acc);

// console.log(quantityOutput);

//  -------------------------------------------------------------------------------------------------------------------------

// 8. **Chaining with Custom Callbacks**

//Given an array of numbers, write a function using `filter`, `map`, and `reduce` such that you first filter out non-prime numbers, then square each remaining number, and finally, sum all the squared values.

// Input: [2, 3, 4, 5]
// Output: 38 (because 2^2 + 3^2 + 5^2 = 4 + 9 + 25 = 38)

const arrayInp = [2, 3, 4, 5];
const arrayOpt = arrayInp
  .filter((num) => (num / 1) & (num % num === 0))
  .map((num) => num * num)
  .reduce((curr, acc) => curr + acc);

console.log(arrayOpt);
