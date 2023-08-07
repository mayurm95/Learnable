/**
 * How Object work in js behind scene
 * Object Method
 * Call,Apply, Bind
 */


const name1 = {
    firstName: 'mayur',
    lastName: 'mahajan',
    printName:function () {
        console.log('aa',this.firstName,this.lastName);        
    }
}
const name2 = {
   firstName: 'Animesh',
   lastName: 'kumar'
}
console.log(name1.printName.call(name2));
const printName = function (city, a){
    console.log(this.firstName,this.lastName,city,a);
}
const textA = printName.bind(name2,"jalgaon", 'aaaaa')
console.log(textA());
console.log(printName.apply(name2,["jalgaon", 'aaaaa']));
const obj = {a: {b: {c: {d: 4, e: 5, f: {g: 6}}, h: 7}}};
const objout = {};
const ab = (obj) => {
    for (const key in obj) {
        if(typeof obj[key]  === 'object'){
            ab(obj[key], key);
        }else{
            objout[key] = obj[key]
        }
    }
}
ab(obj);

console.log(objout)