function capitalize(input) {
	const string = input + '';
	return string[0].toUpperCase() + string.slice(1);
}

export default capitalize;
