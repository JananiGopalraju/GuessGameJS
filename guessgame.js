function guessGame() {
    let randomNr = Math.floor(Math.random() * 11);
    let guess;
  
    do {
      guess = prompt("Guess a number between 1 to 10");
      console.log(randomNr, guess);
  
      if (guess > randomNr) {
        console.log("Guess is high");
      } else if (guess < randomNr) {
        console.log("Guess is low");
      }
    }
    while (guess != randomNr); 
    // here while means when
      
    { 
        console.log("You won");
      }
}
  
  guessGame();6




  // for (let name of names) {
//   console.log(names.indexOf(name));
// }

// for each can be used to loop through an array only.

// names.forEach(function(name, index){

//   console.log(name, index)
// })

// const names = ["John", "Paul", "George", "ringo", "ram", "shyam"];

// for (let name of names) {
//   if (name === "ringo") {
//     console.log("hellllooo");
//     break;
//   }
//   console.log(name);
// }

// const user = {
//   name: "John",
//   age: 30,
//   job: "web dev",
//   city: "chennai",
// };


// for (let key in user) {
//   console.log(user[key]);
// }





// Global scope
// let food = "apple";
// let fruits = 5;

// var x = 3;

// function store() {
//   // Block scope
//   let food = "banana";
//   let fruits = 50;
//   var x = 12;
//   console.log(food, fruits, x);
// }

// store();

// console.log(food, fruits);

// for (var x = 0; x <= 10; x++) {
//   // block scope
//   console.log(x);
// }

// store();

// console.log("global scope", x);

// Global scope

// let food = "apple";
// let fruits = 50;
// var x = 5;

// Block scope

// if (true) {
//   let food = "pine";
//   var x = 40;
// }

// x = 400;

// console.log(food, x);

// let food = "apple";
// let fruits = 50;

// function store() {
  // food = "kiwi";

//   food = "kiwi";

//   if (true) {
//     console.log(food);
//   }
// }

// store();
