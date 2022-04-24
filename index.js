function receivesAFunction(callback){

  return  callback()
}

function returnsANamedFunction() {
    return function namedFn() {
      console.log("this is a callback function");
    };
  }

  function returnsAnAnonymousFunction(){
  return ()=>{}
  }