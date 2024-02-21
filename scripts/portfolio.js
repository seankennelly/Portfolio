// HEADER ANIMATION
const meImg = document.querySelector("#me-img");
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
const tileIds = ['moonrise', 'web-apps', 'twava', 'macrotech', 'iwc'];

const flip = (obj) => {
  obj.flipButtonArray.forEach(button => {
    button.addEventListener('click', () => {
      obj.tile.classList.toggle('flip-container');
    });
  });
};

tileIds.forEach(id => {
  const obj = {
    tile: document.getElementById(`${id}-tile`),
    flipButtonArray: document.getElementById(`${id}-tile`).querySelectorAll('.flip-button'),
  };
  flip(obj);
});