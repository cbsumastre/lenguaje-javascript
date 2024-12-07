const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

type DeepGetFn = (object: object, ...props: (string[] | undefined)) => object;

const deepGet: DeepGetFn = (object, ...props) => {
    if (!props || props.length <= 0) {
        return object;
    }

    const [firstProp, ...otherProps] = props;
    if (!firstProp) {
        return object;
    }

    const value = object[firstProp];
    if (!otherProps || otherProps.length === 0) {
        return value;
    }
    return deepGet(value, ...otherProps);
}

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}


console.log("*********************** Apartado B ******************");

type DeepSetFn = (value: number, object: Object, ...props: string[]) => void;
const deepSet: DeepSetFn = (value, object, ...props) => {
    if (!props || props.length === 0) {
        return;
    }

    const [firstProp, ...otherProps] = props;

    if (!otherProps || otherProps.length === 0) {
        object[firstProp] = value;
    }
    else if (!object.hasOwnProperty(firstProp)) {
        object[firstProp] = {};
    }

    deepSet(value, object[firstProp], ...otherProps);
}

const myObject2 = {};
deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}
