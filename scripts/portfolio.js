// HEADER ANIMATION
const meImg = document.querySelector("#me-img");
// Function passes 4 animations to header pic in a loop
let animationIndex = 0;
const animate = () => {
  // Removes existing animation class, cycles through animations in array, then resets array index back to 0 after fourth click
  meImg.classList.remove('animate__backInLeft');
  const animationArray = ['animate__bounce', 'animate__pulse', 'animate__headShake', 'animate__flip'];
  let chosenAnimation = animationArray[animationIndex];
  meImg.classList.add(chosenAnimation);
  animationIndex++;
  setTimeout(() => {
    meImg.classList.remove(chosenAnimation);
  }, 1000);
  if (animationIndex === 4) {
    animationIndex = 0;
  };
}
meImg.addEventListener('click', animate);


// TILE FLIP ANIMATION
const moonriseObj = {
  tile: document.getElementById('moonrise-tile'),
  flipButtonArray: document.getElementById('moonrise-tile').querySelectorAll('.flip-button'),
};
const rockPaperScissorsObj = {
  tile: document.getElementById('rock-paper-scissors-tile'),
  flipButtonArray: document.getElementById('rock-paper-scissors-tile').querySelectorAll('.flip-button')
};
const twavaObj = {
  tile: document.getElementById('twava-tile'),
  flipButtonArray: document.getElementById('twava-tile').querySelectorAll('.flip-button')
};
const macrotechObj = {
  tile: document.getElementById('macrotech-tile'),
  flipButtonArray: document.getElementById('macrotech-tile').querySelectorAll('.flip-button')
};
const sbtbObj = {
  tile: document.getElementById('sbtb-tile'),
  flipButtonArray: document.getElementById('sbtb-tile').querySelectorAll('.flip-button')
};
const iwcObj = {
  tile: document.getElementById('iwc-tile'),
  flipButtonArray: document.getElementById('iwc-tile').querySelectorAll('.flip-button')
};


const flip = (obj) => {
  obj.flipButtonArray.forEach(function (button) {
    button.addEventListener('click', () => {
      obj.tile.classList.toggle('flip-container');
    });
  });
};

flip(moonriseObj);
flip(rockPaperScissorsObj);
flip(twavaObj);
flip(macrotechObj);
flip(sbtbObj);
flip(iwcObj);