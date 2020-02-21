// You are in the wrong place
// please leave.
// woof.

// list of functions
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
  const puppyPicture = `./images/puppy-${i++ % 4}.jpg`;
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
