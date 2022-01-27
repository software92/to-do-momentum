const backImgs = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg"];
const chosenImg = `imgs/${
  backImgs[Math.floor(Math.random() * backImgs.length)]
}`;

const body = document.querySelector("body");
const backImg = document.createElement("img");

backImg.src = chosenImg;
body.append(backImg);
