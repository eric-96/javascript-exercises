const add = function(n1, n2) {
	return (n1 + n2)
};

const subtract = function(n1, n2) {
	return (n1 - n2)
};

const sum = function(arr) {
	return arr.reduce((accumulated, current) => accumulated + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulated, current) => accumulated * current);
};

const power = function(n1, n2) {
	return (n1 ** n2);
};
console.log(power(4,3))

const factorial = function(n1) {
  let result = 1;
  for (let i = n1; i >= 1; i--) {
    result *= i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
