console.log("script is working");
("use strict");

const colorBtn = document.getElementById("color");
const shapeBtn = document.getElementById("shape");
const outerCircle = document.querySelector(".circle");
const innerShape = document.querySelector(".shape0");

const getRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 4);
  return randomNum;
};

colorBtn.addEventListener("click", () => {
  let randomNum = getRandomNum();
  console.log(randomNum);
  outerCircle.classList.remove("color1");
  outerCircle.classList.remove("color2");
  outerCircle.classList.remove("color3");
  outerCircle.classList.remove("color0");
  outerCircle.classList.add(`color${randomNum}`);
});

shapeBtn.addEventListener("click", () => {
  let randomNum = getRandomNum();
  console.log(randomNum);
  innerShape.classList.remove("shape1");
  innerShape.classList.remove("shape2");
  innerShape.classList.remove("shape3");
  innerShape.classList.remove("shape0");
  innerShape.classList.add(`shape${randomNum}`);
});
