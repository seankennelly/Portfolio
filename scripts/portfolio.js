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