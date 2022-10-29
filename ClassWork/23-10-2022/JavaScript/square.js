function cal(){
    var calculate="";
    let result=document.getElementById("result");
    let value=document.getElementById("value").value;
  let select=document.getElementById("select").value;
      if(select==="double"){
          calculate=parseInt(value+value);
          document.getElementById("result").value=calculate;
      }else{
          calculate=value*2;
          document.getElementById("result").value=calculate;
      }
  }