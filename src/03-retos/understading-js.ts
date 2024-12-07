// Cuestión 1
const x = NaN;
console.log (">>>>>>>>>>>>>>> Cuestión 1");
console.log(x === x); // false


// Cuestión 2
const isNaNValue = (value: (number | undefined) = undefined) => {
    return Number.isNaN(value);
}

console.log (">>>>>>>>>>>>>>> Cuestión 2");
console.log(isNaNValue(NaN)); // true
console.log(isNaNValue()); // false
console.log(isNaNValue(null)); // false
console.log(isNaNValue(123)); // false

// Cuestión 3
const x1=NaN;
console.log (">>>>>>>>>>>>>>> Cuestión 3");
console.log(!isNaNValue(x1) && x1 !== x1); // false
// No, no puede ser nunca true. 
// Para que cumpla la primera parte tiene que ser una valor que no sea NaN 
// y la segunda parte de la condición solo puede ser true cuando x1 es NaN, en otro caso es false.

//Cuestión 4
console.log (">>>>>>>>>>>>>>> Cuestión 4");
const x2 = Infinity;
console.log(x2 + 1 === x2 - 1); // true
// Con cualquier valor real de x2 la igual no se cumple porque al final queda 1 = -1 y esto es falso,
// pero con el valor infinito si se cumple.

//Cuestión 5
console.log (">>>>>>>>>>>>>>> Cuestión 5");
let x3 = null;
x3 = NaN;
// x3 = undefined;
// x3 = null;
// x3 = Infinity;
x3 = -Infinity;
console.log(x3 > x3); // true
// No he encontrado ningún valor que devuelva a la expresión x3 > x3 -> true

