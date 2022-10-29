const numberArray=['1','2','3','4','5','6','7','8','9'];
//                                              pop()                       //

// let popValue=numberArray.pop();
// console.log(numberArray);
// console.log(popValue);

//                                              push()                       //

// let pushValue=numberArray.push('10');
// console.log(numberArray);
// console.log(pushValue);

//                                              shift()                       //


// let shiftValue=numberArray.shift();
// console.log(numberArray);
// console.log(shiftValue);

//                                              unshift()                       //

// let unshiftValue=numberArray.unshift('10');
// console.log(numberArray);
// console.log(unshiftValue);



//                                               find method                                  //
let x=numberArray.find((item)=>{
return item==='5';
})
console.log(x);