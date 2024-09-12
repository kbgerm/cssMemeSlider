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

let firstButton = document.querySelector('.first');
let secondButton = document.querySelector('.second');
let thirdButton = document.querySelector('.third');
let fourthButton = document.querySelector('.fourth');
let fifthButton = document.querySelector('.fifth');
let slideContainer = document.querySelector('.slide-container');
let textContainer = document.querySelector('.textContainer');
let currentSlideImg;
let currentSlideText;

function findMeme(numeral) {
  let meme = memes.find(function isFirst(memeName) {
    return memeName.name === numeral;
  });
  return meme;
}

function makeSlideImg(meme) {
  let newSlide = document.createElement("div");
  newSlide.className = "slidePicture";

  let slideImg = document.createElement("img");
  slideImg.src = meme.img;

  newSlide.appendChild(slideImg);
  slideContainer.append(newSlide);
  
  return newSlide;
}

function makeSlideText(meme) {
  let newText = document.createElement("div");
  newText.className = "slideText";

  let text = document.createElement("p");
  text.className = ".slideText p";
  text.textContent = meme.text;

  newText.appendChild(text);
  textContainer.append(newText);

  return newText;
}


document.addEventListener('DOMContentLoaded', () => {
  firstButton.classList.add('active');
  currentSlideImg = makeSlideImg(findMeme('first'));
  currentSlideText = makeSlideText(findMeme('first'));

  // return [currentSlideText, currentSlideImg];
});

firstButton.addEventListener('click', firstButtonHandler);

function firstButtonHandler() {
  thirdButton.classList.remove('active');
  secondButton.classList.remove('active');
  firstButton.classList.add('active');
  fourthButton.classList.remove('active');
  fifthButton.classList.remove('active');

  currentSlideText.classList.add('prev');
  currentSlideImg.classList.add('prev');

  currentSlideImg.remove();
  currentSlideText.remove();

  currentSlideImg = makeSlideImg(findMeme('first'));
  currentSlideText = makeSlideText(findMeme('first'));
}

secondButton.addEventListener('click', secondButtonHandler);

function secondButtonHandler() {
  firstButton.classList.remove('active');
  secondButton.classList.add('active');

  currentSlideText.classList.add('prev');
  currentSlideImg.classList.add('prev');

  currentSlideImg.remove();
  currentSlideText.remove();

  currentSlideImg = makeSlideImg(findMeme('second'));
  currentSlideText = makeSlideText(findMeme('second'));
}

thirdButton.addEventListener('click', thirdButtonHandler);

function thirdButtonHandler() {
  secondButton.classList.remove('active');
  thirdButton.classList.add('active');

  currentSlideText.classList.add('prev');
  currentSlideImg.classList.add('prev');

  currentSlideImg.remove();
  currentSlideText.remove();

  currentSlideImg = makeSlideImg(findMeme('third'));
  currentSlideText = makeSlideText(findMeme('third'));
}

fourthButton.addEventListener('click', fourthButtonHandler);

function fourthButtonHandler() {
  thirdButton.classList.remove('active');
  secondButton.classList.remove('active');
  firstButton.classList.remove('active');
  fourthButton.classList.add('active');

  currentSlideText.classList.add('prev');
  currentSlideImg.classList.add('prev');

  currentSlideImg.remove();
  currentSlideText.remove();

  currentSlideImg = makeSlideImg(findMeme('fourth'));
  currentSlideText = makeSlideText(findMeme('fourth'));
}

fifthButton.addEventListener('click', fifthButtonHandler);

function fifthButtonHandler() {
  thirdButton.classList.remove('active');
  secondButton.classList.remove('active');
  firstButton.classList.remove('active');
  fourthButton.classList.remove('active');
  fifthButton.classList.add('active');

  currentSlideText.classList.add('prev');
  currentSlideImg.classList.add('prev');

  currentSlideImg.remove();
  currentSlideText.remove();

  currentSlideImg = makeSlideImg(findMeme('fifth'));
  currentSlideText = makeSlideText(findMeme('fifth'));
}
