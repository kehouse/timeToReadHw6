

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
   callback(array[i]);
};
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sum = 0
    for(var i = 0; i < args.length; i++) {
      sum = sum += args[i];
      }
        console.log(sum);
        return sum;
      }

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

//this said that the assertion failed but the answer is 5, which is correct

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sum = 0
    for(var i = 0; i < args.length; i++) {
      sum = sum += args[i];
      }
        console.log(sum/args.length);
        return sum;
      }
      }

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
var sortedNames = names.sort();
console.log(names);

console.assert(names[4] === "Shannon");

// .concat()

var numbers = [1, 2, 3, 4, 5];
var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];

var numbersNames = numbers.concat(names);

console.log(numbersNames);

console.assert(numbersNames[5] === "Kathleen");

// .indexOf()

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
var indexNames = names.indexOf("Perrin");

console.assert(indexNames === 3);

// .split()

//says myString is not a function

var myString = "Hi my name is Kathleen"
console.log(myString);

var splitNames = myString.split("m");

console.assert(splitNames === "Kathleen,Ginnie,Shannon,Perrin,Halley");

// .join()

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
var joinNames = names.join(".");

console.assert(joinNames === "Kathleen.Ginnie.Shannon.Perrin.Halley");

// .pop()

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
var popNames = names.pop();

console.assert(popNames === "Halley");

// .push()

//this says Assertion failed

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
var pushNames = names.push('Sarah', 'Lena');

console.assert(pushNames === 6);

// .slice()

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
console.log(names);
var sliceNames = names.slice(0, 3);

console.assert(sliceNames[0] === "Kathleen");

// .splice()

//Assertion failed

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
console.log(names);
var spliceNames = names.splice(4, 0, 'Lena');

console.assert(spliceNames[4] === "Lena");

// .shift()

//Assertion failed

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
console.log(names);
names.shift();

console.assert(names[0] === "Kathleen");

// .unshift()

var names = ['Kathleen', 'Ginnie', 'Shannon', 'Perrin', 'Halley'];
console.log(names);
names.unshift('Lena');

console.assert(names[0] === "Lena");

// .filter()



// .map()
