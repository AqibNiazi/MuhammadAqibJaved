

let x=()=>{
let fname=document.getElementById('fname').value;

let lname=document.getElementById('lname').value;

let email=document.getElementById('email').value;
let program=document.querySelector('#Program').value;

let demo=document.getElementById('demo');

let genderValue = document.querySelector('input[name="gender"]:checked').value;
demo.innerHTML=`first Name : ${fname} </br></br> Last Name : ${lname} </br></br> Email : ${email} </br></br> Program : ${program}  </br></br> Gender : ${genderValue}`;

}
