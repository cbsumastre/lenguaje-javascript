const myArray1 = ['A', 'E', 'I', 'O', 'U'];
const myArray2 = ['a', 'e', 'i', 'o', 'u'];
const myArray3 = [true, false, 'boolean', 'false', 'TODO'];
const myArray4 = [1.0, 2.0, 3.0, 4.0, 5.5, 100];


/**
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 **/

const concat = (array1, array2) => {
    return [...array1, ...array2];

};

console.log(concat(myArray1, myArray2))

/**Opcional
Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.*/
const multipleConcat = (...arrays) => {
    let result = [];
    arrays.forEach(array => result = [...result, ...array])
    return result;
};

console.log(multipleConcat(myArray1, myArray2, myArray3, myArray4))