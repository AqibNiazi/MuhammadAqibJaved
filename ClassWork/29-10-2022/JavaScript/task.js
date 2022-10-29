let employee=[{
    employeeId:'18-SE-50',
    employeeName:'M Aqib Javed', 
     employeeCompany:'UET Taxila', 
      employeeCompanyAddress:{
        city:'Taxila',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Chakwal',
        country:'Pakistan'
      },
      employeeSalary:50000,
      Islam:'true'
},
{
    employeeId:'18-SE-46',
    employeeName:'M Abdullah', 
     employeeCompany:'UET Taxila', 
      employeeCompanyAddress:{
        city:'Taxila',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Ranjanpur',
        country:'Pakistan'
      },
      employeeSalary:20000,
      Islam:'true'
},
{
    employeeId:'18-SE-48',
    employeeName:'Shahbaz Khan', 
     employeeCompany:'UET Taxila', 
      employeeCompanyAddress:{
        city:'Taxila',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'DG Khan',
        country:'Pakistan'
      },
      employeeSalary:30000,
      Islam:'false'
},
{
    employeeId:'18-SE-05',
    employeeName:'Fasih Mehmood', 
     employeeCompany:'UET Taxila', 
      employeeCompanyAddress:{
        city:'Taxila',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Chakwal',
        country:'Pakistan'
      },
      employeeSalary:45000,
      Islam:'true'
},
{
    employeeId:'18-cp-76',
    employeeName:'Sheraz Sultan', 
     employeeCompany:'UET Taxila', 
      employeeCompanyAddress:{
        city:'Taxila',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Chakwal',
        country:'Pakistan'
      },
      employeeSalary:35000,
      Islam:'true'
},
{
    employeeId:'20-CE-77',
    employeeName:'sarmad Abdullah', 
     employeeCompany:'UET Lahore', 
      employeeCompanyAddress:{
        city:'lahore',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Mianwali',
        country:'Pakistan'
      },
      employeeSalary:25000,
      Islam:'false'
},
{
    employeeId:'20-CE-13',
    employeeName:'Sheikh Zain', 
     employeeCompany:'UET Lahore', 
      employeeCompanyAddress:{
        city:'lahore',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Rawalpindi',
        country:'Pakistan'
      },
      employeeSalary:35000,
      Islam:'false'
},
{
    employeeId:'20-CE-17',
    employeeName:'M Sadiq', 
     employeeCompany:'UET Lahore', 
      employeeCompanyAddress:{
        city:'lahore',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Multan',
        country:'Pakistan'
      },
      employeeSalary:25000,
      Islam:'true'
},
{
    employeeId:'20-CE-11',
    employeeName:'M Naeem', 
     employeeCompany:'UET Lahore', 
      employeeCompanyAddress:{
        city:'lahore',
        country:'Pakistan'
      },
      employeeAddress:{
        city:'Islamabad',
        country:'Pakistan'
      },
      employeeSalary:45000,
      Islam:'true'
}];
// let religion=employee.find((item)=>{
//     return item.Islam==='true';
// });
// console.log(religion);

// let salary=employee.filter((item)=>{
//     return item > 30000;
// });
// console.log(religion);


//                         forEach() method                                                    //


// let empObject={}

// employee.forEach(element => {
//     if(element.employeeId==='18-SE-50'){
//         return empObject=element;
//     }
// });
// console.log(empObject);

// const arr1=[2,3,6,9,15,30,33,40,51];

// let result=arr1.filter((item)=>{
// return item%2===0;
// })
// console.log(result);

// const arr1=[2,3,6,9,15,30,33,40,51];
// let result1=arr1.map((item)=>{
//     debugger;
//     return item * 3;
//     })
//     console.log(result1);

//                                       FuzzBuzz problem                           //
var output = [];
var count = 1;
function fizzBuzz() {
while(count<=50){
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("Fuzz Buzz")
  }else if (count % 3 === 0 && count % 7 === 0) {
    output.push("Fuzz Duzz")
  }
   else if (count % 3 === 0) {
    output.push("Fuzz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } 
  else if (count % 7 === 0) {
    output.push("Duzz");
  } else {
    output.push(count);
  }
  count++;
}
  console.log(output);
}
fizzBuzz();