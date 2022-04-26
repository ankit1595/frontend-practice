"use strict";

let toggleOn = true;

const toggleBtnContainer = document.querySelector(".btn-container");
const allElements = document.querySelectorAll("*");

toggleBtnContainer.addEventListener("click", toggleEventHandler);

function toggleEventHandler() {
  toggleOn = !toggleOn;

  allElements.forEach((ele) => {
    if (toggleOn) {
      ele.classList.remove("dark-on");
      return;
    }
    ele.classList.add("dark-on");
  });
}
