import { TestScheduler } from 'jest';
import capitalize from './capitalize';

test('Returns string', () => {
	expect(typeof capitalize('string')).toBe('string');
});

test('Converts numbers to strings', () => {
	expect(typeof capitalize(1)).toBe('string');
});

test('Converts null to string', () => {
	expect(typeof capitalize(null)).toBe('string');
});

test('Converts undefined to string', () => {
	expect(typeof capitalize(undefined)).toBe('string');
});

test('Converts booleans to string', () => {
	expect(typeof capitalize(true)).toBe('string');
});

test('Capitalizes first letter', () => {
	expect(capitalize('string')).toBe('String');
});
