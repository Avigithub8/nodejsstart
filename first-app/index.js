
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
  

