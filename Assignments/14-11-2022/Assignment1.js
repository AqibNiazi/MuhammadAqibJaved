///////////////////////////////Task 1////////////////////////////////
const tables = (array) => {
  for (let i = 1; i <= array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      console.log(`Table of ${i} = ${i}*${j} =${i * j}`);
    }
  }
};
tables([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

///////////////////////////////Task 2/////////////////////////////////
function isPrime(array) {
  let newArr = [];
  const primes = array.map((elem) => {
    let sqrtnum = Math.floor(Math.sqrt(elem));
    let prime = elem != 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (elem % i == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      newArr.push(elem);
    }
    return prime;
  });
const filterArray=newArr.filter((elem)=>{
  return (elem >25 && elem < 99)
})
  const sum = filterArray.reduce((accu, elem) => {
    return (accu += elem);
  }, 0);
  console.log(`prime Number Array = ${filterArray}\nSum=${sum}`);
}
const arr = [];
for (let i = 1; i <=100; i++) {
  arr[i] = i;
}
isPrime(arr);
///////////////////////////////Task 3/////////////////////////////////

const numberCheck=(array)=>{
    const arrayObj={
        positive:[],
        negative:[]
    }
array.map((elem)=>{
  if(elem > 0){
    arrayObj.positive.push(elem)
  }else{
    arrayObj.negative.push(elem)
  }
})
console.log(arrayObj);
}
numberCheck([10,-20,30,-40,-4,3,2,1]);
///////////////////////////////Task 4/////////////////////////////////
const abbrFun=(str)=>{
  let newArr=[]
  let splittedstr=str.split(" ");
for(let i=0;i<splittedstr.length;i++){
  newArr.push(splittedstr[i].charAt(0))
}
console.log(newArr.join(''));
}
abbrFun("Muhammad Aqib Javed");
///////////////////////////////Task 5/////////////////////////////////

// IN task5.html file
///////////////////////////////Task 6/////////////////////////////////

// IN task6.html file