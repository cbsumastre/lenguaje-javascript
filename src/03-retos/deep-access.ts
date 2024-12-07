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
  
  const deepGet = () => {};
  
  console.log(deepGet2(myObject2, "x")); // undefined
  console.log(deepGet2(myObject2, "a")); // 1
  console.log(deepGet2(myObject2, "b")); // { c: null, d: {....}}
  console.log(deepGet2(myObject2, "b", "c")); // null
  console.log(deepGet2(myObject2, "b", "d", "f", "g")); // bingo
  console.log(deepGet2(myObject2));  // {a: 1, b: {...}}