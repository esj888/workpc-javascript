const greet = name => { return "Arrow " + name + "!"; }
console.log(greet("function1"));      // calls arrow function

const greet2 = name => "Arrow " + name + "!";
console.log(greet("function2"));      // same function with no explicit return or brackets

