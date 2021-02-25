const reverseString = (input) => {
	const string = input + '';
	return string.split('').reverse().join('');
};

export default reverseString;
