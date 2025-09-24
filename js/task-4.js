const form = document.querySelector(".login-form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.flexWrap = "wrap";
form.style.width = "408px";
form.style.gap = "8px";
form.style.backgroundColor = "#fff";
form.style.color = " #2e2f42";
form.style.fontSize = "16px";
form.style.fontWeight = "400";
form.style.padding = "24px";

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    alert(`All form fields must be filled in`);
  } else {
    const formData = {
      email: event.target.elements.email.value.replace(/\s+/g, ""),
      password: event.target.elements.password.value.replace(/\s+/g, ""),
    };
    console.log(formData);
    event.target.reset();
  }
}

const inputs = document.querySelectorAll(".login-form input");

inputs.forEach((input) => {
  input.style.display = "block";
  input.style.marginTop = "4px";
  input.style.marginBottom = "12px";
  input.style.width = "360px";
  input.style.height = "40px";
  input.style.padding = "8px";
  input.style.border = " 1px solid #808080";
  input.style.borderRadius = "4px";
  input.style.fontSize = "16px";
  input.style.outline = "none";

  input.addEventListener("mouseenter", () => {
    if (document.activeElement !== input) {
      input.style.border = "1px solid #000";
    }
  });

  input.addEventListener("mouseleave", () => {
    if (document.activeElement !== input) {
      input.style.border = "1px solid #808080";
    }
  });

  input.addEventListener("focus", () => {
    input.style.border = "1px solid #808080";
  });

  input.addEventListener("blur", () => {
    input.style.border = "1px solid #808080";
  });
});

const button = document.querySelector('button[type="submit"]');
button.style.width = "86px";
button.style.height = "40px";
button.style.backgroundColor = "#4e75ff";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.cursor = "pointer";
button.style.fontSize = "16px";
button.style.fontWeight = "500";
button.textContent = "Log in";

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "#6c8cff";
});

button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "#4e75ff";
});

button.addEventListener("focus", () => {
  button.style.backgroundColor = "#6c8cff";
});

button.addEventListener("blur", () => {
  button.style.backgroundColor = "#4e75ff";
});
