// const person = {
//     firstName: 'Sanjeev',
//     lastName: 'Sharma',
//     age: 22,
//     getIntro: function() {
//        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
//     }
//   }
  
//   person.getIntro(); // "Sanjeev Sharma is 22 years old."
  
//   function randomFunc() {
//     console.log(this);
//   }
  
//   randomFunc(); // window object


// function personIntro() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
  
// const person1 = {
//     firstName: 'Sanjeev',
//     lastName: 'Sharma'
// };
  
// personIntro(); // Output 1: undefined undefined
  
// personIntro.call(person1); // Output 2: Sanjeev Sharma
  
// personIntro.call({ firstName : 'Harry', lastName : 'Potter' }); // Output 3: Harry Potter

// Concatinate an array to another array
let arr = ['Ram', 'Lakshman', 'Bharat' ]
let arr1 = [1, 3 ,5, 7]
// Just concatinate this array
console.log(arr.concat(arr1)); 

const arr2 = arr.push.apply(arr1, arr)
console.log(arr2);