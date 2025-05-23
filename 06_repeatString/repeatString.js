const repeatString = function (str, times) {
  if (times <= 0) return 'Something Went Wrong';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += str;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
