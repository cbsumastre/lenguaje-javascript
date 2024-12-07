const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
}

// Apartado A
const memoize = (fn: Function) => {
    let cache: Function;
    return () => {
        if (!cache) {
            cache = fn();
        }
        return cache;
    }

};

console.log(">>>>>>>>>>>>>>>>> Apartado A");
const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415


// Apartado B
const memoizeSingleLine = (fn: Function) => {
    let cache: Function;
    return () => cache ??= fn();
}

console.log(">>>>>>>>>>>>>>>>> Apartado B");
const memoizedSingleLine = memoizeSingleLine(expensiveFunction);
console.log(memoizedSingleLine()); // Una única llamada // 3.1415
console.log(memoizedSingleLine()); // 3.1415
console.log(memoizedSingleLine()); // 3.1415


// Apartado C
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
    (count++, `${text} `.repeat(repetitions).trim())

type MemoizeArgumentsFn = (fn: Function) => any;
type ArgumentsArr = (string | number | boolean)[];

const memoizeArguments: MemoizeArgumentsFn = (fn) => {
    const cache = new Map();
    return (...arguments: ArgumentsArr) => {
        const key = JSON.stringify(arguments);
        // console.log("key",key);
        if (cache.has(key)) {
            // console.log("value",cache.get(key));
            return cache.get(key);
        } else {
            const result = fn(...arguments);
            cache.set(key, result);
            return result;
        }
    }

};

const memoizedGreet = memoizeArguments(repeatText);

console.log(">>>>>>>>>>>>>>>>> Apartado C");
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);    