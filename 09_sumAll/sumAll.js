const sumAll = function (start, end) {
  // Swap if greater number starts
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  // Check for negative numbers
  if (start < 0 || end < 0) {
    return 'ERROR';
  }
  // Check if not a number or float
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return 'ERROR';
  }
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
