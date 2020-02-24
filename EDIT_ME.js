// You are in the right place
import {
  setTitle,
  setBackground,
  addPuppy,
  makeThePuppyDance,
  printOut,
  theGrandFinale
} from "./src/demo_api.js";
// Your code goes below here!

// ***************************
// Set variable value
// ***************************
let dogName = "";
setTitle(dogName);

// ***************************
// Fill in function definition
// ***************************
function getDogYears(humanYears) {
  //FILL IN!
}
let dogAge = getDogYears(2);
printOut(dogAge);

// ***************************
// Try calling other functions, like
// setBackground, addPuppy, and makeThePuppyDance
// See EDIT_ME_sample.js for examples
// ***************************
theGrandFinale();

// let name = "Amy";
let color = "azure";
setTitle("Amy");
setBackground(color);
addPuppy("Frenchie", "Stuff You Should Gnaw", 1);
addPuppy("Puggy", "The Barkfast Club", 1);
addPuppy("Puggers", "How Stuff Barks", 2);
addPuppy("Labby", "Pup and Vanished", 4);
makeThePuppyDance("Frenchie");
makeThePuppyDance("Puggy");
makeThePuppyDance("Puggers");
makeThePuppyDance("Labby");
