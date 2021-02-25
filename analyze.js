const analyze = (array) => {
	return {
		average:
			array.reduce((acc, next) => {
				return acc + next;
			}) / array.length,
		min: array.reduce((acc, next) => {
			return acc < next ? acc : next;
		}),
		max: array.reduce((acc, next) => {
			return acc > next ? acc : next;
		}),
		length: array.length,
	};
};

export default analyze;
