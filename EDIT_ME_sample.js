import {
  setTitle,
  setBackground,
  addPuppy,
  makeThePuppyDance
} from "./src/demo_api.js";

let name = "Amy";
let color = "azure";
setTitle(name);
setBackground(color);
addPuppy("Frenchie", "Stuff You Should Gnaw", 1);
addPuppy("Puggy", "The Barkfast Club", 1);
addPuppy("Puggers", "How Stuff Barks", 2);
addPuppy("Labby", "Pup and Vanished", 4);
makeThePuppyDance("Frenchie");
makeThePuppyDance("Puggy");
makeThePuppyDance("Puggers");
makeThePuppyDance("Labby");
