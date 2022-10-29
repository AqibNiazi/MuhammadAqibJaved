function colorChange(color){
    const colorclass = document.querySelector('#para');

    colorclass.classList.add('blue'); // hidden class added
document.getElementById("para").style.color=color;
    if(color==='red'){
        document.getElementById("red").style.color="red";
    }else if(color==='green'){
        document.getElementById("red").style.color="green";
    }else if(color==='blue'){
        document.getElementById("red").style.color="blue";
    }else{
        document.getElementById("red").style.color="black";

    }
   switch(color){

    case 'red':{
        document.getElementById("red").style.color="red";
        break;
    }
    case 'green':{
        document.getElementById("red").style.color="green";
        break;
    }
    case 'blue':{
        document.getElementById("red").style.color="blue";
        break;
    }
   }

}
