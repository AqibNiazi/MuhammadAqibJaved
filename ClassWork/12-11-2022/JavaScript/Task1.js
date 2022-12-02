//String check with simple function and conditional statements.
function checkString(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i])) {
      newarr.push(parseInt(arr[i]));
    } else if (arr[i] == "c") {
      newarr.pop();
    } else if (arr[i] == "d") {
      let num = newarr[newarr.length - 1];
      num  *= num;
      newarr.push(num);
    } else if (arr[i] == "+") {
      let num = newarr[newarr.length - 1] + newarr[newarr.length - 2];
      newarr.push(num);
    }
  }
  let result = newarr.reduce((accum, elem) => {
    debugger;
    return (accum += elem);
  });
  console.log(result);
}
checkString(["4", "5", "6", "c", "d", "+"]);

//string check with arrow functions and array method Map.
const checkString = (arr) => {
  let newarr = [];
  arr.map((elem) => {
    if (parseInt(elem)) {
      newarr.push(parseInt(elem));
    } else if (elem == "c") {
      newarr.pop();
    } else if (elem == "d") {
      let num = newarr[newarr.length - 1];
      num *= num;
      newarr.push(num);
    } else if (elem == "+") {
      let num = newarr[newarr.length - 1] + newarr[newarr.length - 2];
      newarr.push(num);
    }
  });
  let result = newarr.reduce((accum, elem) => {
    return (accum += elem);
  });
  console.log(result);
};
checkString(["4", "5", "6", "c", "d", "+"]);
