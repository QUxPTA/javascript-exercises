const removeFromArray = function (arr, ...itemsToRemove) {
  const newArray = [];
  arr.forEach((item) => {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
