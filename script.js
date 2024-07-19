const container = document.querySelector(".container");

function createDiv(number) {
  while (number > 0) {
    const div = document.createElement("div");
    div.className = "innerDiv";
    div.addEventListener("mouseenter", () => {
      div.classList.add("active");
    });
    container.appendChild(div);
    number--;
  }
}

createDiv(256);
