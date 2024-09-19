const memes = [
  {
    "name": "first",
    "img": "./memesCollection/firstMeme.jpg",
    "text": "It happend to everyone..."
  },
  {
    "name": "second",
    "img": "./memesCollection/secondMeme.jpg",
    "text": "Best job for me!"
  },
  {
    "name": "third",
    "img": "./memesCollection/thirdMeme.jpg",
    "text": "Typical everyday life"
  },
  {
    "name": "fourth",
    "img": "./memesCollection/fourthMeme.jpg",
    "text": "Grandfather decided to share"
  },
  {
    "name": "fifth",
    "img": "./memesCollection/fifthMeme.jpg",
    "text": "Not funny meme("
  }
];

/**
 * Current meme
 * @type {number}
 */
let currentMeme;


function makeSlideImg(meme) {
  let newSlide = document.createElement("div");
  newSlide.className = 'slidePicture';

  let slideImg = document.createElement("img");
  slideImg.src = meme.img;

  newSlide.appendChild(slideImg);

  return newSlide;
}

function makeSlideText(meme) {
  let newText = document.createElement("div");
  newText.className = "slideText";

  let text = document.createElement("p");
  text.className = ".slideText p";
  text.textContent = meme.text;

  newText.appendChild(text);

  return newText;
}

function makeSlideButton(memeNum) {
  let button = document.createElement('button');
  button.className = 'button';

  button.addEventListener('click', () => {
    setSlideCard(memeNum);
    button.classList.add('active');
  });

  return button;
}

const RIGHT = '+';
const LEFT = '-';
function setSlideCard(memeNum) {

  let meme = memes[memeNum];

  let slideContainer = document.querySelector('.slide-container');
  let textContainer = document.querySelector('.textContainer');

  const img = makeSlideImg(meme);
  const text = makeSlideText(meme);

  let fromDirection = memeNum < currentMeme ? LEFT : RIGHT;
  const animation = [`translateX(${fromDirection}100%)`, 'translateX(0%)'];
  [img, text].forEach(el => {
    el.animate(
      {
        transform: animation,
      }, 1000);
  });

  let prevImg = slideContainer.querySelector('img');
  let prevText = textContainer.querySelector('.slideText p');

  if (prevImg && prevText) {
    let toDirection = memeNum < currentMeme ? RIGHT : LEFT;
    const animations = [prevImg, prevText].map(el => el.animate({
      transform: ['translateX(0%)', `translateX(${toDirection}100%)`],
    }, 1000));


    animations.map(el => el.addEventListener("finish", (event) => {
      prevText.remove();
      prevImg.remove();
    }));
  }

  slideContainer.append(img);
  textContainer.append(text);

  let notActive = document.querySelectorAll('button.active').forEach((element) => {
    element.classList.remove('active');
  });

  currentMeme = memeNum;

  return;
}

document.addEventListener('DOMContentLoaded', () => {
  // План

  // шаг 1 закинуть все мемы в контейнер c классом next
  // шаг 2 сделать чтобы кнопка первого мема подсвечивалась и первый мем было видно
  // шаг 3 
  let slidePicture = document.createElement('div');
  slidePicture.className = "slidePicture";

  currentMeme = 0;

  let actionButtons = [];
  for (let i = 0; i < memes.length; i++) {
    actionButtons.push(makeSlideButton(i));
  }
  document.querySelector('.actionButtons').append(...actionButtons);

  setSlideCard(0);
  actionButtons[0].classList.add('active');
});