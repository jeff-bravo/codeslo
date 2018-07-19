let globalOne = "hello"; // this is a variable in the Global Scope

function myFunc(){
    let localOne = "Goodbye"; // this is a variable in the local local scope
    console.log(globalOne);
}


// console.log(localOne); // commented out because localOne produces an "undefined scope error"


let globalTwo = "goodbye";

function myFuncTwo(){
    let localTwo = "The second local variable.";
}

console.log(localTwo);

// we get an error because this local scope variable "localTwo" is undefined / local in scope.

