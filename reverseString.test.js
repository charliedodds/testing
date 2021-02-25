import { TestScheduler } from 'jest';
import reverseString from './reverseString';

test('Return something', () => {
	expect(reverseString('something')).toBeDefined();
});

test('Returns a string', () => {
	expect(typeof reverseString(undefined)).toBe('string');
});

test('Reverses string', () => {
	expect(reverseString('reverse')).toBe('esrever');
});
