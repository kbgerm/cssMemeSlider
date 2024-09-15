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

// let slideContainer = document.querySelector('.slide-container');
// let textContainer = document.querySelector('.textContainer');

/**
 * Current meme
 * @type {number}
 */
let currentMeme;

// let slidePicture = document.querySelector('.slidePicture');


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
    setSlideCard(memes[memeNum]);
    button.classList.add('active');
  });

  return button;
}

// TODO accept meme index instead of meme object so that we know which direction to slide
function setSlideCard(meme) {
  let slideContainer = document.querySelector('.slide-container');
  let textContainer = document.querySelector('.textContainer');

  const img = makeSlideImg(meme);
  const text = makeSlideText(meme);

  // TODO replace with animation with a bunch of sliders

  img.animate(
    {
      transform: ["translateX(100%)", "translateX(0%)"],
    }, 1000);

    text.animate(
      {
        transform: ["translateX(100%)", "translateX(0%)"],
      }, 1000);

  slideContainer.replaceChildren(img);
  textContainer.replaceChildren(text);

  let notActive = document.querySelectorAll('button.active').forEach((element) => {
    element.classList.remove('active');
  });

  return;
}

let secondSlideImg;
let secondSlideText;
let prevSlideImg;
let prevSlideText;

let nextSlideImg;
let nextSlideText;

document.addEventListener('DOMContentLoaded', () => {
  // План

  // шаг 1 закинуть все мемы в контейнер c классом next
  // шаг 2 сделать чтобы кнопка первого мема подсвечивалась и первый мем было видно
  // шаг 3 
  let slidePicture = document.createElement('div');
  slidePicture.className = "slidePicture";


  let actionButtons = [];
  for (let i = 0; i < 5; i++) {
    actionButtons.push(makeSlideButton(i));
  }
  document.querySelector('.actionButtons').append(...actionButtons);

  setSlideCard(memes[0]);
  actionButtons[0].classList.add('active');
});