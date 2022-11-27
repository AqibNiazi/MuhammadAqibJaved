// write a method that reverse a number;
// Function to reverse Number
function reverseNum(n) {
    let r = n.toString().split('').reverse().join('');
    return  parseInt(r);
  }
  console.log(reverseNum(-322956));

// write a method that reverse a string
// write a method that prints prime Number | factorial

//SetTimeout method

console.log("Start");
setTimeout(() => {
  console.log("I will take 2 sec ");
}, 2000);
setTimeout(() => {
  console.log("I will take 3 sec");
}, 3000);
setTimeout(() => {
  console.log("I am again 2 sec call Back");
}, 2000);
console.log("End");



const asnyFunction = async () => {
  let req = await fetch("https://fakestoreapi.com/products");
  let data = await req.json();

  console.log(data);
};

asnyFunction();



// callBack Functions
function mycallBack(someFun){
console.log(someFun);
}
function first(){
    mycallBack("first")
}
function Second(){
    mycallBack("Second")
}
first();

const abc={
    a:"a",
    b:"b",
    c:{
        d:"d"
    },
}
// object destructuring
const {b,...res}=abc
console.log(b,res);
// Array destructuring
const arr=[1,2,3,4,5,6];
const [x,y,z,...rem]=arr;
console.log(x,y,z,rem);



// Task 1                  credit card number validator

    function creditCardValidation(creditCradNum)
    {
        if(creditCradNum==="number"){
            console.log();
        }
            let number=creditCradNum.split('-');
            let flag=false;
            for(let i=0;i<number.length;i++){
    
                if(number[i].length===4){
                    flag=true;
                }else{
                      flag=false;
                        break;
                }
               
            }
            return flag;
        
    }  
    console.log(creditCardValidation('1234-1234-1234-1234'));


// Task 2  count number of words in the string.
function countWords(str){
let str1=str.split(' ')
console.log(str1.length);

console.log(str1);
}
countWords("I am Software Engineer");
countWords("How are you ?");
