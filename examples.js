import { printOut } from "./src/demo_api.js";

// *******************
// Printing out values
// *******************

// 1. print
printOut("Hello World!");
// 2. alert
alert("Hello World!");

// **********
// Variables
// **********
// 0. Variables: can be boolean (true or false)
let awake = true;
let wantBath = false;
printOut(awake);

// 1. Variables: can be numbers
let x = 1;
let y = 2;
let z = x + y; // 3
printOut(z);

// 2. Variables: can be text! (strings)
let dogName = "Spot";
printOut(dogName);

// **********
// Functions
// **********
// given X do Y
function bark() {
  alert("WOOF!");
}
bark();

// pass values in get values out
function getMonthsFromYears(years) {
  return years * 12;
}
let months = getMonthsFromYears(2);
printOut(months); // 24

// 3. Variables: can be a collection of things!
// 3a. Array (list): an group of things in an specific order
let myDay = [
  "wake up",
  "eat",
  "BARK AT THE MAIL MAN",
  "nap",
  "PLAY!",
  "eat",
  "BARK AT THE TV",
  "sleep"
];
printOut(myDay[1]);

// 3b. Object: a group of things accessed by a "key"
let myMeals = {
  breakfast: "dog food",
  lunch: "Dad's socks",
  dinner: "dog food",
  dessert: "Trash can buffet"
};
printOut(myMeals.lunch);

// **********************
// Conditional statements
// **********************
if (z > 1) {
  printOut("WOOF!");
} else {
  printOut("grr....");
}
