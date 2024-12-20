console.log("************** DELIVERABLE 03 *********************");

const user = {
    id: 1,
    name: 'Carlos',
    roles: ['ADMIN', 'SUPERVISOR']
}

console.log("User ", user);


/**
 * Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
 **/

function clone(source) {
    return { ...source }
}

const newUser = clone(user);
console.log("newUser", newUser);
newUser.age = 48;
console.log(newUser, user, "User no ha cambiado, se mantiene inmutable");


/**
 * Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target 
 * y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
 */

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(a, b);

function merge(source, target) {
    return {
        ...clone(target),
        ...clone(source)
    }
}

console.log("Merge", merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}