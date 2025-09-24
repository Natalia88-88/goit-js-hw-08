const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", handlerSubmit);

const nameOutPut = document.querySelector("#name-output");

function handlerSubmit(event) {
  const value = event.target.value.trim();
  console.log(value);

  nameOutPut.textContent = value === "" ? "Anonymous" : value;
}

nameInput.style.width = "360px";
nameInput.style.height = "40px";
nameInput.style.border = "1px solid #808080";
nameInput.style.borderRadius = "4px";
nameInput.style.paddingLeft = "16px";
nameInput.style.fontFamily = `"Montserrat", sans - serif`;
nameInput.style.fontWeight = "400px";
nameInput.style.fontSize = "16px";
nameInput.style.lineHeight = "1.33";

nameInput.addEventListener("focus", () => {
  nameInput.style.border = "1px solid #000";
});

const title = document.querySelector("h1");
title.style.fontFamily = `"Montserrat", sans - serif`;
title.style.fontWeight = "600px";
title.style.fontSize = "24px";
title.style.color = "#2e2f42";
title.style.lineHeight = "1.33";
title.style.letterSpacing = "0.04em";
