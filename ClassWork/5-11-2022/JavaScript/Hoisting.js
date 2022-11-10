function getName(a,b){

   return a+b;

}
// console.log(i);
const result=getName(3,4);
console.log(result);

const sum=(a,b)=>{
let result=a+b;
return result;
}
console.log(sum(3,4));
let num="Aqib";
console.log(typeof(num));
const student=()=>{
    let stu=["aqib","ali","umair"];
    for(let i=0;i<stu.length;i++){
        console.log(stu[i]);
    }
}
console.log(typeof(student));

//                                              Destructuring in JS
const obj={
   name:'Aqib',
   ph_no:'03081177825',
   address:"Chakwal",
   printData(){
    console.log(`Name ${this.name}`);
   }
}
console.log(`Name ${this.address}`);


const {name,address}=obj;
console.log(name,address);


