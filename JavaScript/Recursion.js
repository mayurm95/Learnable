  //object: {a: {b: {c: {d: 4, e: 5, f: {g: 6}}, h: 7}}} write a function to extract only object which has numeric values 
  // i.e. output should be {d: 4, e: 5, g: 6, h: 7} 
  // let data = {a: {b: {c: {d: 4, e: 5, f: {g: 6}}, h: 7}}};
  // let outputObj={};
  let recursive = (obj) => {
    for(let key in obj){
      if(typeof obj[key] == 'object'){
        recursive(obj[key],key)
      }else{
        outputObj[key] = obj[key];
      }
    }
  }
  
//   recursive(data)
  
//   console.log(outputObj)

// const c = 2;
// // let a; 
// console.log(a,b,c)
// var b;


// const a =[1,2,2,3,3,4,4];
// a.reduce((count, v) => count + (v ? 1 : 0), 0);

// a.map((v) => v ? v * 2 : v).length;



// return 3rd highest and 3rd lowest without using index


const getIndexNumberFromArray = (arr, index, order) =>{
    const sortedArr = arr.sort((a,b) => (b - a));
    const [ maxFirst, maxSecond , maxThird]  = sortedArr;
    const [minFirst, minSecond,minThird]  = sortedArr.reverse();
    return {
      highest : maxThird, 
      lowest: minThird
    }
}

console.log('thirdMin', getIndexNumberFromArray([3,4,5,6,9,0,12,45,56],3));

// const editedUser = {a:1,b:1,c:3}
// const updateUserDto = {b:0,e:5,f:6}
// const newData = {
//   ...editedUser,
//   ...updateUserDto,
// };

// console.log(newData);