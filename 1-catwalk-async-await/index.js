'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const WALKING_CAT_URL = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPosition = startPos;

    const WalkInterval = setInterval(() => {
      currentPosition += STEP_SIZE_PX;
      img.style.left = currentPosition + 'px';

      if (currentPosition >= stopPos) {
        clearInterval(WalkInterval);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const originalSrc = WALKING_CAT_URL;
    img.src = DANCING_CAT_URL;

    setTimeout(() => {
      img.src = originalSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  async function animateCat() {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
    animateCat();
  }

  await animateCat();

}

catWalk();
window.addEventListener('load', catWalk);

//Answer: In this case, I feel that both this version and the one from last week are easy to read, 
//(It's true that we save on arrow functions, but even that part I feel was useful to clarity.)
// and the use of "then" in this version might be a little clearer for me. Both versions are equally efficient. 
//Async/await works similarly to promises, so this method doesn't block other functions from running, which is a fundamental feature of promises.

//However, I understand that the objective of these new methods is to make the code clearer, 
// so I suppose that the difference is almost imperceptible, at least for me, in this scenario.