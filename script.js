const container = document.querySelector(".container");

function createDiv(number) {
  const squaresPerSide = Math.sqrt(number);
  const squareSize = 960 / squaresPerSide;

  while (number > 0) {
    const div = document.createElement("div");
    div.className = "innerDiv";
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.addEventListener("mouseenter", () => {
      if (div.classList.contains("active")) return;
      div.style.backgroundColor = randomRgb();
      div.classList.add("active");
    });
    container.appendChild(div);
    number--;
  }
}

function removeDiv() {
  const selectAll = document.querySelectorAll(".innerDiv");
  selectAll.forEach((item) => item.remove());
}

function randomRgb() {
  let randomRed = Math.floor(Math.random() * 256);
  let randomGreen = Math.floor(Math.random() * 256);
  let randomBlue = Math.floor(Math.random() * 256);
  let randomRgb = `rgb(${randomRed},${randomGreen},${randomBlue})`;
  return randomRgb;
}

const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", () => {
  removeDiv();
  let inputValue = input.value;
  input.value = "";
  if (inputValue > 100) return alert("lower than 100!");
  createDiv(Math.pow(inputValue, 2));
});

createDiv(256);
