import caesar from './caesar';

test('It returns', () => {
	expect(caesar('something')).toBeDefined();
});

test('It returns a different letter', () => {
	expect(caesar('a')).toBe('b');
});

test('It loops', () => {
	expect(caesar('z')).toBe('a');
});

test('It loops capitals', () => {
	expect(caesar('Z')).toBe('A');
});

test('It works with big nums', () => {
	expect(caesar('z', 53)).toBe('a');
});

test('It works with words', () => {
	expect(caesar('abc')).toBe('bcd');
});

test('It ignores punctuation', () => {
	expect(caesar('abc!?')).toBe('bcd!?');
});

test('It works with multiple words', () => {
	expect(caesar('abc def')).toBe('bcd efg');
});

test('It works with negative numbers', () => {
	expect(caesar('z', -1)).toBe('y');
});

test('It loops with negative numbers', () => {
	expect(caesar('a', -1)).toBe('z');
});

test('It works with capitals and negatives', () => {
	expect(caesar('Z', -1)).toBe('Y');
});

test('It loops with capitals and negative numbers', () => {
	expect(caesar('A', -1)).toBe('Z');
});

test('It works with large negative numbers', () => {
	expect(caesar('a', -27)).toBe('z');
});

test('Test everything', () => {
	expect(caesar('Defend the East wall of the castle!')).toBe(
		'Efgfoe uif Fbtu xbmm pg uif dbtumf!'
	);
});
