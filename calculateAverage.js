/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
    if(array.length === 0){
      return 0;
    }
    let sum = array.reduce(function (previousValue, currentValue){
      return previousValue + currentValue;
    });
    let average = sum/(array.length);
    return average;
  }