/**
 * Array Methods
 *  find, map, filter, reduce, some, every, findIndex, 
 */

const arr = [
   1,2,3,4,5,6,12,15,11,13,15,'', null, undefined,false
];

const newArr = arr.filter((value)=> value);

console.log('===============First Array', newArr);
/**
 * Array copy operation creates shadow copy
 */
const shadowCopyArr = arr;
shadowCopyArr[0] = 4;

// console.log(shadowCopyArr, arr, shadowCopyArr === arr);

/**
 * The find() method returns the first element in the provided array that satisfies the provided testing function. 
 * If no values satisfy the testing function, undefined is returned.
 * findIndex() method return the first index in the provided array that satisfies the provided condiation
 */
const findValue = arr.find((value) => value === 15);
// o/p : 15
// console.log('findValue', findValue);

const findValueIndex = arr.findIndex((value) => value === 15);

// console.log('findValueIndex', findValueIndex);


/**
 * Filter method filtered out elements from the given array which matches the condition
 * and returns the filtered array
 * makes shallow copy of an array
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present',''];

const filteredArray = words.filter((word,index,arr) => {
    arr[index] += 'aaaaa';
    return word.length > 6;
});

// console.log('filteredArray', filteredArray, words);


const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    4: "d",
};
  console.log(Array.prototype.filter.call(arrayLike, (x) => {
    // console.log(x);
    return x = "b"
}));
  

/**
 * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */
const arr1 = [1, 2,'', [3, 4,[2,3,4]]];

const flatValue = arr1.flat(1);

console.log('flatValue', flatValue);