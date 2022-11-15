const radius = [4, 5, 6, 7];
const area = (para) => {
  return (para * para * Math.PI).toFixed(2);
}
const circumference = (para) => {
  return (2 * para * Math.PI).toFixed(2);
};
const diameter = (para) => {
  return (2 * para).toFixed(2);
};
 Array.prototype.calArea = (formula,radiusArray) => {
  let Output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    Output.push(formula(radiusArray[i]));
  }
  return Output;
};
console.log(radius.calArea(circumference,radius));
//console.log(calArea(circumference,radius));