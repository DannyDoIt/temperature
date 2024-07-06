var globalVariable = "I'm in global scope";

function myFunction(){
    // This function can access globalVariable
    console.log(globalVariable);
}

myFunction();

// local
function myFunction(){
    var localVariable = "I'm in local scope";
    console.log(localVariable);
}

myFunction();
// Accessing localVariable here would result in error

if (true) {
    console.log(localVariable);
    let blockVariable = "I'm in block variable4";
    console.log(globalVariable);
    console.log(blockVariable);
}

//object literal {}
let student1 = {
    name:"Kevin",
    email:"kevin@gmail.com",
    grade101:3.5,
    grade102:3.9
}

let student2={

}

console.log(student1);
console.log(student2);

//Arrays []
let myArray=[10,false,"Richard",student2];
console.log(myArray[2]);//Richard