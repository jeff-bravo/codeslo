let sample = "hello";
function firstFunction(){
    sample = "firstFunction = " + "goodbye";
    console.log(sample);
}

firstFunction();

function secondFunction(){
    sample = "secondFunction = " + "hello " + "goodbye " + "so long " + "farewell";
    console.log(sample);
}

secondFunction();

function thirdFunction(){
    const pi = 3.14159265359;
    // thisString = "thirdFunction = " + thisString;
    console.log("thirdFunction = " + pi);
}

thirdFunction();

function fourthFunction(){
    let myFirstName = "Jeff";
    // ßlet myLastName = "Bravo";
    // let Names = myFirstname + myLastName;
    // console.log("fourthFunction = " + Names);
}
fourthFunction();