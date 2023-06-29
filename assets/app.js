import { valida } from "./formulario.js";

const inputs = document.querySelectorAll("input");
const inputs2 = document.querySelectorAll("input2");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

inputs2.forEach((input2) => {
    input.addEventListener("blur", (input2) => {
      valida(input2.target);
    });
});