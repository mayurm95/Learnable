// undefined
// console.log(a) 
var a = 10;

// ReferenceError: Cannot access 'b' before initialization
// console.log(b) 
let b = 20;

// ReferenceError: Cannot access 'c' before initialization
// console.log(c)
const c = 40;


// aaaa2
// a2();
function a2(){
    console.log('aaaa2')
}

// a3()
let a3  = function(){
    console.log('aaaa3')
}

// ReferenceError: Cannot access 'a3' before initialization
// a4();
var a4  = function(){
    console.log('aaaa3')
}

// ReferenceError: Cannot access 'a1' before initialization
// a1();

const a1 = () =>{
    console.log('aaaa1');
}

// undefined is not function
a5()
var a5 = () =>{
    console.log('aaaa1');
}
