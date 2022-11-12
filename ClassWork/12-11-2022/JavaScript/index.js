// function fun(param){
// let flag=true;

//     if(flag){
//         console.log('flag is true');
//     }else{
//         console.log("flag is false");
//     }
// }

// flag=false;
// console.log(flag);
// fun();

const student={
    phone:923081177825,
    result:()=>{
        return `${this}`;
    }
}

console.log(student.result());