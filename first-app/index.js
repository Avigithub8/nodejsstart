
// Example : Map Function
const fruits = ['apple','oranges',' ','mango',' ','lemon'];
const result= fruits.map((fruit)=> fruit.trim()===''?'empty string':fruit);
console.log(result);

//Example : modifying the content of the array, not reassigning the variable
const hobbies = ['reading', 'traveling'];
hobbies.push('cooking');
console.log(hobbies); 

////Example : spread operator
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(originalArray); 
console.log(newArray); 

//Example : rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
console.log(sum(1, 2, 3, 4, 5)); 
  

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncFunction = async () => {
  console.log('a');
  console.log('b');

  await delay(3000);
  console.log('c');

  await delay(0);
  console.log('d');

  console.log('e');
};

asyncFunction();
