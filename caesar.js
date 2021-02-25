const caesar = (input, num = 1) => {
	while (num > 26) {
		num -= 26;
	}
	while (num < -26) {
		num += 26;
	}
	const array = input.split('');

	return array
		.map((char) => {
			if (
				(char.charCodeAt() > 96 && char.charCodeAt() < 123) ||
				(char.charCodeAt() > 64 && char.charCodeAt() < 91)
			) {
				if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
					// char is lower case
					if (char.charCodeAt() + num > 122) {
						return String.fromCharCode(96 + num);
					} else if (char.charCodeAt() + num < 97) {
						return String.fromCharCode(123 + num);
					}
				} else {
					// char is upper case
					if (char.charCodeAt() + num > 90) {
						return String.fromCharCode(64 + num);
					} else if (char.charCodeAt() + num < 65) {
						return String.fromCharCode(91 + num);
					}
				}
				return String.fromCharCode(char.charCodeAt() + num);
			} else {
				return char;
			}
		})
		.join('');
};

export default caesar;
