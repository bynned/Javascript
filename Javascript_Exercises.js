// TASK 1


function task1 (min, max) {
let x = Math.floor(Math.random() * (max - min) ) + min;
let y = Math.floor(Math.random() * (max - min) ) + min;
// Using if/else if statement to compare the two variables
  if (x < y) {
    console.log(x + " Is less than " + y);
  } else if (x > y) {
    console.log(x + " Is greater than " + y);
  } else {
    console.log(x + " Is equal to " + y);
  }

}

console.log(task1(1, 10)); // Calling the function to print the result


// TASK 2


function task2(min, max) {
for(i=min; i<=max; i++){
  if(i % 2 == 0){ // This is to check for even numbers using for loop
    console.log(i);
  }
} for (i=min; i<=max; i++) {
  if(i % 2 != 0){ // This is to check odd numbers using for loop
    console.log(i);
  }
}
}
console.log(task2(3, 7)); // Printing the function : first number is min and
                          // second number is max


// TASK 3

function task3(min, max){
  let numbers = [];

  for(i=min; i<=max; i++){
    if(i % 2 == 0){ // This is to check for even numbers using for loop
        numbers.push(i); //pushing the result to array
      }
    }
    for (i=min; i<=max; i++) {
      if(i % 2 != 0){ // This is to check odd numbers using for loop
        numbers.push(i); //pushing the result to array
      }
    }
    return numbers; // returning the array
}

console.log(task3(3, 7)); // Printing the function as min = 3 max = 7


// TASK 4

function task4(testString) {
      testString = testString.toLowerCase(); // This converts all the characters to lowercase letters.
      return testString == testString.split('').reverse().join(''); // Split() for separating the string into sub strings.
    }                                                     // reverse() method reverses the string.
                                                          // Join() method joins all elements.
														  
    if(task4('RACecar')) { // !!HERE WE CAN CHANGE THE STRING TO BE CHECKED FOR PALINDROME!!
        console.log('Palindrome');
    } else {
        console.log('Not Palindrome');
    }
