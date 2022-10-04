let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

let x = 10;

while (x >= 2) {
  console.log("El valor de i es: " + x);
  x--;
}

let answer;

while (answer != "4") {
  let question = prompt("What's 2 + 2?");
  answer = question;
}

if ((answer = "4")) {
  alert("Congrats!");
}
