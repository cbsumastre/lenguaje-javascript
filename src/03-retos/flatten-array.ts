type AplanarFn<T> = (array: T[]) => T[];

const aplanar: AplanarFn<any> = (array) => {
    return array.reduce((arr, item) => {
        return arr.concat(Array.isArray(item) ? aplanar(item) : item);
    }, []);
}

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

console.log(aplanar(sample));