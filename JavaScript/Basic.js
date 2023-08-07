// undefined
// console.log(a) 

// ReferenceError: Cannot access 'b' before initialization
// console.log(b) 

// ReferenceError: Cannot access 'c' before initialization
// console.log(c)


// undefined
// aaaa2
// a2();

// ReferenceError: Cannot access 'a3' before initialization
// a4();

// ReferenceError: Cannot access 'a1' before initialization
// a1();

var a = 10;
let b = 20;
const c = 40;

function a2(){
    console.log('aaaa2')
}

let a3  = function(){
    console.log('aaaa3')
}

var a4  = function(){
    console.log('aaaa3')
}

const a1 = () =>{
    console.log('aaaa1');
}

var a5 = () =>{
    console.log('aaaa1');
}
