const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
  }
  
  const memoize = (fn:Function):Function => { };
  
  const memoized = memoize(expensiveFunction);
  console.log(memoized()); // Una única llamada // 3.1415
  console.log(memoized()); // 3.1415
  console.log(memoized()); // 3.1415