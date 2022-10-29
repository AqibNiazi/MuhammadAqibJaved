



function checkBox() {
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

    if (yes.checked == true) {
        let y = document.getElementById("yes").value;
        return document.getElementById("demo").innerHTML = y;
    }
    else if (no.checked == true) {
        var n = document.getElementById("no").value;
        return document.getElementById("demo").innerHTML = n;
    }
    else {
        return document.getElementById("demo").innerHTML = "*Please mark any of checkbox";
    }
}


let printRecord = () => {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let program = document.querySelector('#Program').value;
    let demo = document.getElementById('demo');
    let genderValue = document.querySelector('input[name="gender"]:checked').value;

    return demo.innerHTML = `first Name : ${fname} </br></br> Last Name : ${lname} </br></br> Email : ${email} </br></br> Program : ${program}  </br></br> Gender : ${genderValue} </br></br> Job : ${checkBox()}`;
}

