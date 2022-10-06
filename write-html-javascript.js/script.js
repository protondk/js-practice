/* It's selecting the elements from the DOM. */
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

/* It's logging the value of the input. */
console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

/* It's changing the content of the h1 element. */
// h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";

/* It's getting the value of the attribute `pantalla` from the element `h1`. */
console.log(h1.getAttribute("class"));

/* It's changing the value of the attribute `class` from the element `h1`. */
h1.setAttribute("class", "red");

/* It's adding the class `yellow` to the element `h1`. */
h1.classList.add("yellow");

/* It's removing the class `red` from the element `h1`. */
h1.classList.remove("red");

input.value = "crayoli";

const img = document.createElement("img");
img.setAttribute("src", "https://static.platzi.com/media/platzi-isotipo@2x.png");

console.log(img);

/* It's removing the content of the element `pid`. */
pid.innerHTML = "";

/* It's adding the element `img` to the element `pid`. */
pid.append(img);