// You are in the wrong place
// please leave.
// woof.
import $ from "jquery";
import { raptorize } from "../lib/jquery.raptorize.1.0";
import { marqueeify } from "../lib/marqueeify";
import { startConfetti } from "../lib/confetti.js";
marqueeify($, window);
raptorize($);
// list of functions
export function printOut(str) {
  console.log(str);
}
export function setTitle(name) {
  if (name) {
    document.getElementById("title").innerHTML = `${name}'s Puppy Podcasters`;
  }
}

export function setBackground(color) {
  document.body.style.backgroundColor = color;
}
let i = 0;
export function addPuppy(name, podcast, age) {
  const puppyId = i++ % 8;
  const puppyPicture = `./images/puppy-${puppyId}.jpg`;

  const puppy = document.createElement("div");
  puppy.className = "puppy-podcaster-item card";
  puppy.id = name;
  puppy.innerHTML = `
  <img src="${puppyPicture}" id="${name}-picture" class="puppy-image" />
  <div>
    <h3>${name}</h3>
    <p>
      <span class="puppy-card-title">Podcast:</span> ${podcast}<br />
      <span class="puppy-card-title">Age:</span> ${age} (${Number(age) *
    7} in dog years)
    </p>
  </div>
`;
  document.getElementById("puppy-party").appendChild(puppy);
}

export function makeThePuppyDance(name) {
  const puppyPicture = document.getElementById(`${name}-picture`);
  if (!puppyPicture) {
    return;
  }
  puppyPicture.className = "puppy-image dance";
}

function addLogo() {
  const dvd = document.createElement("img");
  dvd.className = "dvd-logo";
  dvd.src = './images/mf.jpg';
  $("body").append(dvd);
  $(".dvd-logo").marqueeify({ speed: 300 });
}

export function theGrandFinale() {
  for (i = 0; i < 60; i++) {
    const puppyId = (i) % 4 + 4; // mf dogs are from 4-7
    $("body").raptorize({
      image: `./images/puppy-${puppyId}.jpg`,
      id: `dog-output-${i}`,
      delayTime: i * 1000
    });
  }
  addLogo();
  startConfetti();
}
