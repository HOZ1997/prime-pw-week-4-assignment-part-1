console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}

hello ();

//Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log ('Test -', hello ())


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log ('Hello', name)
  return;
}


// Remember to call the function to test
helloName ( 'Christy !');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondnumber) {
  console.log (' Add two numbers', firstNumber, secondnumber);
  let amount = firstNumber + secondnumber;
  console.log ('amount', amount);
  // return firstNumber + secondNumber;
  return amount;
}
addNumbers (1,4);

// 4. Function to multiply three numbers & return the result

function multiplyThree( num0, num1, num2 ){
let answer = (num0 * num1 * num2);
console.log ('answer', answer);
return answer; 

}

multiplyThree (3,4, 5)

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    console.log ('true', number)
    return true;
  }
   else { 
     console.log ('false', number)
  return false;
   }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log ('If number is positive 3 =' , isPositive (3));
console.log( 'isPositive - should say false', isPositive(0) );
console.log (' If number is zero = ', isPositive (0));
console.log( 'isPositive - should say false', isPositive(-3) );
console.log (' If number is negative 3 = ', isPositive (-3));



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
// numbers to choose from 
let numbers = [1 , 2];

// get the last number from the array
  function getLast (array) {

    console.log('Array last item', array [1]);



  }
getLast (numbers);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

 

function find (value, array  ){

 
for ( let i=0; i<array.length; i++ ){
// i<2 can be array.length 
console.log ('this numbers loop', array );
if ( value === array[i]) { 
return true; 
}
}
return false; 

}
console.log ('found number', find ( 3, numbers ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



// 9. Function to return the sum of all numbers in an array


function sumAll( addingNumbers) {

let sum = 0
 
  // TODO: loop to add items
for (i = 0; i<addingNumbers.length; i++) {
  sum+= addingNumbers[i];
//

}
return sum;

}

  console.log ('sum all', sumAll(numbers));
  


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let myArray = [1, 2 ];
function allPostive (myArray){
 
 if (myArray > 0) {
 console.log ('num', myArray );
return true;  
}
else {

console.log ('empty arryay',[]); 
return false;  

}
}

allPostive (myArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
