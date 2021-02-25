const calculator = {
	add(num1, num2) {
		return parseFloat(num1) + parseFloat(num2);
	},
	subtract(num1, num2) {
		return parseFloat(num1) - parseFloat(num2);
	},
	multiply(num1, num2) {
		return parseFloat(num1) * parseFloat(num2);
	},
	divide(num1, num2) {
		return parseFloat(num1) / parseFloat(num2);
	},
};

export default calculator;
