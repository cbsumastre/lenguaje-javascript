console.log("************** DELIVERABLE 02 *********************");

const myArray1 = ['A', 'E', 'I', 'O', 'U'];
const myArray2 = ['a', 'e', 'i', 'o', 'u'];
const myArray3 = [true, false, 'boolean', 'false', 'TODO'];
const myArray4 = [1.0, 2.0, 3.0, 4.0, 5.5, 100];

console.log("Arrays ", myArray1, myArray2, myArray3, myArray4);


/**
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 **/

const concat = (array1, array2) => {
    return [...array1, ...array2];

};

console.log("myArray1 + myArray2", concat(myArray1, myArray2))

/**Opcional
Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.*/
const multipleConcat = (...arrays) => {
    if (arrays && arrays.length > 0) {
        return arrays.flat()
    }
    return []
};

console.log("multipleConcat", multipleConcat(myArray1, myArray2, myArray3, myArray4))