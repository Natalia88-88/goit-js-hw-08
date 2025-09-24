function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});

btn.style.backgroundColor = "#4e75ff";
btn.style.borderRadius = "8px";
btn.style.padding = "8px 16px";
btn.style.hight = "40px";
btn.style.width = "148px";
btn.style.border = "none";
btn.style.fontFamily = `"Montserrat", sans - serif`;
btn.style.fontWeight = "500px";
btn.style.fontSize = "16px";
btn.style.color = "#fff";
btn.style.lineHigth = "1.5";
btn.style.letterSpacing = "0.04em";
