/* It's selecting the elements from the DOM. */
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");

/* It's adding an event listener to the button, so when the button is clicked, the function btnOnClick
is executed. */
form.addEventListener("submit", sumImputValues);

/**
 * When the button is clicked, the value of the first input is added to the value of the second input
 * and the result is displayed in the paragraph.
 */
function sumImputValues(event) {
  console.log({ event });
  event.preventDefault();
  const sumInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumInputs;
}
