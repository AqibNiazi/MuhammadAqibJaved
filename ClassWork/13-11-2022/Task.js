const users=[
    {firstName:'Mark',LastName:'Zumberberg',age:38},
    {firstName:'Donald',LastName:'Trump',age:75},
    {firstName:'Elon',LastName:'Musk',age:50},
    {firstName:'Aqib',LastName:'Javed',age:47},
    {firstName:'Tom',LastName:'Hardy',age:75}
]
///////////////////////Task 1////////////////////////////////////////////

let fullnames=users.map((ele)=>{
    
         return ele.firstName +" "+ ele.LastName;
    });
console.log(fullnames);
/////////////////////////Task 2///////////////////////////////
let totalsum=users.reduce((accu,current)=>{
if(accu[current.age]){
    accu[current.age]=++accu[current.age];
}else{
    accu[current.age]=1;
}
return accu;
},{})
console.log(totalsum);
/////////////////Task 3 ////////////////////////////////////
let firstnames=users.filter(Element=>{
    return Element.age < 50;
})

console.log(firstnames.map((ele)=>{
    return ele.firstName;
}));
    
     