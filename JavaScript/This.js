//Ref: https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/


/**
 * “use strict”
    Prior to ES5, 
    - undeclared variables (those variables that don’t use the var keyword when initially introduced), were allowed to be used. When the “use strict” feature is turned on, a reference error is thrown.
 */

/** 
 * # `this` in function invocation
 * - `this` is a global object in func  this === globalThis/window  // true
 * -  it is behave exact diff in strict mode for inner scope and same scope
 *    but if it outerscope then we can access this as global   
 * -  when strict mode is on this === undefined
*/

// NOTE: globalThis (Node) == window(browser)

// 'use strict'
console.log('outside func', this === globalThis); // false bcz this == {} for outside func
function sum(a, b){
    // 'use strict';
    console.log('outerscope of nested func', this === globalThis);
    if(this === globalThis){
        this.a = 10;
    }
    return () => { // arrow function
         'use strict';
        console.log('innerscope of nested func', this === globalThis);
        if(this === globalThis){
            console.log('this.a', this.a); // prints 10 bcz arrow function does contain its own this outer scope this accessible inside it
        }
    return a + b;
    }
}


/**
 * A method is a function stored in a property of an object
 */

sum(5,6)();