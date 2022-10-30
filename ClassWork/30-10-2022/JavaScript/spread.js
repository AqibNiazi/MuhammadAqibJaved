//                                                            Spread Operator

const arr1=['root','branch','tree'];
const arr2=[1,2,3,4];

let result=[...arr1,...arr2];
console.log(result);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(numbers);


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  myVehicle.wheel=4;

  console.log(myVehicle);
  delete myVehicle.model;
  console.log(myVehicle);

const myVehicleCopy={...myVehicle,company:"Ford"}
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  
  
  //Check the result object in the console:
  console.log(myVehicleCopy);