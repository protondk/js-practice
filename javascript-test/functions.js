var nombre = prompt("What is your name?");
var lastName = prompt("What is your last name?");
var nickname = prompt("What do you like to be called?");

function studentName(nombre, lastName, nickname) {
  let fullName = nombre + " " + lastName;
  let result = (`My name is ${fullName}, but I prefer to be called ${nickname}.`);
  return result;
}

result = studentName(nombre, lastName, nickname);
document.write(result);

