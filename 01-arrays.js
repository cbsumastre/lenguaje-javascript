const myArray = [1, 2, 3, 4, 5];

/**
* Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */
const head = (array) => {
    const [first] = array;
    return first;
};

console.log(head(myArray)); // <-- 1

/**
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */
const tail = (array) => {
    const [,...others] = array;
    return others;
}; 
console.log(tail(myArray)); // <-- [2, 3, 4, 5]

/**
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */
const init = (array) => {
    return array.slice(0,array.length-1)
};
console.log(init(myArray)); // <-- [1, 2, 3, 4]

/**
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */
const last = (array) => {
    return array.slice(-1)[0];
}; 
console.log(last(myArray)); // <-- 5


