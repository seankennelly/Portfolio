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
const moonriseInfo = document.getElementById('moonrise-info');
const moonriseTile = document.getElementById('moonrise-tile');
const moonriseBack = document.getElementById('moonrise-back');

const moonriseObj = 
  {
    info: moonriseInfo,
    tile: moonriseTile,
    back: moonriseBack
  }
;

const flip = (obj) => { 
  obj.tile.classList.toggle('flip-container') 
};

moonriseObj.info.addEventListener('click', () => {
  flip(moonriseObj);
});

moonriseObj.back.addEventListener('click', () => {
  flip(moonriseObj);
});