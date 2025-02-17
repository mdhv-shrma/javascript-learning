//functions
function sayHello(name){
    return `Hello ${name}`;
}
console.log(sayHello("madhav"));

//arrow fxn
const sayName = (name) => {
    return `Hello mr ${name}`;
}

const add = (a,b) => a+b;

console.log(sayName("madhav"));

//anonymous fxn
const greet = function(name){
    return `hello ji ${name}`;
}

//IIFE
// (function(){
//     console.log("hello ji");
// })();

//array
const fruits = ["mango", "apple"];
const vegetables = [];
const arr = new Array()  //not preffered coz creates confusion and inconsistent behaviour

fruits.push("banana") //can pass multiple arguments also
//console.log(fruits)
fruits.pop()
//console.log(fruits)
//slice
fruits.slice(1,2); //(initial index, last index)

//splice
const games = ["cricket", "football", "foosball", "tt", "hockey", "chess", "carrom", "karate"];
//array.splice(startIndex, deleteCount, item1, item2, ...)
const removed = games.splice(1,2,"chess");
console.log(removed);
console.log(games);

//shift  removes first element
games.shift()

//unshift    add elements to beginning
games.unshift("horse riding", "polo")

//map fxn      does not modify original array, 
const nums = [1,2,3,4,5,6];
const modifiedNums = nums.map((num)=>num*2);
console.log(modifiedNums);

//filter      creates new arr on the basis of given condition
const doubleDigit = modifiedNums.filter((num)=>num>10);

//reduce
const sum = nums.reduce((acc, num) => acc + num, 0);

//flatmap    flat+map
const pair = nums.flatMap(num => [num,num*2]);

//find method
const firstEven = nums.find(num => num % 2 === 0);


//shallow copy      creates reference to that object
const original = {
    name: "madhav",
    details: {
      age: 20,
      city: "Noida"
    }
  };

const shallowcopy = {...original};
shallowcopy.details.age = 21;
console.log(original)
console.log(original.details)

//higher order fxns
//1. fxn as argument
function greet(name, formatter) {
    return formatter(name);
}

function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(greet("Madhav", toUpperCase));

//2 fxn as return value
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); //it remembers factor due to closure property


//foreach loop
const arr1 = [1, 2, 3, 4];

arr1.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});




