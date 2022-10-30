const addition = (a, b) =>  a + b;
console.log(`Addition ${addition(3, 4)}`);

const subtraction = (a, b) => a - b;
console.log(`subtraction :${subtraction(3, 4)}`);

const square=(num)=> num*2;
console.log(`Square : ${square(2)}`);

const divide=(num)=> num / 2;
console.log(`Divide :${divide(4)}`);

//                          Temparature Converter
const converter=(temp,char)=>{
if(char==='C'){
   let fahrenheit= (parseFloat(temp*1.8)+32).toFixed(2)+"F";       //Celsius to Fahrenheit
  let kelvin= (parseFloat(temp)+273.15).toFixed(2)+`K`;       //Celsius to Kelvin
  return console.log(`Fahrenheit: ${fahrenheit}  Kelvin : ${kelvin}`);
}else{
     let Celsius= (parseFloat(temp)-32/1.8).toFixed(2)+"C";     //Fahrenheit to Celsius
     let kelvin=(parseFloat((temp-32)/1.8)+273.15).toFixed(2)+"K";     //Fahrenheit to kelvin
    return console.log(`Celsius :${Celsius} kelvin: ${kelvin}`);
}
}
console.log(converter(20,'C'));

const obj = {
  name: "Muhammad Aqib javed",
  university: "UET Taxila",
  calculatePercentage: (num) => {
    return `${((num / 1100) * 100).toFixed(2)} %`;
  },
};
console.log(
  `Name : ${obj.name}\n University : ${
    obj.university
  }\n Percentage :${obj.calculatePercentage(992)}`
);

//   

// //                                Task 1
const repeatElements = (elem, n)=>{
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(elem);
    };

    return arr;
};
console.log(repeatElements('a',3));

// //                Task 2
const revertArray=(input)=>{
    var newArr=[];
    for(let i=input.length-1;i>=0;i--){
        newArr.push(input[i]);
    }
    return newArr;
}
let arr=[1,2,3];
console.log(arr);
console.log(revertArray(arr));
//                                      Task 2 with forEach Loop
const reverseArray=(arr)=>{
const array=[];
  arr.forEach(element => {
    array.unshift(element);
  });
  return array;
}
console.log(reverseArray([1,2,3,4,5]));

//                                              Task 3
const removeElement=(arr)=>{
return arr.filter((item)=>{
return Boolean(item);
})
}
const array=[0,1,false,2,undefined,2,3,'',null]
console.log(removeElement(array));

// const obj={a:10};
// obj.a=15;
// console.log(obj);
// const secondobj=obj;
// secondobj.a=5;
// console.log(obj);


const person = {
    address :  {
       city:"Taxila",
       country:"pakistan"
    },
    getAddress(){
return `City :${this.address.city}\nCountry :${this.address.country}` 
    }
  };
  console.log(person.getAddress());
  
