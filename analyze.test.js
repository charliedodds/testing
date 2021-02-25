import analyze from './analyze';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('It returns an object', () => {
	expect(typeof analyze(testArray)).toBe('object');
});

test('Return object is not null', () => {
	expect(analyze(testArray)).not.toBeNull();
});

test('Returns the average of array', () => {
	expect(analyze(testArray).average).toBe(5.5);
});

test('Returns the min of array', () => {
	expect(analyze(testArray).min).toBe(1);
});

test('Returns the max of array', () => {
	expect(analyze(testArray).max).toBe(10);
});

test('Returns the length of array', () => {
	expect(analyze(testArray).length).toBe(10);
});

test('Returns object with avg, min, max and length', () => {
	expect(analyze(testArray)).toEqual({
		average: 5.5,
		min: 1,
		max: 10,
		length: 10,
	});
});
