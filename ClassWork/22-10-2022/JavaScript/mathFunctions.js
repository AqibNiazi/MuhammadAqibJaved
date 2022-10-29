function squareroot(){
    let value=document.getElementById("value").value;
    document.getElementById("res").value=Math.sqrt(value);
    
}
function ceilValue(){
    let value=document.getElementById("value").value;
    document.getElementById("res").value=Math.ceil(value);
    
}

function floorValue(){
    let value=document.getElementById("value").value;
    document.getElementById("res").value=Math.floor(value);
    
}
function roundValue(){
    let value=document.getElementById("value").value;
    document.getElementById("res").value=Math.round(value);
    
}