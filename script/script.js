"use strict;";

const main = document.getElementById("main");
const spinner = document.querySelector(".spinner");
const adviceContainer = document.querySelector(".advice");
const dice = document.querySelector(".advice__dice");
const advice = document.querySelector(".advice__quote");
const adviceNumber = document.querySelector(".advice__number span");

const shuffle = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok)
      throw new Error(`Failed to fetch data error ${response.status} 😌`);

    const data = await response.json();
    adviceNumber.textContent = `# ${data.slip.id}`;
    advice.textContent = data.slip.advice;

    console.log(data.slip.id, data.slip.advice);
  } catch (err) {
    adviceNumber.textContent = "";
    advice.textContent = err;
  }
};

shuffle();

window.addEventListener("load", function () {
  setTimeout(() => {
    spinner.classList.add("hidden");
    adviceContainer.classList.add("visible");
  }, 2500);
});

dice.addEventListener("click", shuffle);
