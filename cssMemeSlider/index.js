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
let slideContainer = document.querySelector('.slide-container');
let textContainer = document.querySelector('.textContainer');

function findMeme(numeral) {
  let meme = memes.find(function isFirst(memeName) {
    return memeName.name === numeral;
  });
  return meme;
}

function makeSlide(meme) {
  let newSlide = document.createElement("div");
  newSlide.className = "slidePicture";

  let slideImg = document.createElement("img");
  slideImg.src = meme.img;

  let newText = document.createElement("div");
  newText.className = "slideText";

  let text = document.createElement("p");
  text.className = ".slideText p";
  text.textContent = meme.text;

  newSlide.appendChild(slideImg);
  newText.appendChild(text);
  slideContainer.append(newSlide);
  textContainer.append(newText);

  return newSlide, newText;
}


document.addEventListener('DOMContentLoaded', () => {
  firstButton.classList.add('active');
  makeSlide(findMeme('first'));
});