//Check maximum number from arrays and console it.
const checkMaxNumber = (arr) => {
  let bigNum = 0;
  arr.forEach((element) => {
    debugger;
    let noReplica = element.filter(
      (ele) => element.filter((el) => el === ele).length === 1
    );
    let highestNumber = Math.max(...noReplica);
    if (bigNum < highestNumber) {
      bigNum = highestNumber;
    }
  });
  console.log(bigNum);
};
checkMaxNumber([
  [1, 2, 3, 4, 5, 1, 2, 3],
  [6, 7, 9, 11, 1, 2, 7, 11],
  [0, 1, 2, 3],
]);
