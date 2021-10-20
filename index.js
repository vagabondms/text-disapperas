const textInput = document.querySelector(".text-input");
const textDisplay = document.querySelector(".text-display");

let timer;

textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const newText = document.createElement("span");
    newText.classList.add("text");
    newText.textContent = " " + e.target.value;
    textDisplay.appendChild(newText);
    e.target.value = "";
    if (timer) {
      clearTimeout(timer);
      console.log("cleared");
    }
    timer = setTimeout(() => {
      textDisplay.innerHTML = "";
    }, 4000);
  }
});
