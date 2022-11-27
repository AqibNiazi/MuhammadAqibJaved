function zero(param) {
  return param ? param(0):0;

}
function one(param) {
  return param ? param(1):1;

}
function two(param) {
  return param ? param(2):2;

}
function three(param) {
  return param ? param(3):3;

}
function four(param) {
  return param ? param(4):4;

}
function five(param) {
return param ? param(5):5;
}
function six(param) {
  return param ? param(6):6;

}
function seven(param) {
  return param ? param(7):7;

}
function eight(param) {
  return param ? param(8):8;

}
function nine(param) {
  return param ? param(9):9;

}

function add(param) {
  return (param1)=>param1+param;
}
function Sub(param) {
  return (param1)=>param1-param;
}
function Mul(param) {
  debugger;
  return (param1)=>param1*param;
}
function Div(param) {
  return (param1)=>param1/param;
}

const parentFunc =Mul(nine())
// (param) => param + 9
console.log(parentFunc)
 let result = nine(parentFunc);

console.log(result);
