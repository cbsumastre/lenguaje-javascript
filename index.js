/**********************
    1. Array operations
 *********************/
const head = (array) => {
    const [first] = array
    return first
}

const tail = (array) => {
    const [, ...others] = array
    return others
}

const init = (array) => {
    return array.slice(0, -1);
}

const last = (array) => {
    return array.slice(array.length - 1)
}

// const array = [1, 2, 3, 4, 5];

// let first = head(array);
// console.log(array, first);
// first = 3;
// console.log(array, first);

// let others = tail(array)
// console.log(array, others);
// others.push(3222)
// console.log(array, others);

// const init2 = init(others)
// console.log(others, init2)

// let lastItem = last(others)
// console.log(lastItem, others)
// lastItem = 23;
// console.log(lastItem, others)


/**********************
    2. Concat
 *********************/
const concat = (a, b) => {
    return [...a, ...b]
}

const concatMultiple = (...arrays) => {
    if (arrays && arrays.length > 0) {
        return arrays.flat()
    }
    return []
}

// const array1 = ['a', 'b', 'c']
// const array2 = [{
//     name: 'John',
//     surname: 'Doe',
//     age: 23
// }, {
//     name: 'Jane',
//     surname: 'Doe',
//     age: 32
// }]

// const concatArray=concat(array1,array2)
// console.log(concatArray)
// concatArray[0]='A'
// console.log(concatArray,array1)

const array1 = ['a']
const array2 = [1]
const array3 = [true]
const array4 = [{
    name: 'Peter'
}]

const multiple = concatMultiple(array1, array1, array2, array4)
console.log(multiple)
multiple[0] = 'AA'
console.log(multiple, array1)

console.log(concatMultiple(), concatMultiple(undefined), concatMultiple(null))



/**********************
    3. Clone Merge
 *********************/
function clone(source) {
    return {
        ...source
    }
}

const person1 = {
    name: 'Peter',
    surname: 'Parker',
    age: 23
}

const newPerson = clone(person1)
console.log(newPerson, person1)
newPerson.alias = 'Spiderman'
console.log(newPerson, person1)


const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return {
        ...clone(target),
        ...clone(source)
    }
}

const newObject = merge(a, b)
console.log(newObject)

/**********************
    4. Read Books
 *********************/
function isBookRead(books, titleToSearch) {
    if (books) {
        const i = books.findIndex(b => b.title === titleToSearch)
        if (i >= 0) {
            const book = books[i]
            return book.hasOwnProperty('isRead') && book.isRead
        }
    }
    return false
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación"));// true
console.log(isBookRead(books, "Canción de hielo y fuego"));// false
console.log(isBookRead(books, "Los Pilares de la Tierra"));// false

// Opcional <- Falta hacerlo en Typescript


/**********************
    5. Slot Machine
 *********************/

class SlotMachine {
    constructor() {
        this.#init();
    }

    #init() {
        this.coinCounter = 0;
        this.roulette1 = false;
        this.roulette2 = false;
        this.roulette3 = false;
    }

    #randomBoolean() {
        return Math.random() >= 0.5;
    }

    play() {
        this.coinCounter++;
        this.roulette1 = this.#randomBoolean();
        this.roulette2 = this.#randomBoolean();
        this.roulette3 = this.#randomBoolean();
        if (this.roulette1 && this.roulette2 && this.roulette3) {
            console.log(`Congratulations!!!. You won ${this.coinCounter} coins!!`);
            this.#init();
        } else {
            console.log("Good luck next time!!");
        }
    }
}

const machine = new SlotMachine();

for (let i = 0; i < 10; i++) {
    machine.play()
}






