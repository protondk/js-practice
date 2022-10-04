/**
 * PrintFirstElementArray takes an array as an argument and prints the first element of that array to
 * the console.
 * @param array - an array of elements
 */

function printFirstElementArray(array) {
  console.log(array[0]);
}

printFirstElementArray(["Juanita", "Rigoberto", "Nathaly"]);

/**
 * For each element in the array, print it to the console.
 * @param array - an array of any type
 */

// We use i < 0 because we want to print the positions of the elements inside the array, so, if the array is 4 elements in length, we will print 0 to 3

function printElementByElement(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/* Creating an object with the properties name, age and favFood. */
const obj1 = {
  name: "Nathaly",
  age: 20,
  favFood: "Pasta",
};

/* Creating a new array with the values of the object obj1. */
const arrayNat = Object.values(obj1);

/**
 * For each element in the array, print it to the console.
 * @param arrayNat - the array of natural numbers
 */
function printElementByElement(arrayNat) {
    for (let i = 0; i < arrayNat.length; i++) {
      console.log(arrayNat[i]);
    }
  }