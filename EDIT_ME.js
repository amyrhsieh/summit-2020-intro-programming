// You are in the right place
import {
  setTitle,
  setBackground,
  addPuppy,
  makeThePuppyDance
} from "./src/demo_api.js";
// your code goes below here!
// 0. variables: can be boolean (the lowest level of logic)
var awake = true;
var wantBath = false;
// 1. variables: can be numbers
var x = 1;
var y = 2;
var z = x + y; // 3!
// 2. variables: can be text! (strings)
var name = "Spot";
// 3. variables: can be a collection of things!
// list: an group of things in an specific order
var myDay = [
  "wake up",
  "eat",
  "BARK AT THE MAIL MAN",
  "nap",
  "PLAY!",
  "eat",
  "BARK AT THE TV",
  "sleep"
];
// 3-1. variables can be a collection of thigns!
// object: a group of things accessed by a "key"
var myMeals = {
  breakfast: "dog food",
  lunch: "Dad's socks",
  dinner: "dog food",
  dessert: "Trash can buffet"
};
// printing out values
// 1. "console"
console.log(z);
// 2. alert!
// alert(z);
// conditional statements
if (z > 1) {
  console.log("WOOF!");
} else {
  console.log("grr....");
}
// Functions!
// given X do Y
function bark() {
  alert("WOOF!");
}
// given X return Y
function calcAgeInDogYears(age) {
  //FILL IN!
  return age * 7;
}
//Time for fun!
setTitle("Amy");
setBackground("cornsilk");
addPuppy("Filthy Dog", "Stuff You Should Gnaw", 2);
addPuppy("Puggy", "stuff", 0.1);
makeThePuppyDance("Filthy Dog");
